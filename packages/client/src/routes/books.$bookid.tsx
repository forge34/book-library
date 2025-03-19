import { createFileRoute } from "@tanstack/react-router";
import BookCard from "../components/book-card";
import type { BookWithAuthor } from "shared";

const fetchBook = async (bookid: string): Promise<BookWithAuthor> => {
  const res = await fetch(`${import.meta.env.VITE_API}/books/${bookid}`);

  return res.json();
};

export const Route = createFileRoute("/books/$bookid")({
  loader: ({ params: { bookid } }) => fetchBook(bookid),
  component: RouteComponent,
});

function RouteComponent() {
  const book = Route.useLoaderData();
  return (
    <div className="bg-background flex flex-col px-4 py-2">
      <div className="flex flex-col md:mx-auto md:flex-row">
        <img
          src={book.coverImage?.replace("M", "L") || ""}
          className="mx-auto h-[442px] w-[332px] rounded-2xl md:mx-0"
        />

        <div className="mx-7 flex flex-col py-2 md:mx-8 md:px-4">
          <h2 className="text-primary text-2xl font-bold tracking-wider md:text-4xl">
            {book.name}
          </h2>

          <p className="mt-2 font-light">{book.description}</p>
          <p className="text-accent my-2 text-xl font-bold md:text-2xl">
            {book.price + " $"}
          </p>

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
          <div className="mt-5 flex flex-col justify-around">
            <h3>
              Categories :
              {book.categories.map((category) => {
                return <span className="font-light"> {category.name}</span>;
              })}
            </h3>
            <h3 className="mt-4">
              Author : <span className="font-light">{book.author?.name}</span>
            </h3>
            <h3 className="mt-4">
              Page Count :{" "}
              <span className="font-light">{book.pages} Pages</span>
            </h3>

            <h3 className="mt-4">
              Paper : <span className="font-light">70 GSM</span>
            </h3>
            <h3 className="mt-4">
              Cover : <span className="font-light">140 GSM (Hard Cover)</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-primary text-2xl font-bold">Related products</h1>
        <div className="mx-auto mt-4 flex w-min flex-col justify-around gap-4 lg:mx-4 lg:flex-row">
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
    </div>
  );
}
