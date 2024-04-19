import { useState } from "react";

const Burger = (props) => {
  const [line1Rotate, setLine1Roatate] = useState("rotate-0");
  const [line2Rotate, setLine2Roatate] = useState("opacity-1");
  const [line3Rotate, setLine3Roatate] = useState("rotate-0");

  const burgerMenuClickedHandler = () => {
    if (props.isOpen === true) {
      setLine1Roatate(
        "rotate-0 translate-x-[0px] translate-y-[0px] rounded-sm",
      );
      setLine2Roatate("opacity-1 rounded-sm");
      setLine3Roatate(
        "rotate-0 translate-x-[0px] translate-y-[0px] rounded-sm",
      );
    } else {
      setLine1Roatate(
        "-rotate-45 translate-x-[0px] translate-y-[6px] rounded-sm",
      );
      setLine2Roatate("opacity-0");
      setLine3Roatate(
        "rotate-45 translate-x-[0px] translate-y-[-7.75px] rounded-sm",
      );
    }
    props.navHandler();
  };

  return (
    <div
      onClick={burgerMenuClickedHandler}
      className="sm-max:block sm-max:cursor-pointer"
    >
      <div
        className={`m-1 h-[3px] w-6 bg-blue-500 transition duration-500 ${line1Rotate}`}
      ></div>
      <div
        className={`m-1 h-[3px] w-6 bg-blue-500 transition duration-500 ${line2Rotate}`}
      ></div>
      <div
        className={`m-1 h-[3px] w-6 bg-blue-500 transition duration-500 ${line3Rotate}`}
      ></div>
    </div>
  );
};

export default Burger;
