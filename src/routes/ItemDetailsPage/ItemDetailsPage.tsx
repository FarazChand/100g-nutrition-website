import { TbDna } from "react-icons/tb";
import { CiWheat } from "react-icons/ci";
import { GiMolecule } from "react-icons/gi";
import { BsBatteryCharging } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";

import { useFilterItemDetails, useItemMacros } from "../../lib/customHooks";

export default function ItemDetailsPage() {
  const [userProteinInput, setUserProteinInput] = useState("");
  const [userServingInput, setUserServingInput] = useState("");
  const { itemId = "null" } = useParams();

  const {
    itemName,
    itemNutrients = [],
    isLoading,
  } = useFilterItemDetails(itemId);

  const {
    displayedGrams = 0,
    displayedCalories = 0,
    displayedProtein = 0,
    displayedCarbs = 0,
    displayedFat = 0,
    calculateByServing,
    calculateByProtein,
  } = useItemMacros(itemNutrients);

  const handleProteinInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserProteinInput(event.target.value);
  };

  const handleServingInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserServingInput(event.target.value);
  };

  const handleChangeByProtein = () => {
    calculateByProtein(userProteinInput);

    setUserProteinInput("");
    setUserServingInput("");
  };

  const handleChangeByServing = () => {
    calculateByServing(userServingInput);

    setUserProteinInput("");
    setUserServingInput("");
  };

  return (
    <div className="  px-4 py-6 font-medium text-gray-700">
      <div className=" sm:flex">
        <div>
          <h2 className="text-2xl font-bold sm:mt-2"> {itemName}</h2>
          <h3 className="mt-2 text-xl sm:mt-6">
            For {displayedGrams}
            {"g"} :
          </h3>

          <ul className="animate-navLinkFade list-disc sm:mt-4">
            <li className="flex max-w-[10rem]">
              <BsBatteryCharging className="ml-1 mr-[.5rem] mt-1 text-blue-500" />
              {displayedCalories} cal{" "}
            </li>
            <li className="flex max-w-[10rem]">
              <TbDna className="mr-1 text-red-600" fontSize="1.5em" />
              {displayedProtein} g of protein{" "}
            </li>
            <li className="flex max-w-[10rem]">
              <CiWheat className="mr-[.3rem] text-green-500" fontSize="1.5em" />
              {displayedCarbs} g of carbs{" "}
            </li>
            <li className="flex max-w-[10rem]">
              <GiMolecule
                className="ml-1 mr-[.4rem] text-yellow-500"
                fontSize="1.2em"
              />
              {displayedFat} g of fat{" "}
            </li>
          </ul>
        </div>

        {/* <div className="mx-auto mt-4 max-w-[13.5rem] sm:mt-0">
          <NutritionItemDetailChart
            chartData={chartData}
            calories={displayedCalories}
          />
        </div> */}

        <h4 className="mt-6 text-base font-medium">
          You can calculate new values based on serving size or the amount of
          protein required.
        </h4>

        {/* Input Form */}
        <form className="mx-auto mt-4 sm:flex">
          <div>
            <label htmlFor="amount-in-grams" className="mr-2">
              By serving amount:{" "}
            </label>
            <div className="mb-2 flex items-center">
              <button
                type="button"
                onClick={handleChangeByServing}
                className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                <VscDebugRestart />
              </button>
              <input
                value={userServingInput}
                onChange={handleServingInputChange}
                id="amount-in-grams"
                type="number"
                className="mx-2 w-20 rounded border border-gray-400 px-2 py-1 sm:w-5/12"
              />
              <span className="text-gray-700">g</span>
            </div>
          </div>

          <div>
            <label htmlFor="grams of protein" className="mr-2">
              By grams of protein:{" "}
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleChangeByProtein}
                className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                <VscDebugRestart />
              </button>
              <input
                value={userProteinInput}
                onChange={(e) => handleProteinInputChange}
                id="grams of protein"
                type="number"
                className="mx-2 w-20 rounded border border-gray-400 px-2 py-1 sm:w-5/12"
              />
              <span className="text-gray-700">g</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
