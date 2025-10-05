"use client";

import { Card, CardContent } from "@/components/ui/card";
import ReviewCard from "@/components/reviews/ReviewCard";
import RatingDistributionChart from "@/components/charts/RatingDistributionChart";
import type { Review, User } from "@/lib/definitions";

interface BookReviewsClientProps {
    reviews: (Review & { user: User | null })[];
    onEdit: (reviewId: string) => void;
    onDelete: (reviewId: string) => void;
}

export default function BookReviewsClient({ reviews, onEdit, onDelete }: BookReviewsClientProps) {
    return (
        <div>
            <h2 className="text-2xl font-headline font-semibold mb-6">Reviews</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <ReviewCard 
                                key={review.id} 
                                review={review} 
                                user={review.user} 
                                onEdit={onEdit} 
                                onDelete={onDelete}
                            />
                        ))
                    ) : (
                        <p className="text-muted-foreground">No reviews yet. Be the first to write one!</p>
                    )}
                </div>
                <div className="row-start-1 xl:col-start-2">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Rating Distribution</h3>
                            <RatingDistributionChart reviews={reviews} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
