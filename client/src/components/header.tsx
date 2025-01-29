import SearchBar from "./search-bar";
import Cart from "../assets/shopping-cart.svg";
import User from "../assets/user.svg";
import { useMediaQuery } from "react-responsive";

function Row1({ mobile }: { mobile: boolean }) {
  return (
    <>
      {mobile ? (
        <>
          <div className="flex w-full flex-row">
            <h1 className="font-serif text-4xl">BookHaven</h1>
            <div className="bg-primary ml-auto flex flex-row rounded-4xl px-3 py-2 text-white">
              <img className="invert" src={Cart} />
              <h3 className="ml-4 text-lg">0$</h3>
            </div>

            <img
              className="ml-2 rounded-3xl border border-solid p-1"
              src={User}
            />
          </div>
          <SearchBar />
        </>
      ) : (
        <>
          <h1 className="font-serif text-4xl">BookHaven</h1>

          <SearchBar />
          <div className="bg-primary ml-auto flex flex-row rounded-4xl px-3 py-2 text-white">
            <img className="invert" src={Cart} />
            <h3 className="ml-4 text-xl">0$</h3>
          </div>
          <img
            className="ml-2 rounded-3xl border border-solid p-1"
            src={User}
          />
        </>
      )}
    </>
  );
}

export default function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="mb-4 flex flex-col items-center gap-4 p-2 lg:flex-row">
      <Row1 mobile={isTabletOrMobile} />
    </div>
  );
}
