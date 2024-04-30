import { useQuery } from "@tanstack/react-query";

import { BASE_API_URL, API_KEY } from "./constants";
import { SearchResultsItem, SearchResultsQueryResponse } from "./types";
import { useEffect, useState } from "react";

// ----------------------------------------------

export type SearchResultsResponse = {
  foods: SearchResultsItem[];
};

const fetchSearchResults = async (
  searchTerm: string,
): Promise<SearchResultsResponse> => {
  const response = await fetch(
    // `${BASE_API_URL}?api_key=${API_KEY}&query=+${searchTerm}&dataType=SR%20Legacy&dataType=Foundation`,
    `${BASE_API_URL}search?api_key=${API_KEY}&query=${searchTerm}&dataType=SR%20Legacy&dataType=Foundation`,
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

type FoodNutrients = {
  amount: number;
  nutrient: {
    name: string;
    unitName: string;
  };
  // nutrient.name?: string;
  // unitName?: string;
}[];

type FullItemDetails = {
  description: string;
  foodNutrients: FoodNutrients;
};

const fetchItemDetails = async (itemId: string): Promise<FullItemDetails> => {
  const response = await fetch(
    `${BASE_API_URL}food/${itemId}?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  const data = await response.json();
  return data;
};

export function useFilterItemDetails(itemId: string) {
  const { data, isInitialLoading } = useQuery(
    ["item-id", itemId],
    () => fetchItemDetails(itemId),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(itemId),
      //   onError: handleError,
    },
  );

  return {
    itemName: data?.description,
    itemNutrients: data?.foodNutrients,
    isLoading: isInitialLoading,
  } as const;
}

// ----------------------------------------------

export function useItemMacros(nutrients: FoodNutrients) {
  console.log("useItemMacros called");

  const [multiplier, setMultiplier] = useState(1);

  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  console.log("initial null state set");

  const calculateByServing = (newServingAmount: number | string) => {
    const enteredValue = newServingAmount;
    if (enteredValue == 0 || enteredValue === "") return;
    setMultiplier(+enteredValue / 100);
  };

  const calculateByProtein = (newProteinAmount: number | string) => {
    console.log(`newProteinAmount: ${newProteinAmount}`);
    const enteredValue = newProteinAmount;
    if (enteredValue == 0 || enteredValue === "") return;
    setMultiplier(+enteredValue / protein);
  };

  useEffect(() => {
    if (nutrients) {
      console.log(nutrients);

      for (let i = 0; i < nutrients.length; i++) {
        if (nutrients[i].nutrient.name === "Protein") {
          setProtein(nutrients[i].amount);
        }

        if (nutrients[i].nutrient.name === "Total lipid (fat)") {
          setFat(nutrients[i].amount);
        }

        if (nutrients[i].nutrient.name === "Carbohydrate, by difference") {
          setCarbs(nutrients[i].amount);
        }

        if (
          (nutrients[i].nutrient.name === "Energy" ||
            nutrients[i].nutrient.name ===
              "Energy (Atwater Specific Factors)") &&
          nutrients[i].nutrient.unitName === "kcal"
        ) {
          setCalories(nutrients[i].amount);
        }
      }
    }
  }, [nutrients]);

  const displayedGrams = Math.round(100 * multiplier * 10) / 10;
  const displayedCalories = Math.round(calories * multiplier * 10) / 10;
  const displayedProtein = Math.round(protein * multiplier * 10) / 10;
  const displayedCarbs = Math.round(carbs * multiplier * 10) / 10;
  const displayedFat = Math.round(fat * multiplier * 10) / 10;

  return {
    displayedGrams,
    displayedCalories,
    displayedProtein,
    displayedCarbs,
    displayedFat,
    calculateByProtein,
    calculateByServing,
  };
}
