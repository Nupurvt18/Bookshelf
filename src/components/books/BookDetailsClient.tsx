"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Rating from "@/components/ui/Rating";
import ReviewForm from "@/components/reviews/ReviewForm";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Recommendations from "@/components/ai/Recommendations";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Book, Review, User } from "@/lib/definitions";
import { useAuth } from "@/contexts/AuthContext";
import BookReviewsClient from "./BookReviewsClient";
import { getAverageRating } from "@/lib/data";

interface BookDetailsClientProps {
    book: Book;
    initialReviews: (Review & { user: User | null })[];
    initialAverageRating: number;
    addedByUser: User | null;
}

export default function BookDetailsClient({ book, initialReviews, initialAverageRating, addedByUser }: BookDetailsClientProps) {
    const { user } = useAuth();
    const [reviews, setReviews] = useState(initialReviews);
    const [isEditingReview, setIsEditingReview] = useState(false);

    const averageRating = useMemo(() => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        const average = totalRating / reviews.length;
        return Math.round(average * 10) / 10;
    }, [reviews]);
    
    const handleReviewAdded = (newReview: Review) => {
        const newReviewWithUser = { ...newReview, user };
        setReviews(prevReviews => [newReviewWithUser, ...prevReviews.filter(r => r.userId !== user?.id)]);
        setIsEditingReview(false);
    };

    const handleReviewUpdated = (updatedReview: Review) => {
        const updatedReviewWithUser = { ...updatedReview, user };
        setReviews(prevReviews => prevReviews.map(r => r.id === updatedReview.id ? updatedReviewWithUser : r));
        setIsEditingReview(false);
    }

    const handleReviewDeleted = (reviewId: string) => {
        setReviews(prevReviews => prevReviews.filter(r => r.id !== reviewId));
    }

    const handleEditClick = useCallback(() => {
        setIsEditingReview(true);
        // Scroll to the review form
        document.getElementById('review-form')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const userReview = useMemo(() => {
        if (!user) return undefined;
        return reviews.find(r => r.userId === user.id);
    }, [reviews, user]);


    return (
        <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                <div className="md:col-span-1">
                    <Card className="overflow-hidden md:sticky top-20">
                        <Image
                            src={book.coverImage}
                            alt={`Cover of ${book.title}`}
                            width={400}
                            height={600}
                            className="w-full object-cover"
                            data-ai-hint="book cover"
                            priority
                        />
                    </Card>
                </div>

                <div className="md:col-span-2">
                    <Badge variant="secondary" className="mb-2">{book.genre}</Badge>
                    <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">{book.title}</h1>
                    <p className="text-lg md:text-xl mt-1 text-muted-foreground font-medium">{book.author}</p>
                    <div className="flex items-center gap-4 mt-4">
                        <Rating rating={averageRating} starClassName="h-6 w-6" />
                        <span className="text-muted-foreground text-sm">{reviews.length} review(s)</span>
                    </div>

                    <Separator className="my-6" />

                    <div className="prose dark:prose-invert max-w-none text-base">
                        <p>{book.description}</p>
                    </div>

                    <div className="mt-4 text-sm text-muted-foreground space-y-1">
                        <p>Published in {book.year}</p>
                        {addedByUser && <p>Added by {addedByUser.name}</p>}
                    </div>

                    <Separator className="my-8" />
                    
                    <BookReviewsClient 
                        reviews={reviews} 
                        onEdit={handleEditClick}
                        onDelete={handleReviewDeleted}
                    />

                    {(isEditingReview || !userReview) && (
                        <div id="review-form">
                            <ReviewForm 
                                bookId={book.id} 
                                existingReview={userReview}
                                onReviewAdded={handleReviewAdded}
                                onReviewUpdated={handleReviewUpdated}
                                onCancelEdit={() => setIsEditingReview(false)}
                            />
                        </div>
                    )}


                    <Separator className="my-12" />

                    <div>
                        <h2 className="text-2xl font-headline font-semibold mb-4">You might also like</h2>
                        <Suspense fallback={<Skeleton className="h-48 w-full" />}>
                            <Recommendations book={book} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
