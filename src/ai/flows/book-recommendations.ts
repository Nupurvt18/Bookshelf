'use server';

/**
 * @fileOverview Provides book recommendations based on user's viewed and reviewed books.
 *
 * - getBookRecommendations - A function to retrieve book recommendations.
 * - BookRecommendationsInput - The input type for the getBookRecommendations function.
 * - BookRecommendationsOutput - The return type for the getBookRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BookRecommendationsInputSchema = z.object({
  viewedBooks: z.array(
    z.object({
      title: z.string().describe('Title of the viewed book.'),
      author: z.string().describe('Author of the viewed book.'),
      genre: z.string().describe('Genre of the viewed book.'),
      description: z.string().describe('Description of the viewed book.'),
    })
  ).optional().describe('List of books the user has viewed.'),
  reviewedBooks: z.array(
    z.object({
      title: z.string().describe('Title of the reviewed book.'),
      author: z.string().describe('Author of the reviewed book.'),
      genre: z.string().describe('Genre of the reviewed book.'),
      description: z.string().describe('Description of the reviewed book.'),
      rating: z.number().describe('Rating given to the book by the user.'),
      reviewText: z.string().describe('Text review of the book by the user.'),
    })
  ).optional().describe('List of books the user has reviewed.'),
});

export type BookRecommendationsInput = z.infer<typeof BookRecommendationsInputSchema>;

const BookRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      title: z.string().describe('Title of the recommended book.'),
      author: z.string().describe('Author of the recommended book.'),
      genre: z.string().describe('Genre of the recommended book.'),
      description: z.string().describe('Description of the recommended book.'),
    })
  ).describe('List of recommended books based on viewed and reviewed books.'),
});

export type BookRecommendationsOutput = z.infer<typeof BookRecommendationsOutputSchema>;

export async function getBookRecommendations(input: BookRecommendationsInput): Promise<BookRecommendationsOutput> {
  return bookRecommendationsFlow(input);
}

const bookRecommendationsPrompt = ai.definePrompt({
  name: 'bookRecommendationsPrompt',
  input: {schema: BookRecommendationsInputSchema},
  output: {schema: BookRecommendationsOutputSchema},
  prompt: `You are a book recommendation expert. Based on the books the user has viewed and reviewed, you will provide a list of recommended books that the user might enjoy.

  Here are the books the user has viewed:
  {{#if viewedBooks}}
    {{#each viewedBooks}}
      - Title: {{this.title}}, Author: {{this.author}}, Genre: {{this.genre}}
    {{/each}}
  {{else}}
    The user has not viewed any books.
  {{/if}}

  Here are the books the user has reviewed:
  {{#if reviewedBooks}}
    {{#each reviewedBooks}}
      - Title: {{this.title}}, Author: {{this.author}}, Genre: {{this.genre}}, Rating: {{this.rating}}, Review: {{this.reviewText}}
    {{/each}}
  {{else}}
    The user has not reviewed any books.
  {{/if}}

  Please provide a list of 3 recommended books with their title, author, and genre in JSON format.  Do not recommend books that the user has already viewed or reviewed.
  Ensure that the recommendations are diverse and cover a range of interests based on the user's preferences.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  }
});

const bookRecommendationsFlow = ai.defineFlow(
  {
    name: 'bookRecommendationsFlow',
    inputSchema: BookRecommendationsInputSchema,
    outputSchema: BookRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await bookRecommendationsPrompt(input);
    return output!;
  }
);
