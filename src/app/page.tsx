import BookList from "@/components/books/BookList";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getGenres } from "@/lib/data";

export default async function Home() {
  const genres = await getGenres();

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-primary">
          Welcome to BookShelf
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Your personal corner for discovering, discussing, and diving deep into the world of books. Find your next great read today.
        </p>
      </header>
      <Suspense fallback={<BookListSkeleton />}>
        <BookList genres={genres} />
      </Suspense>
    </div>
  );
}

function BookListSkeleton() {
  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Skeleton className="h-10 w-full md:w-1/2" />
        <Skeleton className="h-10 w-full md:w-1/4" />
        <Skeleton className="h-10 w-full md:w-1/4" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="aspect-[2/3] w-full" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
