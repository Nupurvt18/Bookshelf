"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Book } from "@/lib/definitions";
import { useState, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from "@/components/ui/popover";

interface BookSearchProps {
  onSearch: (term: string) => void;
  onGenreChange: (genre: string) => void;
  onSortChange: (sortBy: string) => void;
  genres: string[];
  books: Book[];
}

export default function BookSearch({
  onSearch,
  onGenreChange,
  onSortChange,
  genres,
  books,
}: BookSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const suggestions = useMemo(() => {
    if (!searchTerm) return [];
    
    const lowercasedTerm = searchTerm.toLowerCase();
    const titleSuggestions = books
      .filter(book => book.title.toLowerCase().includes(lowercasedTerm))
      .map(book => ({ type: 'Title', value: book.title }));

    const authorSuggestions = books
      .filter(book => book.author.toLowerCase().includes(lowercasedTerm))
      .map(book => ({ type: 'Author', value: book.author }));
      
    // Remove duplicate authors
    const uniqueAuthorValues = Array.from(new Set(authorSuggestions.map(s => s.value)));
    const uniqueAuthorSuggestions = uniqueAuthorValues.map(value => ({ type: 'Author', value }));

    const results = [...titleSuggestions, ...uniqueAuthorSuggestions].slice(0, 10);
    return results;
  }, [searchTerm, books]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    setPopoverOpen(!!value);
  };

  const handleSuggestionClick = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
    setPopoverOpen(false);
  };
  
  return (
    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverAnchor asChild>
          <div className="relative sm:col-span-2 lg:col-span-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by title or author..."
              className="pl-10"
              onChange={handleInputChange}
              value={searchTerm}
              autoComplete="off"
            />
          </div>
        </PopoverAnchor>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
          {suggestions.length > 0 && (
            <ul className="py-1">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-3 py-2 text-sm hover:bg-accent cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion.value)}
                >
                  <span className="font-semibold">{suggestion.type}: </span>{suggestion.value}
                </li>
              ))}
            </ul>
          )}
        </PopoverContent>
      </Popover>
      <Select onValueChange={onGenreChange} defaultValue="all">
        <SelectTrigger>
          <SelectValue placeholder="Filter by genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Genres</SelectItem>
          {genres.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={onSortChange} defaultValue="title">
        <SelectTrigger>
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title">Sort by Title</SelectItem>
          <SelectItem value="year">Sort by Published Year</SelectItem>
          <SelectItem value="rating">Sort by Average Rating</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
