"use client";

import { useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBooksByUser, getReviewsByUser, getBookById } from "@/lib/data";
import { Book as BookIcon } from "lucide-react";
import Link from "next/link";
import Rating from "@/components/ui/Rating";
import { useEffect, useState } from "react";
import { Book, Review } from "@/lib/definitions";
import ProfileForm from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  const { user } = useAuth();
  const [userBooks, setUserBooks] = useState<Book[]>([]);
  const [userReviews, setUserReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (user) {
      getBooksByUser(user.id).then(setUserBooks);
      getReviewsByUser(user.id).then(setUserReviews);
    }
  }, [user]);

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <ProfileForm />
                </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl"><BookIcon className="h-5 w-5"/> Books Added</CardTitle>
                </CardHeader>
                <CardContent>
                    {userBooks.length > 0 ? (
                        <ul className="space-y-4">
                            {userBooks.map(book => (
                                <li key={book.id} className="flex justify-between items-center">
                                    <div>
                                        <Link href={`/books/${book.id}`} className="font-semibold hover:underline">{book.title}</Link>
                                        <p className="text-sm text-muted-foreground">{book.author}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-muted-foreground">You haven&apos;t added any books yet.</p>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">Your Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    {userReviews.length > 0 ? (
                         <ul className="space-y-6">
                            {userReviews.map((review) => {
                                // This is inefficient in a real app, but ok for demo
                                const ReviewedBook = ({review}: {review: Review}) => {
                                    const [book, setBook] = useState<Book | null>(null);
                                    useEffect(() => {
                                        getBookById(review.bookId).then(b => setBook(b || null));
                                    }, [review.bookId]);

                                    return (
                                        <li key={review.id}>
                                            {book && <p className="font-semibold text-sm">Review for <Link href={`/books/${book.id}`} className="text-primary hover:underline">{book.title}</Link></p>}
                                            <Rating rating={review.rating} className="my-1"/>
                                            <p className="text-sm text-muted-foreground italic">&quot;{review.reviewText}&quot;</p>
                                        </li>
                                    )
                                }
                                return <ReviewedBook key={review.id} review={review} />
                            })}
                        </ul>
                    ) : (
                        <p className="text-muted-foreground">You haven&apos;t written any reviews yet.</p>
                    )}
                </CardContent>
            </Card>
        </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
