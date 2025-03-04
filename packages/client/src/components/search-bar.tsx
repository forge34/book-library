import SearchIcon from "../assets/search.svg";

export default function SearchBar() {
  return (
    <div className="flex flex-row rounded-2xl px-0.5 text-lg">
      <input
        className="px-1"
        type="search"
        placeholder="Search books and authors ..."
      />
      <img className="ml-0.5" src={SearchIcon} width={24} />
    </div>
  );
}
