import BookCard from "./components/book-card";
import CategorySection from "./components/category-section";
import Header from "./components/header";
function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-row">
        <CategorySection />

        <div className="grid grid-rows-3 max-md:grid-cols-2 ml-4 grid-cols-4 gap-8 w-full">
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
        </div>
      </div>
    </>
  );
}

export default App;
