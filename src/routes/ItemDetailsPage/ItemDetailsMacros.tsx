import { TbDna } from "react-icons/tb";
import { CiWheat } from "react-icons/ci";
import { GiMolecule } from "react-icons/gi";
import { BsBatteryCharging } from "react-icons/bs";

export default function ItemDetailsMacros({
  displayedCalories,
  displayedProtein,
  displayedCarbs,
  displayedFat,
}) {
  return (
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
  );
}
