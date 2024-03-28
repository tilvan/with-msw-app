import { useState } from "react";
import { Book, Review } from "../mocks/types";

type Props = {
  book: Book;
};

export default function Home({ book }: Props) {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/reviews")
      .then((res) => res.json())
      .then(setReviews);
  };

  return (
    <div>
      <img src={book.imageUrl} alt={book.name} width="250" />
      <h1>{book.name}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button onClick={handleGetReviews}>Load reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.ts`.
  const res = await fetch("https://simple-books-api.glitch.me/books/1");
  const book = await res.json();

  return {
    props: {
      book,
    },
  };
}
