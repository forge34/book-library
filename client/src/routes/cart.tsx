import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

const books = [
  { name: "The Great Gatsby", price: 12.99 },
  { name: "To Kill a Mockingbird", price: 10.49 },
  { name: "1984", price: 9.99 },
  { name: "Moby Dick", price: 14.5 },
  { name: "Pride and Prejudice", price: 11.25 },
  { name: "The Catcher in the Rye", price: 13.75 },
  { name: "Brave New World", price: 10.99 },
  { name: "The Hobbit", price: 15.99 },
  { name: "Fahrenheit 451", price: 9.5 },
  { name: "War and Peace", price: 18.75 },
];

const totalPRice = books.reduce((p, c) => {
  return p + c.price;
}, 0);

function RouteComponent() {
  return (
    <div className="bg-background grid h-[85%] grid-cols-1 grid-rows-2 gap-8 px-6 py-4 md:grid-cols-2 md:grid-rows-1">
      <div className="l h-full overflow-y-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-accent text-primary sticky text-left font-bold">
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {books.map((e) => {
              return <TableRow key={e.name} name={e.name} price={e.price} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col">
        <h3 className="bg-accent rounded-md px-3 py-1 text-xl font-bold">
          Checkout
        </h3>
        <div className="flex flex-col overflow-y-auto">
          {books.map((e) => {
            return (
              <div key={e.name} className="flex flex-row px-3 py-2">
                <p>{e.name}</p>
                <p className="ml-auto">{e.price + "$"}</p>
              </div>
            );
          })}
        </div>

        <h3 className="mt-auto ml-8 text-xl font-bold">
          total : {totalPRice + "$"}
        </h3>
        <button className="bg-accent text-background self-center rounded-md px-3 py-2 font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}

function TableRow({ name, price }: { name: string; price: number }) {
  return (
    <tr>
      <td>
        <input className="scale-135" type="checkbox" />
      </td>
      <td>
        <div className="flex flex-col md:flex-row">
          <img
            className="md:object-scale-down"
            src="https://placehold.co/85x85"
          />
          <div className="ml-2 flex flex-col py-2">
            <h3 className="text-lg"> {name}</h3>
            <p className="mt-auto text-sm">{price + "$"}</p>
          </div>
        </div>
      </td>
      <td>
        <input
          type="number"
          className="border-primary w-[4ch] rounded-md border bg-white"
        />
      </td>
      <td>{price + "$"}</td>
    </tr>
  );
}
