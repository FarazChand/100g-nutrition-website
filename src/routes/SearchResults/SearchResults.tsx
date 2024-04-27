import { useParams } from "react-router-dom";

import { usePageResults, useSearchResults } from "../../lib/customHooks.ts";
import SearchBar from "../../components/SearchBar.tsx";
import { sortBrandItems, sortRawItems } from "../../lib/util.ts";
import { RESULTS_PER_PAGE } from "../../lib/constants.ts";

export default function SearchResults() {
  const { currentPage, handleNextPage, handlePrevPage, resetPage } =
    usePageResults();

  const { searchInput } = useParams();

  let searchTermLength = 0;

  if (!searchInput) {
    return (
      <main>
        <h2>Something went wrong</h2>
      </main>
    );
  }

  const enhancedSearchTerm = searchInput
    .split(" ")
    .map((word) => {
      searchTermLength++;
      return `+${word}`;
    })
    .join(" ");

  const { searchResults, isLoading } = useSearchResults(enhancedSearchTerm);

  if (!searchResults) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  }

  const numberOfPages = searchResults.length / RESULTS_PER_PAGE;
  const currentPageResults = [];
  let sortedResults = [...searchResults];

  // sets preference for raw items when searching for one term (most likely desired result e.g. beef, chicken etc.)
  if (searchTermLength === 1) sortedResults = sortRawItems(sortedResults);
  // setting brand named items last makes the initial output cleaner
  sortedResults = sortBrandItems(sortedResults);

  for (
    let i = currentPage * RESULTS_PER_PAGE;
    i < (currentPage + 1) * RESULTS_PER_PAGE;
    i++
  ) {
    if (!searchResults[i]) continue;
    currentPageResults.push(sortedResults[i]);
  }

  return (
    <main>
      <SearchBar resetPage={resetPage} />
      {currentPageResults?.map((searchResult) => (
        <li key={searchResult.fdcId}>{searchResult.description}</li>
      ))}

      <div className="flex gap-3">
        {currentPage !== 0 && <button onClick={handlePrevPage}>Prev</button>}
        {currentPage < numberOfPages - 1 && (
          <button onClick={() => handleNextPage(numberOfPages)}>Next</button>
        )}
      </div>
    </main>
  );
}
