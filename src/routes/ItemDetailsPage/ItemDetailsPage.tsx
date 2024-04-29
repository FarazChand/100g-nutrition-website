import { useParams } from "react-router-dom";
import { useFilterItemDetails, useItemMacros } from "../../lib/customHooks";
import { useRef } from "react";

export default function ItemDetailsPage() {
  const { itemId = "null" } = useParams();

  const {
    itemName,
    itemNutrients = [],
    isLoading,
  } = useFilterItemDetails(itemId);

  console.log(itemNutrients ? "nutrients exist" : "nutrients do not exist");

  const {
    displayedGrams = 0,
    displayedCalories = 0,
    displayedProtein = 0,
    displayedCarbs = 0,
    displayedFat = 0,
    calculateByServing,
    calculateByProtein,
  } = useItemMacros(itemNutrients);
  useItemMacros(itemNutrients);

  console.log(displayedGrams);
  console.log(displayedCalories);
  console.log(displayedProtein);
  console.log(displayedCarbs);
  console.log(displayedFat);

  // here
  const enteredServingSizeRef = useRef();
  const enteredProteinAmountRef = useRef();

  return (
    <div>
      <p>{displayedGrams}</p>
      <p>{displayedCalories}</p>
      <p>{displayedProtein}</p>
      <p>{displayedCarbs}</p>
      <p>{displayedFat}</p>
    </div>
  );
}
