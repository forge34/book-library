import SearchIcon from "../assets/search.svg";

export default function SearchBar() {
  return (
    <div className="flex flex-row px-0.5 ml-[25%] text-lg rounded-2xl">
      <input
        className="px-1"
        type="search"
        placeholder="Search books and authors ..."
      />
      <img className="ml-0.5" src={SearchIcon} width={24}/>
    </div>
  );
}
