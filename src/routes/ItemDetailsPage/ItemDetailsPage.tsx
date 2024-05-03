import { TbDna } from "react-icons/tb";
import { CiWheat } from "react-icons/ci";
import { GiMolecule } from "react-icons/gi";
import { BsBatteryCharging } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";

import { useFilterItemDetails, useItemMacros } from "../../lib/customHooks";
import ItemDetailsMacros from "./ItemDetailsMacros";

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

  //   test
  // const displayedMacros = {}

  return (
    <main className="mx-auto w-10/12 max-w-3xl py-10">
      <div className="  px-4 py-6 font-medium text-gray-700">
        <div className=" sm:flex">
          <div>
            <h2 className="text-2xl font-bold sm:mt-2"> {itemName}</h2>
            <h3 className="mt-2 text-xl sm:mt-6">
              For {displayedGrams}
              {"g"} :
            </h3>

            <ItemDetailsMacros
              displayedCalories={displayedCalories}
              displayedProtein={displayedProtein}
              displayedCarbs={displayedCarbs}
              displayedFat={displayedFat}
            />
          </div>

          {/* <div className="mx-auto mt-4 max-w-[13.5rem] sm:mt-0">
          <NutritionItemDetailChart
            chartData={chartData}
            calories={displayedCalories}
          />
        </div> */}
        </div>
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
                onChange={handleProteinInputChange}
                id="grams of protein"
                type="number"
                className="mx-2 w-20 rounded border border-gray-400 px-2 py-1 sm:w-5/12"
              />
              <span className="text-gray-700">g</span>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
