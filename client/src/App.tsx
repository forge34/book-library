import BookCard from "./components/book-card";
import CategorySection from "./components/category-section";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col lg:flex-row ">
        <CategorySection />

        <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-4  px-4 gap-2 lg:gap-6 w-full">
          <BookCard
            title="Atomic habits"
            price={20}
            imgUrl="https://placehold.co/250x250"
          />
          <BookCard
            title="how to make friends and influence people "
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
