import { useParams } from "react-router-dom";

import { usePageResults, useSearchResults } from "../../lib/customHooks.ts";
import SearchBar from "../../components/SearchBar.tsx";
import {
  enhanceSearchTerm,
  sortBrandItems,
  sortRawItems,
} from "../../lib/util.ts";
import { RESULTS_PER_PAGE } from "../../lib/constants.ts";
import SearchResults from "./SearchResults.tsx";
import Button from "../../components/Button.tsx";

export default function SearchResultsPage() {
  const { currentPage, handleNextPage, handlePrevPage, resetPage } =
    usePageResults();

  const { searchInput } = useParams();

  if (!searchInput) {
    return (
      <main>
        <h2>Something went wrong</h2>
      </main>
    );
  }

  const { enhancedSearchTerm, searchTermLength } =
    enhanceSearchTerm(searchInput);

  const { searchResults, isLoading } = useSearchResults(enhancedSearchTerm);

  if (!searchResults) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  }

  const numberOfPages = searchResults.length / RESULTS_PER_PAGE;
  const onFirstPage = !(currentPage !== 0);
  const onLastPage = !(currentPage < numberOfPages - 1);
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
    <main className="mx-auto w-10/12 max-w-3xl py-10">
      <SearchBar resetPage={resetPage} />

      <SearchResults currentPageResults={currentPageResults} />

      <div className="mt-2 flex justify-center gap-3">
        {!onFirstPage && <Button onClick={handlePrevPage} buttonText="Prev" />}
        {!onLastPage && (
          <Button
            onClick={() => handleNextPage(numberOfPages)}
            buttonText="Next"
          />
        )}
      </div>
    </main>
  );
}
