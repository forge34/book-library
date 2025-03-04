import { createFileRoute } from "@tanstack/react-router";
import BookCard from "../components/book-card";
import CategorySection from "../components/category-section";

import type { Book } from "shared";

const fetchBooks = async (): Promise<Array<Book>> => {
  const res = await fetch(`${import.meta.env.VITE_API}/books`);

  return res.json();
};

export const Route = createFileRoute("/")({
  loader: () => fetchBooks(),
  component: Index,
});

function Index() {
  const data = Route.useLoaderData();

  console.log(data);
  return (
    <>
      <div className="flex h-min flex-col bg-inherit lg:flex-row">
        <CategorySection />

        <div className="grid w-full grid-cols-2 lg:ml-8 lg:grid-cols-4 lg:gap-2">
          {data.map((book) => {
            return (
              <BookCard
                title={book.name}
                price={book.price}
                bookid={book.id}
                imgUrl={book.coverImage}
              />
            );
          })}
          <BookCard
            title="The Particular sadness of a cake"
            price={20}
            bookid="1"
            imgUrl="https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg"
          />
          <BookCard
            title="how to make friends and influence people "
            price={20}
            bookid="2"
            imgUrl="https://covers.openlibrary.org/b/id/14840757-M.jpg"
          />
          <BookCard
            title="Onyx Storm"
            price={20}
            bookid="3"
            imgUrl="https://covers.openlibrary.org/b/id/14839882-M.jpg"
          />
          <BookCard
            title="The Hired Girl"
            price={20}
            bookid="4"
            imgUrl="https://covers.openlibrary.org/b/id/11610624-M.jpg"
          />
          <BookCard
            title="Handbook for writing proposals"
            price={20}
            bookid="5"
            imgUrl="https://covers.openlibrary.org/b/id/641933-M.jpg"
          />
        </div>
      </div>
    </>
  );
}
