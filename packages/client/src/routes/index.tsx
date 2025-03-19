import { createFileRoute } from "@tanstack/react-router";
import BookCard from "../components/book-card";
import CategorySection from "../components/category-section";

import type { BookWithAuthor } from "shared";

const fetchBooks = async (): Promise<Array<BookWithAuthor>> => {
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
        </div>
      </div>
    </>
  );
}
