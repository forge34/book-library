import SearchBar from "./search-bar";
import Cart from "../assets/shopping-cart.svg";
import User from "../assets/user.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from "@tanstack/react-router";
import { Route as aboutRoute } from "../routes/about.tsx";
import { Route as cartRoute } from "../routes/cart.tsx";

function Row1({ mobile }: { mobile: boolean }) {
  return (
    <>
      {mobile ? (
        <>
          <div className="flex w-full flex-row">
            <h1 className="font-serif text-3xl">BookHaven</h1>
            <Link
              to={aboutRoute.to}
              className="my-auto text-lg ml-2 font-extralight"
            >
              About us
            </Link>
            <Link className="ml-auto" to={cartRoute.to}>
              <div className="bg-primary flex flex-row rounded-4xl px-3 py-2 text-white">
                <img className="invert" width={20} src={Cart} />
                <h3 className="text-md ml-4">0$</h3>
              </div>
            </Link>

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
          <Link to={aboutRoute.to} className="text-lg font-extralight">
            About us
          </Link>
          <Link to={cartRoute.to} className="ml-auto">
            <div className="bg-primary ml-auto flex flex-row rounded-4xl px-3 py-2 text-white">
              <img className="invert" width={20} src={Cart} />
              <h3 className="text-md ml-2">0$</h3>
            </div>
          </Link>
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
