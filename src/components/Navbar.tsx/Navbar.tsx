import { useState } from "react";
import { NavLink } from "react-router-dom";

import Burger from "../BurgerIcon/Burger";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Guide", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  // Mobile Nav State
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
    <nav className="sm-max:h-[4rem] sticky top-[0] flex h-[5rem] items-center justify-around bg-gray-300 ">
      {/* Logo */}
      <div>
        <h4 className="text-xl uppercase tracking-[.3125em]">
          100<span className="font-bold text-blue-600">G</span>Nutrition
        </h4>
      </div>

      {/* Nav List */}
      <ul
        className={`sm-max:fixed sm-max:right-[0px] sm-max:top-[4rem] sm-max:flex sm-max:h-[90vh] sm-max:w-[65%] sm-max:flex-col sm-max:items-center sm-max:justify-evenly sm-max:grow  sm-max:bg-gray-200 flex w-[60%] justify-around text-blue-600 transition duration-300 ease-in lg:w-[40%]  ${navTransitionClasses}`}
      >
        {ROUTES.map((route, i) => (
          <li
            key={i}
            style={{ transitionDelay: `${i * 100}ms` }}
            className={`transition duration-1000 ${linkSlideIn} flex w-full items-center justify-center`}
          >
            <NavLink
              to={route.path}
              className="text-sm font-semibold tracking-widest no-underline"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Burger navHandler={toggleNavHandler} isOpen={navIsOpen}></Burger>
    </nav>
  );
};
export default Navbar;
