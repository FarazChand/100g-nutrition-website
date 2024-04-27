import { useQuery } from "@tanstack/react-query";

import { BASE_API_URL, API_KEY } from "./constants";
import { SearchResultsQueryResponse, SearchResultsResponse } from "./types";
import { useState } from "react";

// ----------------------------------------------

const fetchSearchResults = async (
  searchTerm: string,
): Promise<SearchResultsResponse> => {
  const response = await fetch(
    // `${BASE_API_URL}?api_key=${API_KEY}&query=+${searchTerm}&dataType=SR%20Legacy&dataType=Foundation`,
    `${BASE_API_URL}?api_key=${API_KEY}&query=${searchTerm}&dataType=SR%20Legacy&dataType=Foundation`,
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  const data = await response.json();
  return data;
};

// --

export function useSearchResults(
  searchTerm: string,
): SearchResultsQueryResponse {
  const { data, isInitialLoading } = useQuery(
    ["search-term", searchTerm],
    () => fetchSearchResults(searchTerm),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchTerm),
      //   onError: handleError,
    },
  );

  return {
    searchResults: data?.foods,
    isLoading: isInitialLoading,
  } as const;
}

// ----------------------------------------------

type PageResults = {
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: (numberOfPages: number) => void;
  resetPage: () => void;
};

export function usePageResults(): PageResults {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = (numberOfPages: number) => {
    if (currentPage < numberOfPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const resetPage = () => {
    setCurrentPage(0);
  };

  return { currentPage, handlePrevPage, handleNextPage, resetPage };
}

// ----------------------------------------------
