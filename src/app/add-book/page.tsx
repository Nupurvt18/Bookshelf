"use client";

import BookForm from "@/components/books/BookForm";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddBookPage() {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, loading, router]);

    if (loading || !isAuthenticated) {
        // You can show a loading spinner here
        return <div className="text-center p-10">Loading...</div>;
    }

    return (
        <div className="container mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Add a New Book</CardTitle>
                    <CardDescription>Fill out the details below to add a new book to the library.</CardDescription>
                </CardHeader>
                <CardContent>
                    <BookForm />
                </CardContent>
            </Card>
        </div>
    );
}
