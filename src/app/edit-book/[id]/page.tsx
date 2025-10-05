import BookForm from "@/components/books/BookForm";
import { getBookById } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default async function EditBookPage({ params }: { params: { id: string } }) {
    const book = await getBookById(params.id);

    if (!book) {
        notFound();
    }
    
    // In a real app, you would check if the logged in user is the owner of the book.
    // For now, we allow editing for demo purposes.
    // const { user } = useAuth();
    // if (user.id !== book.addedBy) { router.push('/'); }

    return (
        <ProtectedRoute>
            <div className="container mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">Edit Book</CardTitle>
                        <CardDescription>Update the details for &quot;{book.title}&quot;.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <BookForm book={book} />
                    </CardContent>
                </Card>
            </div>
        </ProtectedRoute>
    );
}
