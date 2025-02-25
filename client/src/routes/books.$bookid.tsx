import { createFileRoute } from "@tanstack/react-router";
import BookCard from "../components/book-card";

export const Route = createFileRoute("/books/$bookid")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-background flex flex-col px-4 py-2">
      <div className="flex flex-col md:flex-row">
        <img src="https://placehold.co/300x400" className="rounded-2xl" />

        <div className="mx-4 flex flex-col py-2 md:mx-8 md:px-4">
          <h2 className="text-primary text-2xl font-bold tracking-wider">
            Atomic Habits
          </h2>

          <p className="text-accent my-2 text-2xl font-bold">20 $</p>

          <div className="flex flex-row flex-wrap md:flex-nowrap">
            <input type="number" />

            <button className="bg-accent rounded-lg px-8 py-2 text-white">
              Add to cart
            </button>
            <button className="bg-primary mx-2 rounded-lg px-8 py-2 text-white">
              Buy now
            </button>
            <hr className="bg-primary" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-primary text-2xl font-bold">Related products</h1>
        <div className="mx-auto mt-4 flex w-min flex-col gap-4 md:flex-row">
          <BookCard
            title="Atomic habits"
            price={20}
            bookid="1"
            imgUrl="https://placehold.co/200x250"
          />
          <BookCard
            title="how to make friends and influence people "
            price={20}
            bookid="2"
            imgUrl="https://placehold.co/200x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            bookid="3"
            imgUrl="https://placehold.co/200x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            bookid="4"
            imgUrl="https://placehold.co/200x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            bookid="5"
            imgUrl="https://placehold.co/200x250"
          />
        </div>
      </div>
    </div>
  );
}
