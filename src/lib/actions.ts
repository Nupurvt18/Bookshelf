"use server";

import { getBookRecommendations, type BookRecommendationsInput } from "@/ai/flows/book-recommendations";

export async function handleGetRecommendations(input: BookRecommendationsInput) {
    try {
        const result = await getBookRecommendations(input);
        return result;
    } catch (error) {
        console.error("Error fetching book recommendations:", error);
        return { recommendations: [] };
    }
}
