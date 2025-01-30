import CategoryItem from "./category-item";
import XIcon from "../assets/x.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const bookCategories = [
  "All",
  "Fiction",
  "Non-Fiction",
  "Poetry",
  "Children",
  "Graphic Novels",
  "Biography",
  "Self-Help",
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Thriller",
  "Historical Fiction",
  "Adventure",
  "Science",
  "Philosophy",
  "Psychology",
  "Cookbooks",
  "Travel",
  "Art",
  "Religion",
  "Politics",
  "Health & Wellness",
];

export default function CategorySection() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [expanded, setExpanded] = useState(false);

  const showClasses = expanded ? "w-50 px-4 py-2" : "w-0 px-0 ";

  function handleShowFilter() {
    setExpanded(true);
  }

  return (
    <>
      <button
        className={`${expanded ? "invisible" : "visible"} mb-4 ml-6 self-start rounded-2xl bg-white px-4 py-2 md:hidden`}
        onClick={handleShowFilter}
      >
        Show Filters
      </button>
      <div
        className={`absolute flex h-fit flex-none flex-col overflow-hidden rounded-r-2xl bg-white whitespace-nowrap transition-all ease-in-out md:static md:h-full md:px-4 md:py-2 md:transition-none ${showClasses} box-border duration-400 md:w-fit md:opacity-100`}
      >
        <div className="flex flex-row overflow-hidden">
          <h1 className="mb-2 self-center text-2xl">Categories</h1>
          {isTabletOrMobile && (
            <img
              onClick={() => {
                setExpanded(false);
              }}
              src={XIcon}
              className="ml-auto"
            />
          )}
        </div>

        {bookCategories.map((e) => {
          return <CategoryItem key={e} name={e} />;
        })}
      </div>
    </>
  );
}
