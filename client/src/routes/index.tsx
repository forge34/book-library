import { createFileRoute } from "@tanstack/react-router";
import BookCard from "../components/book-card";
import CategorySection from "../components/category-section";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="flex h-min flex-col bg-inherit lg:flex-row">
        <CategorySection />

        <div className="grid w-full grid-cols-2  lg:ml-8 lg:grid-cols-4 lg:gap-6">
          <BookCard
            title="Atomic habits"
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
            title="Atomic habits"
            price={20}
            bookid="3"
            imgUrl="https://covers.openlibrary.org/b/id/14839882-M.jpg"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            bookid="4"
            imgUrl="https://covers.openlibrary.org/b/id/11610624-M.jpg"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            bookid="5"
            imgUrl="https://covers.openlibrary.org/b/id/641933-M.jpg"
          />
        </div>
      </div>
    </>
  );
}
