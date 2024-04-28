export type TestingType = string;

export type SearchResultsItem = {
  fdcId: string;
  description: string;
  dataType: string;
};

export type SearchResultsQueryResponse = {
  searchResults: SearchResultsItem[] | undefined;
  isLoading: boolean;
};

export type SelectedItemDetails = {};
