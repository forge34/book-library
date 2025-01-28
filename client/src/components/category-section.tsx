import CategoryItem from "./category-item";

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
  return (
    <div className="flex flex-col bg-white  ml-6 py-3 px-4 w-fit h-full rounded-4xl m-2">
      <h1 className="text-2xl mb-2 self-center">Categories</h1>

      {bookCategories.map((e) => {
        return <CategoryItem name={e} />;
      })}
    </div>
  );
}
