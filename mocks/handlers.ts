import { http, HttpResponse } from "msw";
import { Book, Review } from "./types";

export const handlers = [
  http.get("https://simple-books-api.glitch.me/books/1", () => {
    return HttpResponse.json<Book>({
      name: "Lord of the Rings",
      author: 'J. R. R. Tolkien',
      imageUrl: "/book-cover.jpg",
      description:
        "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    });
  }),
  http.get("/reviews", () => {
    return HttpResponse.json<Review[]>([
      {
        id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
        author: "John Maverick",
        text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
      },
    ]);
  }),
];
