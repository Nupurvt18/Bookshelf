"use client";

import { useEffect, useState, use } from "react";
import { getBookById, getReviewsForBook, getUserById } from "@/lib/data";
import BookDetailsClient from "@/components/books/BookDetailsClient";
import type { Book, Review, User } from "@/lib/definitions";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound } from "next/navigation";

type BookDetailsData = {
  book: Book;
  reviews: (Review & { user: User | null })[];
  averageRating: number;
  addedByUser: User | null;
}

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<BookDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = use(params);

  useEffect(() => {
    async function fetchData(bookId: string) {
      setLoading(true);
      const book = await getBookById(bookId);

      if (!book) {
        setLoading(false);
        // We can't use notFound() directly in useEffect, so we'll handle it
        // by rendering a not found message or redirecting. For now, let's
        // just stop loading and data will be null. The return will handle it.
        return;
      }

      const initialReviews = await getReviewsForBook(book.id);
      
      const reviewsWithUser = await Promise.all(initialReviews.map(async (review) => {
        const user = await getUserById(review.userId);
        return { ...review, user: user || null };
      }));

      // Calculate average rating on the client after fetching reviews
      const calculateAverageRating = (reviews: Review[]) => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        const average = totalRating / reviews.length;
        return Math.round(average * 10) / 10;
      };
      
      const initialAverageRating = calculateAverageRating(reviewsWithUser);
      const addedByUser = await getUserById(book.addedBy);

      setData({
        book,
        reviews: reviewsWithUser,
        averageRating: initialAverageRating,
        addedByUser: addedByUser || null
      });

      setLoading(false);
    }

    if (id) {
        fetchData(id);
    }
  }, [id]);

  if (loading) {
    return <BookDetailsSkeleton />;
  }

  if (!data) {
    // This will be triggered if the book was not found.
    return notFound();
  }

  return (
    <BookDetailsClient 
      book={data.book} 
      initialReviews={data.reviews} 
      initialAverageRating={data.averageRating}
      addedByUser={data.addedByUser}
    />
  );
}


function BookDetailsSkeleton() {
  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div className="md:col-span-1">
          <Skeleton className="w-full aspect-[2/3]" />
        </div>
        <div className="md:col-span-2 space-y-4">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-7 w-32" />
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-px w-full my-6" />
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
