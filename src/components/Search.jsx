import search from "../assets/svg/search-normal.svg";
import filter from "../assets/svg/search-filter.svg";

const Search = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between gap-4 ">
        <div className="relative w-full">
          <img src={search} alt="" className="absolute ml-5 top-3" />
          <input
            type="text"
            placeholder="Search something here"
            className="border border-secondary-200 rounded-xl w-full px-14 py-3 text-sm font-medium"
          />
        </div>
        <img
          src={filter}
          alt="filter"
          className="border border-secondary-200 rounded-xl py-2 px-3"
        />
      </div>
    </div>
  );
};
export default Search;
