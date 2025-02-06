import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$bookid")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col px-4 py-2">
      <div className="flex flex-col md:flex-row">
        <img src="https://placehold.co/400x500" className="rounded-2xl" />

        <div className="mx-4 flex flex-col md:px-4 py-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
