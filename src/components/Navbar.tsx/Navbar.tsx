import { useState } from "react";
import Burger from "../BurgerIcon/Burger";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navTransitionClasses, setNavTransitionClasses] = useState(
    "sm-max:translate-x-full",
  );
  const [linkSlideIn, setLinkSlideIn] = useState(
    "sm-max:opacity-0 sm-max:translate-x-[50px]",
  );

  const toggleNavHandler = () => {
    if (navIsOpen) {
      setNavTransitionClasses("sm-max:translate-x-full");
      setLinkSlideIn("sm-max:opacity-0 sm-max:translate-x-[50px] ");
      setNavIsOpen(false);
    } else {
      setNavTransitionClasses("sm-max:translate-x-0");
      setLinkSlideIn("sm-max:translate-x-0");
      setNavIsOpen(true);
    }
  };

  return (
    <nav className="sticky top-[0] flex min-h-[8vh] items-center justify-around bg-gray-300 ">
      {/* Logo */}
      <div>
        <h4 className="text-xl uppercase tracking-[.3125em]">
          100<span className="font-bold text-blue-600">G</span>Nutrition
        </h4>
      </div>

      {/* Nav List */}
      <ul
        className={`sm-max:fixed sm-max:right-[0px] sm-max:top-[8vh] sm-max:flex sm-max:h-[92vh] sm-max:w-[50%] sm-max:flex-col sm-max:items-center sm-max:justify-evenly sm-max:bg-gray-200 flex w-[60%] justify-around text-blue-600 transition duration-300 ease-in lg:w-[40%]  ${navTransitionClasses}`}
      >
        <li className={`transition duration-1000 ${linkSlideIn}`}>
          <a
            href="#"
            className="text-sm font-semibold tracking-widest no-underline"
          >
            Home
          </a>
        </li>
        <li className={`transition delay-100 duration-1000 ${linkSlideIn}`}>
          <a
            href="#"
            className="text-sm font-semibold tracking-widest no-underline"
          >
            Guide
          </a>
        </li>
        <li className={`transition delay-200 duration-1000 ${linkSlideIn}`}>
          <a
            href="#"
            className="text-sm font-semibold tracking-widest no-underline"
          >
            About
          </a>
        </li>
        <li className={`transition delay-300 duration-1000 ${linkSlideIn}`}>
          <a
            href="#"
            className="text-sm font-semibold tracking-widest no-underline"
          >
            Contact
          </a>
        </li>
      </ul>

      <Burger navHandler={toggleNavHandler} isOpen={navIsOpen}></Burger>
    </nav>
  );
};
export default Navbar;
