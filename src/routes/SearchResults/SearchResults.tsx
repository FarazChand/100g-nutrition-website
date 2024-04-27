import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { BASE_API_URL, API_KEY } from "../../lib/constants.js";

console.log(BASE_API_URL, API_KEY);

// const API_END_POINT = "https://api.nal.usda.gov/fdc/v1/search";
// Will add api key on next commit

export default function SearchResults() {
  const { searchInput } = useParams();

  if (!searchInput) {
    return;
  }

  const enhancedSearchTerm = searchInput
    .split(" ")
    .map((word) => {
      return `+${word}`;
    })
    .join(" ");

  const fetchSearchResults = async (searchTerm: string) => {
    const response = await fetch(
      `${BASE_API_URL}?api_key=${API_KEY}&query=+${searchTerm}&dataType=SR%20Legacy&dataType=Foundation`,
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.description);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  };

  function useSearchResults(searchTerm: string) {
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

  const data = useSearchResults(enhancedSearchTerm);
  console.log(data);

  return <div>{`${searchInput}`}</div>;
}
