import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
  totalReviews?: number;
}

export default function Rating({
  rating,
  maxRating = 5,
  className,
  starClassName,
  totalReviews,
}: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4 text-accent",
              (i < fullStars || (i === fullStars && hasHalfStar)) ? "fill-current" : "fill-transparent",
              starClassName
            )}
            style={{
              clipPath: i === fullStars && hasHalfStar ? 'inset(0 50% 0 0)' : 'none'
            }}
          />
        ))}
      </div>
      {totalReviews !== undefined && (
        <span className="text-xs text-muted-foreground">({totalReviews})</span>
      )}
    </div>
  );
}
