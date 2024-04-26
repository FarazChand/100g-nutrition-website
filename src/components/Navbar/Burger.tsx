import { useState } from "react";

type BurgerProps = {
  isOpen: boolean;
  navHandler: () => void;
};

const Burger = ({ isOpen, navHandler }: BurgerProps) => {
  const burgerState = {
    line1Rotate: !isOpen
      ? "rotate-0 translate-x-[0px] translate-y-[0px] rounded-sm"
      : "-rotate-45 translate-x-[0px] translate-y-[6px] rounded-sm",
    line2Rotate: !isOpen ? "opacity-1 rounded-sm" : "opacity-0",
    line3Rotate: !isOpen
      ? "rotate-0 translate-x-[0px] translate-y-[0px] rounded-sm"
      : "rotate-45 translate-x-[0px] translate-y-[-7.75px] rounded-sm",
  };

  const toggleBurgerMenuHandler = () => {
    navHandler();
  };

  return (
    <div
      onClick={toggleBurgerMenuHandler}
      className="sm-max:block sm-max:cursor-pointer mt-1 hidden"
    >
      <div
        className={`m-1 h-[3px] w-6 bg-blue-500 transition duration-500 ${burgerState.line1Rotate}`}
      ></div>
      <div
        className={`m-1 h-[3px] w-6 bg-blue-500 transition duration-500 ${burgerState.line2Rotate}`}
      ></div>
      <div
        className={`m-1 h-[3px] w-6 bg-blue-500 transition duration-500 ${burgerState.line3Rotate}`}
      ></div>
    </div>
  );
};

export default Burger;
