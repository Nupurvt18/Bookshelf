"use client";

import { useState, useMemo, Fragment, useEffect } from "react";
import type { Book } from "@/lib/definitions";
import BookCard from "./BookCard";
import BookSearch from "./BookSearch";
import { Pagination } from "../ui/Pagination";
import { getAverageRating, getBooks } from "@/lib/data";
import { Skeleton } from "../ui/skeleton";

const BOOKS_PER_PAGE = 10;
const BOOKS_PER_ROW = 5;

interface BookListProps {
  genres: string[];
}

export default function BookList({ genres }: BookListProps) {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortBy, setSortBy] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      const books = await getBooks();
      setAllBooks(books);
      setLoading(false);
    }
    fetchBooks();
  }, []);

  const booksWithRatings = useMemo(() => {
    return allBooks.map(book => ({
      ...book,
      averageRating: getAverageRating(book.id)
    }));
  }, [allBooks]);


  const filteredAndSortedBooks = useMemo(() => {
    return booksWithRatings
      .filter((book) => {
        const matchesSearch =
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = genre === "all" || book.genre === genre;
        return matchesSearch && matchesGenre;
      })
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "year") {
          return b.year - a.year;
        } else if (sortBy === 'rating') {
          return b.averageRating - a.averageRating;
        }
        return 0;
      });
  }, [booksWithRatings, searchTerm, genre, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedBooks.length / BOOKS_PER_PAGE);
  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    return filteredAndSortedBooks.slice(startIndex, startIndex + BOOKS_PER_PAGE);
  }, [filteredAndSortedBooks, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const bookRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < paginatedBooks.length; i += BOOKS_PER_ROW) {
      rows.push(paginatedBooks.slice(i, i + BOOKS_PER_ROW));
    }
    return rows;
  }, [paginatedBooks]);

  if (loading) {
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
    )
  }

  return (
    <div>
      <BookSearch
        onSearch={setSearchTerm}
        onGenreChange={setGenre}
        onSortChange={setSortBy}
        genres={genres}
        books={allBooks}
      />
      {paginatedBooks.length > 0 ? (
        <div className="space-y-6">
          {bookRows.map((row, rowIndex) => (
            <Fragment key={rowIndex}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-x-6 md:gap-y-10">
                {row.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
              <div className="bookshelf-shelf"></div>
            </Fragment>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No books found.</p>
        </div>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
