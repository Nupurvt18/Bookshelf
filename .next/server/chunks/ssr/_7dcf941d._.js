module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addBook": (()=>addBook),
    "addReview": (()=>addReview),
    "books": (()=>books),
    "deleteBook": (()=>deleteBook),
    "deleteReview": (()=>deleteReview),
    "getAverageRating": (()=>getAverageRating),
    "getBookById": (()=>getBookById),
    "getBooks": (()=>getBooks),
    "getBooksByUser": (()=>getBooksByUser),
    "getGenres": (()=>getGenres),
    "getReviewsByUser": (()=>getReviewsByUser),
    "getReviewsForBook": (()=>getReviewsForBook),
    "getUserById": (()=>getUserById),
    "reviews": (()=>reviews),
    "updateBook": (()=>updateBook),
    "updateReview": (()=>updateReview),
    "updateUser": (()=>updateUser),
    "users": (()=>users)
});
let users = [
    {
        id: '1',
        name: 'Alice Johnson',
        username: 'alicej',
        email: 'alice@example.com',
        country: 'USA',
        profilePhoto: `https://api.dicebear.com/8.x/initials/svg?seed=Alice%20Johnson`
    },
    {
        id: '2',
        name: 'Bob Smith',
        username: 'bobsmith',
        email: 'bob@example.com',
        country: 'Canada',
        profilePhoto: ''
    },
    {
        id: '3',
        name: 'Charlie Brown',
        username: 'charlieb',
        email: 'charlie@example.com',
        country: 'UK',
        profilePhoto: ''
    }
];
let books = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel about the American dream.',
        genre: 'Fiction',
        year: 1925,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book1/400/600'
    },
    {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel about racial injustice in the American South.',
        genre: 'Fiction',
        year: 1960,
        addedBy: '2',
        coverImage: 'https://picsum.photos/seed/book2/400/600'
    },
    {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel about totalitarianism.',
        genre: 'Science Fiction',
        year: 1949,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book3/400/600'
    },
    {
        id: '4',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'A novel about teenage angst and alienation.',
        genre: 'Fiction',
        year: 1951,
        addedBy: '3',
        coverImage: 'https://picsum.photos/seed/book4/400/600'
    },
    {
        id: '5',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'An epic high-fantasy novel.',
        genre: 'Fantasy',
        year: 1954,
        addedBy: '2',
        coverImage: 'https://picsum.photos/seed/book5/400/600'
    },
    {
        id: '6',
        title: 'Dune',
        author: 'Frank Herbert',
        description: 'A landmark science fiction novel.',
        genre: 'Science Fiction',
        year: 1965,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book6/400/600'
    },
    {
        id: '7',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        description: 'A book about the history of humankind.',
        genre: 'Non-Fiction',
        year: 2011,
        addedBy: '3',
        coverImage: 'https://picsum.photos/seed/book7/400/600'
    },
    {
        id: '8',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A classic romance novel.',
        genre: 'Romance',
        year: 1813,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book8/400/600'
    },
    {
        id: '9',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'A fantasy novel and prequel to The Lord of the Rings.',
        genre: 'Fantasy',
        year: 1937,
        addedBy: '2',
        coverImage: 'https://picsum.photos/seed/book9/400/600'
    },
    {
        id: '10',
        title: 'Brave New World',
        author: 'Aldous Huxley',
        description: 'A dystopian novel about a future society.',
        genre: 'Science Fiction',
        year: 1932,
        addedBy: '3',
        coverImage: 'https://picsum.photos/seed/book10/400/600'
    },
    {
        id: '11',
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        description: 'A comedic science fiction series.',
        genre: 'Science Fiction',
        year: 1979,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book11/400/600'
    },
    {
        id: '12',
        title: 'The Martian',
        author: 'Andy Weir',
        description: 'A science fiction novel about an astronaut stranded on Mars.',
        genre: 'Science Fiction',
        year: 2011,
        addedBy: '2',
        coverImage: 'https://picsum.photos/seed/book12/400/600'
    },
    {
        id: '13',
        title: 'Educated: A Memoir',
        author: 'Tara Westover',
        description: 'A memoir about a woman who leaves her survivalist family to get an education.',
        genre: 'Non-Fiction',
        year: 2018,
        addedBy: '3',
        coverImage: 'https://picsum.photos/seed/book13/400/600'
    },
    {
        id: '14',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A philosophical book about following your dreams.',
        genre: 'Fantasy',
        year: 1988,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book14/400/600'
    },
    {
        id: '15',
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        description: 'A psychological thriller.',
        genre: 'Thriller',
        year: 2005,
        addedBy: '2',
        coverImage: 'https://picsum.photos/seed/book15/400/600'
    },
    {
        id: '16',
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        description: 'A thriller about a woman who disappears on her fifth wedding anniversary.',
        genre: 'Thriller',
        year: 2012,
        addedBy: '3',
        coverImage: 'https://picsum.photos/seed/book16/400/600'
    },
    {
        id: '17',
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        description: 'A dystopian novel about a televised fight to the death.',
        genre: 'Young Adult',
        year: 2008,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book17/400/600'
    },
    {
        id: '18',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        description: 'The first book in the epic fantasy series.',
        genre: 'Fantasy',
        year: 1997,
        addedBy: '2',
        coverImage: 'https://picsum.photos/seed/book18/400/600'
    },
    {
        id: '19',
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'A self-help book about building good habits and breaking bad ones.',
        genre: 'Self-Help',
        year: 2018,
        addedBy: '3',
        coverImage: 'https://picsum.photos/seed/book19/400/600'
    },
    {
        id: '20',
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        description: 'A guide to spiritual enlightenment.',
        genre: 'Self-Help',
        year: 1997,
        addedBy: '1',
        coverImage: 'https://picsum.photos/seed/book20/400/600'
    }
];
let reviews = [
    {
        id: '1',
        bookId: '1',
        userId: '2',
        rating: 5,
        reviewText: 'An absolute masterpiece!',
        createdAt: '2023-10-01'
    },
    {
        id: '2',
        bookId: '1',
        userId: '3',
        rating: 4,
        reviewText: 'Great read, very thought-provoking.',
        createdAt: '2023-10-02'
    },
    {
        id: '3',
        bookId: '2',
        userId: '1',
        rating: 5,
        reviewText: 'A timeless classic that everyone should read.',
        createdAt: '2023-10-03'
    },
    {
        id: '4',
        bookId: '3',
        userId: '2',
        rating: 5,
        reviewText: 'Scarily relevant even today.',
        createdAt: '2023-10-04'
    },
    {
        id: '5',
        bookId: '6',
        userId: '1',
        rating: 5,
        reviewText: 'The world-building is incredible.',
        createdAt: '2023-10-05'
    },
    {
        id: '6',
        bookId: '6',
        userId: '2',
        rating: 4,
        reviewText: 'A bit dense but worth it.',
        createdAt: '2023-10-06'
    },
    {
        id: '7',
        bookId: '7',
        userId: '3',
        rating: 5,
        reviewText: 'Changed the way I see the world.',
        createdAt: '2023-10-07'
    },
    {
        id: '8',
        bookId: '8',
        userId: '1',
        rating: 5,
        reviewText: 'A beautiful and witty romance.',
        createdAt: '2023-10-08'
    },
    {
        id: '9',
        bookId: '15',
        userId: '3',
        rating: 4,
        reviewText: 'A gripping and dark thriller.',
        createdAt: '2023-10-09'
    },
    {
        id: '10',
        bookId: '12',
        userId: '2',
        rating: 5,
        reviewText: 'Science and survival at its best. Couldn\'t put it down!',
        createdAt: '2023-10-10'
    },
    {
        id: '11',
        bookId: '1',
        userId: '1',
        rating: 4,
        reviewText: 'Enjoyed it, but the ending felt a bit rushed.',
        createdAt: '2023-11-15'
    },
    {
        id: '12',
        bookId: '2',
        userId: '2',
        rating: 5,
        reviewText: 'This book is a must-read for every generation.',
        createdAt: '2023-11-16'
    },
    {
        id: '13',
        bookId: '3',
        userId: '3',
        rating: 3,
        reviewText: 'A powerful message, but a bit dry for my taste.',
        createdAt: '2023-11-17'
    },
    {
        id: '14',
        bookId: '4',
        userId: '1',
        rating: 2,
        reviewText: 'I just couldn\'t connect with the protagonist.',
        createdAt: '2023-11-18'
    },
    {
        id: '15',
        bookId: '5',
        userId: '2',
        rating: 5,
        reviewText: 'An epic adventure that you\'ll get lost in.',
        createdAt: '2023-11-19'
    },
    {
        id: '16',
        bookId: '5',
        userId: '3',
        rating: 5,
        reviewText: 'Tolkien is a master storyteller.',
        createdAt: '2023-11-20'
    },
    {
        id: '17',
        bookId: '7',
        userId: '1',
        rating: 4,
        reviewText: 'A fascinating look at human history.',
        createdAt: '2023-11-21'
    },
    {
        id: '18',
        bookId: '8',
        userId: '2',
        rating: 4,
        reviewText: 'Mr. Darcy is everything!',
        createdAt: '2023-11-22'
    },
    {
        id: '19',
        bookId: '9',
        userId: '3',
        rating: 4,
        reviewText: 'A charming and delightful adventure.',
        createdAt: '2023-11-23'
    },
    {
        id: '20',
        bookId: '10',
        userId: '1',
        rating: 4,
        reviewText: 'A chilling vision of the future.',
        createdAt: '2023-11-24'
    },
    {
        id: '21',
        bookId: '11',
        userId: '2',
        rating: 5,
        reviewText: 'Hilarious and absurd in the best way possible.',
        createdAt: '2023-11-25'
    },
    {
        id: '22',
        bookId: '13',
        userId: '3',
        rating: 5,
        reviewText: 'Incredibly powerful and inspiring story.',
        createdAt: '2023-11-26'
    },
    {
        id: '23',
        bookId: '14',
        userId: '1',
        rating: 3,
        reviewText: 'A bit too philosophical for my liking, but beautifully written.',
        createdAt: '2023-11-27'
    },
    {
        id: '24',
        bookId: '16',
        userId: '2',
        rating: 5,
        reviewText: 'Twists and turns that will keep you on the edge of your seat!',
        createdAt: '2023-11-28'
    },
    {
        id: '25',
        bookId: '17',
        userId: '3',
        rating: 4,
        reviewText: 'A thrilling read, couldn\'t put it down.',
        createdAt: '2023-11-29'
    },
    {
        id: '26',
        bookId: '18',
        userId: '1',
        rating: 5,
        reviewText: 'The book that started it all. Pure magic.',
        createdAt: '2023-11-30'
    },
    {
        id: '27',
        bookId: '19',
        userId: '2',
        rating: 5,
        reviewText: 'Practical and actionable advice. Highly recommend.',
        createdAt: '2023-12-01'
    },
    {
        id: '28',
        bookId: '20',
        userId: '3',
        rating: 4,
        reviewText: 'A bit repetitive, but the core message is profound.',
        createdAt: '2023-12-02'
    },
    {
        id: '29',
        bookId: '12',
        userId: '1',
        rating: 4,
        reviewText: 'So much fun. Makes you want to be an astronaut.',
        createdAt: '2023-12-03'
    },
    {
        id: '30',
        bookId: '15',
        userId: '1',
        rating: 5,
        reviewText: 'Lisbeth Salander is an iconic character.',
        createdAt: '2023-12-04'
    }
];
const getBooks = async ()=>{
    // simulate network delay
    await new Promise((resolve)=>setTimeout(resolve, 500));
    return books;
};
const getBookById = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 200));
    return books.find((book)=>book.id === id);
};
const getReviewsForBook = async (bookId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    return reviews.filter((review)=>review.bookId === bookId);
};
const getUserById = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 100));
    return users.find((user)=>user.id === id);
};
const getAverageRating = (bookId)=>{
    const bookReviews = reviews.filter((review)=>review.bookId === bookId);
    if (bookReviews.length === 0) return 0;
    const totalRating = bookReviews.reduce((acc, review)=>acc + review.rating, 0);
    const average = totalRating / bookReviews.length;
    // Round to one decimal place
    return Math.round(average * 10) / 10;
};
const getGenres = async ()=>{
    const genres = books.map((book)=>book.genre);
    return [
        ...new Set(genres)
    ];
};
const getBooksByUser = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 200));
    return books.filter((book)=>book.addedBy === userId);
};
const getReviewsByUser = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 200));
    return reviews.filter((review)=>review.userId === userId);
};
const addBook = async (book)=>{
    console.log('Adding book:', book);
    const newBook = {
        ...book,
        id: String(Date.now())
    };
    books.unshift(newBook);
    return newBook;
};
const updateBook = async (book)=>{
    console.log('Updating book:', book);
    const index = books.findIndex((b)=>b.id === book.id);
    if (index !== -1) {
        books[index] = book;
    }
    return book;
};
const deleteBook = async (id)=>{
    console.log('Deleting book:', id);
    const index = books.findIndex((b)=>b.id === id);
    if (index !== -1) {
        books.splice(index, 1);
    }
};
const addReview = async (review)=>{
    const existingReview = reviews.find((r)=>r.bookId === review.bookId && r.userId === review.userId);
    if (existingReview) {
        throw new Error("You have already reviewed this book.");
    }
    console.log('Adding review:', review);
    const newReview = {
        ...review,
        id: String(Date.now()),
        createdAt: new Date().toISOString().split('T')[0]
    };
    reviews = [
        newReview,
        ...reviews
    ];
    return newReview;
};
const updateReview = async (review)=>{
    console.log('Updating review:', review);
    const index = reviews.findIndex((r)=>r.id === review.id);
    if (index !== -1) {
        reviews[index] = review;
    }
    return review;
};
const deleteReview = async (id)=>{
    console.log('Deleting review:', id);
    const index = reviews.findIndex((r)=>r.id === id);
    if (index !== -1) {
        reviews.splice(index, 1);
    }
};
const updateUser = async (user)=>{
    console.log('Updating user:', user);
    const index = users.findIndex((u)=>u.id === user.id);
    if (index !== -1) {
        users[index] = {
            ...users[index],
            ...user
        };
        return users[index];
    }
    // In a real app, you'd probably throw an error.
    // For this demo, we'll add the user if they don't exist.
    users.push(user);
    return user;
};
}}),
"[project]/src/components/books/BookList.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/books/BookList.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/books/BookList.tsx <module evaluation>", "default");
}}),
"[project]/src/components/books/BookList.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/books/BookList.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/books/BookList.tsx", "default");
}}),
"[project]/src/components/books/BookList.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$BookList$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/books/BookList.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$BookList$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/books/BookList.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$BookList$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/skeleton.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$BookList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/books/BookList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function Home() {
    const books = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBooks"])();
    const genres = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGenres"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center mb-8 sm:mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-primary",
                        children: "Welcome to BookShelf"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto",
                        children: "Your personal corner for discovering, discussing, and diving deep into the world of books. Find your next great read today."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BookListSkeleton, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 20,
                    columnNumber: 27
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$BookList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    initialBooks: books,
                    genres: genres
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function BookListSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-col md:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-full md:w-1/2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-full md:w-1/4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-full md:w-1/4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8",
                children: Array.from({
                    length: 10
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "aspect-[2/3] w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-5 w-3/4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_7dcf941d._.js.map