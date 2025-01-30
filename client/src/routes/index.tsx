import { createFileRoute } from "@tanstack/react-router";
import BookCard from "../components/book-card";
import CategorySection from "../components/category-section";




export const Route = createFileRoute("/")({
  component: Index,
});




function Index() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <CategorySection />

        <div className="grid w-full grid-cols-2 grid-rows-3 gap-2 px-4 lg:grid-cols-4 lg:gap-6">
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="how to make friends and influence people "
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
        </div>
      </div>
    </>
  );
}
