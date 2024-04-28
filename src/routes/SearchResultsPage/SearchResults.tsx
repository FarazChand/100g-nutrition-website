import { useNavigate } from "react-router-dom";
import { SearchResultsItem } from "../../lib/types";

type SearchResultsProps = {
  currentPageResults: SearchResultsItem[];
};

export default function SearchResults({
  currentPageResults,
}: SearchResultsProps) {
  const navigate = useNavigate();

  const selectItemHandler = (searchResult: SearchResultsItem) => {
    navigate(`/item-details/${searchResult.fdcId}`);
  };

  return (
    <ul className="mx-auto w-full">
      {currentPageResults?.map((searchResult) => (
        <li
          className="border-grey-600 animate-navLinkFade cursor-pointer border-b-2 px-3 py-4 hover:bg-green-50 hover:font-bold hover:text-blue-500 hover:shadow-md"
          key={searchResult.fdcId}
          onClick={() => selectItemHandler(searchResult)}
        >
          {searchResult.description}
        </li>
      ))}
    </ul>
  );
}
