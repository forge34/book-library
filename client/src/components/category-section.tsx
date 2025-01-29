import CategoryItem from "./category-item";
import XIcon from "../assets/x.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Button from "./ui/button";

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

  const showClasses = expanded ? "w-100 px-4 py-2" : "w-0 p-0 ";

  function handleShowFilter() {
    setExpanded(true);
  }

  return (
    <>
      <Button
        styles={`md:hidden self-start ml-8 mb-2 ${expanded ? "invisible" : "visible"}`}
        clickHandler={handleShowFilter}
        text="Show Filters"
      />
      <div
        className={`absolute flex h-full flex-none flex-col overflow-hidden rounded-r-2xl bg-white transition-all ease-in-out md:static md:px-4 md:py-2 md:transition-none ${showClasses} box-border duration-500 md:w-fit md:opacity-100`}
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
