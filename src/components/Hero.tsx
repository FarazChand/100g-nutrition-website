import "./Hero.css";

import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[70vh] flex-col items-center justify-center gap-6 bg-blue-600 bg-cover bg-center  px-3 text-white"
    >
      {/* <div className="absolute inset-0 bg-blue-600 opacity-50"></div> */}
      <div className="z-10 max-w-[650px] text-center">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Track Your Nutrition
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          An easy way to calculate and track the foods you love to eat!
        </p>
      </div>
      <SearchBar />
      <div className=""></div>

      <section className="container mx-auto">
        <p className="text-center font-semibold">
          Welcome to 100g Nutrition! Start by searching for a food you'd like to
          track.
        </p>
      </section>
    </section>
  );
}
