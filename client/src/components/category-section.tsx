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

  const showClasses = expanded ? "w-100 " : "w-0 ";

  function handleShowFilter() {
    setExpanded(true);
  }

  return (
    <>
      <Button
        styles={`md:hidden ${expanded ? "invisible" : "visible"}`}
        clickHandler={handleShowFilter}
        text="Show Filters"
      />
      <div
        className={` flex flex-col md:py-2 md:px-4 overflow-hidden absolute md:static
                    transition-all md:transition-none  ease-in-out h-full bg-white rounded-r-2xl 
                     flex-none ${showClasses} duration-500 md:w-fit md:opacity-100 box-border`}
      >
        <div className="flex flex-row overflow-hidden">
          <h1 className="text-2xl mb-2 self-center">Categories</h1>
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
