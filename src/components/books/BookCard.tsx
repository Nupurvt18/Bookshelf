import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Book } from "@/lib/definitions";
import { getAverageRating } from "@/lib/data";
import Rating from "../ui/Rating";

interface BookCardProps {
  book: Book & { averageRating?: number };
}

export default function BookCard({ book }: BookCardProps) {
  const averageRating = book.averageRating ?? getAverageRating(book.id);

  return (
    <Link href={`/books/${book.id}`} className="group">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border-border/80 hover:border-primary/50 overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-[2/3] w-full overflow-hidden">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              width={400}
              height={600}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="book cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 flex-grow">
          <h3 className="font-headline font-semibold text-sm sm:text-base leading-tight truncate group-hover:text-primary">
            {book.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">{book.author}</p>
        </CardContent>
        <CardFooter className="p-3 sm:p-4 pt-0">
          <Rating rating={averageRating} starClassName="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </CardFooter>
      </Card>
    </Link>
  );
}
