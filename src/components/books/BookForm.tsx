"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book } from "@/lib/definitions";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { addBook, updateBook, getGenres } from "@/lib/data";
import { useAuth } from "@/contexts/AuthContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Image from "next/image";
import { Camera } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  author: z.string().min(1, { message: "Author is required." }),
  genre: z.string().min(1, { message: "Genre is required." }),
  year: z.coerce.number().int().min(1000, "Invalid year").max(new Date().getFullYear(), "Year cannot be in the future."),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  coverImage: z.string().optional(),
});

interface BookFormProps {
  book?: Book;
}

export default function BookForm({ book }: BookFormProps) {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [allGenres, setAllGenres] = useState<string[]>([]);
  const isEditing = !!book;
  const [imagePreview, setImagePreview] = useState<string | null>(book?.coverImage || null);

  useEffect(() => {
    async function fetchGenres() {
        const genres = await getGenres();
        setAllGenres(genres);
    }
    fetchGenres();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: book?.title || "",
      author: book?.author || "",
      genre: book?.genre || "",
      year: book?.year || new Date().getFullYear(),
      description: book?.description || "",
      coverImage: book?.coverImage || "",
    },
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        form.setValue("coverImage", result);
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
      toast({ variant: 'destructive', title: "Authentication error", description: "You must be logged in." });
      return;
    }
    setLoading(true);
    
    const coverImage = values.coverImage || `https://picsum.photos/seed/${values.title.replace(/\s/g, '')}/400/600`;

    try {
      if (isEditing && book) {
        await updateBook({ ...book, ...values, coverImage });
        toast({ title: "Book Updated", description: `"${values.title}" has been successfully updated.` });
        router.push(`/books/${book.id}`);
      } else {
        await addBook({ ...values, addedBy: user.id, coverImage });
        toast({ title: "Book Added", description: `"${values.title}" has been added to the library.` });
        router.push(`/`);
      }
      router.refresh(); // To reflect changes in the book list
    } catch (error) {
      toast({ variant: 'destructive', title: "An error occurred", description: "Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel htmlFor="cover-upload" className="cursor-pointer">
                <div className="w-40 h-60 rounded-md border-2 border-dashed border-muted-foreground/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors relative">
                  {imagePreview ? (
                    <Image src={imagePreview} alt="Cover preview" layout="fill" objectFit="cover" className="rounded-md" />
                  ) : (
                    <div className="text-center">
                      <Camera className="mx-auto h-8 w-8"/>
                      <p className="text-xs mt-1">Upload Cover</p>
                    </div>
                  )}
                </div>
              </FormLabel>
              <FormControl>
                <Input id="cover-upload" type="file" accept="image/*" className="sr-only" onChange={handleImageChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl><Input placeholder="The Great Gatsby" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl><Input placeholder="F. Scott Fitzgerald" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {allGenres.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Published Year</FormLabel>
                <FormControl><Input type="number" placeholder="1925" {...field} /></FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl><Textarea placeholder="A short summary of the book..." {...field} rows={5} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (isEditing ? 'Saving...' : 'Adding...') : (isEditing ? 'Save Changes' : 'Add Book')}
        </Button>
      </form>
    </Form>
  );
}
