export type TestingType = string;

export type SearchResultsItem = {
  fdcId: number;
  description: string;
  dataType: string;
};

export type SearchResultsResponse = {
  foods: SearchResultsItem[];
};

export type SearchResultsQueryResponse = {
  searchResults: SearchResultsItem[] | undefined;
  isLoading: boolean;
};

export type SelectedItemDetails = {};
