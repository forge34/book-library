import SearchBar from "./search-bar";
import Cart from "../assets/shopping-cart.svg";
import User from "../assets/user.svg";

export default function Header() {
  return (
    <div className="flex flex-row p-2 gap-4 items-center">
      <h1 className="text-4xl font-serif">BookHaven</h1>
      <SearchBar />
      <div className="flex flex-row ml-auto text-white rounded-4xl bg-primary py-2 px-3">
        <img className="invert" src={Cart} />
        <h3 className="ml-4 text-xl">0$</h3>
      </div>

      <img className="border p-1 border-solid rounded-3xl" src={User} />
    </div>
  );
}
