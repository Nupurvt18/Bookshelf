
export type User = {
  id: string;
  username: string;
  name: string; // This will be treated as fullName
  email: string;
  country?: string;
  profilePhoto?: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  year: number;
  addedBy: string; // userId
  coverImage: string;
};

export type Review = {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
  reviewText: string;
  createdAt: string;
};
