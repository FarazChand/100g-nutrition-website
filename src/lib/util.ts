import { SearchResultsItem } from "./types";

export const sortRawItems = (results: SearchResultsItem[]) => {
  return results.sort((a, b) => {
    if (a.description.includes("raw") && !b.description.includes("raw")) {
      return -1;
    }
    if (!a.description.includes("raw") && b.description.includes("raw")) {
      return 1;
    }
    return 0;
  });
};

export const sortBrandItems = (results: SearchResultsItem[]) => {
  return results.sort((a, b) => {
    if (a.dataType === "Branded" && b.dataType !== "Branded") {
      return 1;
    }
    if (a.dataType !== "Branded" && b.dataType === "Branded") {
      return -1;
    }
    return 0;
  });
};
