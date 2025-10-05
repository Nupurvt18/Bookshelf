"use client";

import { Review, User } from "@/lib/definitions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "@/components/ui/Rating";
import { Button } from "../ui/button";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteReview } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


interface ReviewCardProps {
  review: Review;
  user: User | null;
  onEdit: (reviewId: string) => void;
  onDelete: (reviewId: string) => void;
}

export default function ReviewCard({ review, user, onEdit, onDelete }: ReviewCardProps) {
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  if (!user) return null;

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
        await deleteReview(review.id);
        toast({ title: "Review deleted" });
        onDelete(review.id);
    } catch (error) {
        toast({ variant: "destructive", title: "Failed to delete review" });
    } finally {
        setIsDeleting(false);
    }
  };


  return (
    <div className="flex space-x-3 sm:space-x-4">
      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
        <AvatarImage src={user.profilePhoto || `https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex justify-between items-start">
            <div>
                <p className="font-semibold text-sm sm:text-base">{user.name}</p>
                <div className="flex items-center gap-2">
                <Rating rating={review.rating} />
                <span className="text-xs text-muted-foreground">{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
            {currentUser && review.userId === currentUser.id && (
                 <AlertDialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => onEdit(review.id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                            </DropdownMenuItem>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem className="text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </AlertDialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your review.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
        <p className="mt-2 text-sm text-foreground/80">{review.reviewText}</p>
      </div>
    </div>
  );
}
