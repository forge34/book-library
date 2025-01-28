import SearchBar from "./search-bar";
import Cart from "../assets/shopping-cart.svg";
import User from "../assets/user.svg";
import { useMediaQuery } from "react-responsive";

function Row1({ mobile }: { mobile: boolean }) {
  return (
    <>
      {mobile ? (
        <>
          <div className="flex-row flex w-full">
            <h1 className="text-4xl font-serif">BookHaven</h1>
            <div className="flex flex-row ml-auto text-white rounded-4xl bg-primary py-2 px-3">
              <img className="invert" src={Cart} />
              <h3 className="ml-4 text-lg">0$</h3>
            </div>

            <img
              className="border p-1 border-solid rounded-3xl ml-2"
              src={User}
            />
          </div>
          <SearchBar />
        </>
      ) : (
        <>
          <h1 className="text-4xl font-serif">BookHaven</h1>

          <SearchBar />
          <div className="flex flex-row ml-auto text-white rounded-4xl bg-primary py-2 px-3">
            <img className="invert" src={Cart} />
            <h3 className="ml-4 text-xl">0$</h3>
          </div>
          <img
            className="border p-1 border-solid rounded-3xl ml-2"
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
    <div className="flex flex-col lg:flex-row p-2 gap-4 items-center mb-4 ">
      <Row1 mobile={isTabletOrMobile} />
    </div>
  );
}
