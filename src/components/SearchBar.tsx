import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const searchInputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const onSubmitSearch = () => {
    navigate(`/search-results/${searchInput}`);
  };

  return (
    <form
      onSubmit={onSubmitSearch}
      className="mx-auto flex w-[90vw] flex-col items-center justify-center gap-2 sm:mb-2 sm:max-w-[400px]  sm:flex-row sm:justify-center"
    >
      <input
        id="search-bar"
        value={searchInput}
        type="text"
        onChange={searchInputChangeHandler}
        className=" w-full rounded border-2 border-black px-3 py-1.5 text-black sm:mr-2 sm:w-10/12 sm:flex-grow "
      />
      <button className="mb-2 w-full max-w-full rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700 sm:mb-0 sm:w-max">
        {/* <label htmlFor="search-bar">Search</label>
         */}
        Search
      </button>
    </form>
  );
}
