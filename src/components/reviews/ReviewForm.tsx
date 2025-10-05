"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { addReview, updateReview } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { Review } from "@/lib/definitions";

interface ReviewFormProps {
  bookId: string;
  existingReview?: Review;
  onReviewAdded: (review: Review) => void;
  onReviewUpdated: (review: Review) => void;
  onCancelEdit?: () => void;
}

export default function ReviewForm({ bookId, existingReview, onReviewAdded, onReviewUpdated, onCancelEdit }: ReviewFormProps) {
  const { isAuthenticated, user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const isEditing = !!existingReview;

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setReviewText(existingReview.reviewText);
    } else {
      setRating(0);
      setReviewText("");
    }
  }, [existingReview]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || rating === 0 || reviewText.trim() === "") {
        toast({
            variant: "destructive",
            title: "Incomplete review",
            description: "Please provide a rating and review text.",
        });
        return
    };
    setLoading(true);

    try {
        if (isEditing && existingReview) {
            const updatedReviewData = { ...existingReview, rating, reviewText, createdAt: new Date().toISOString().split('T')[0] };
            const updatedReview = await updateReview(updatedReviewData);
            toast({
                title: "Review updated!",
            });
            onReviewUpdated(updatedReview);
        } else {
            const newReview = await addReview({ bookId, userId: user.id, rating, reviewText });
            toast({
                title: "Review submitted!",
                description: "Thank you for your feedback.",
            });
            onReviewAdded(newReview);
        }
        
        // Reset form state only if not editing
        if (!isEditing) {
            setRating(0);
            setReviewText("");
        }

    } catch (error: any) {
         toast({
            variant: "destructive",
            title: "Submission failed",
            description: error.message || "Could not submit your review. Please try again.",
        });
    } finally {
        setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Card className="mt-8">
        <CardHeader>
            <CardTitle>{isEditing ? "Edit your review" : "Write a review"}</CardTitle>
            {!isEditing && <CardDescription>Share your thoughts with other readers.</CardDescription>}
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="text-sm font-medium mb-2 block">Your Rating</label>
                <div className="flex items-center">
                {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                    <button
                        type="button"
                        key={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHoverRating(ratingValue)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1"
                    >
                        <Star
                        className={cn(
                            "h-6 w-6 transition-colors",
                            ratingValue <= (hoverRating || rating)
                            ? "text-accent fill-accent"
                            : "text-muted-foreground"
                        )}
                        />
                    </button>
                    );
                })}
                </div>
            </div>
            <Textarea
                placeholder="What did you think of the book?"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={4}
            />
            <div className="flex gap-2">
                <Button type="submit" disabled={loading}>
                    {loading ? (isEditing ? "Saving..." : "Submitting...") : (isEditing ? "Save Changes" : "Submit Review")}
                </Button>
                {isEditing && <Button type="button" variant="outline" onClick={onCancelEdit}>Cancel</Button>}
            </div>
            </form>
      </CardContent>
    </Card>
  );
}
