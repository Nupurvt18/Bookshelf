"use client";

import { useEffect, useState } from "react";
import { Book as BookType } from "@/lib/definitions";
import { handleGetRecommendations } from "@/lib/actions";
import { BookRecommendationsOutput } from "@/ai/flows/book-recommendations";
import BookCard from "../books/BookCard";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Recommendations({ book }: { book: BookType }) {
  const [recommendations, setRecommendations] = useState<BookRecommendationsOutput['recommendations']>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      setLoading(true);
      const result = await handleGetRecommendations({
        viewedBooks: [{
          title: book.title,
          author: book.author,
          genre: book.genre,
          description: book.description
        }]
      });
      
      // Simulate creating full book objects for display
      const recommendedBooksForDisplay = result.recommendations.map((rec, index) => ({
        ...rec,
        id: `rec-${index}-${Date.now()}`,
        year: new Date().getFullYear(),
        addedBy: 'ai',
        coverImage: `https://picsum.photos/seed/${rec.title.replace(/\s/g, '')}/400/600`
      }));

      setRecommendations(recommendedBooksForDisplay);
      setLoading(false);
    }

    fetchRecommendations();
  }, [book]);

  if (loading) {
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="aspect-[2/3] w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <Card className="text-center">
        <CardContent className="p-8">
            <p className="text-muted-foreground">Could not generate recommendations at this time.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recommendations.map((recBook) => (
        <BookCard key={recBook.id} book={recBook as BookType} />
      ))}
    </div>
  );
}
