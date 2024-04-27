import heroImage from "../assets/hero-image-1.jpg";

import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative flex h-[70vh] flex-col items-center justify-center gap-6 bg-blue-600 bg-cover bg-center  px-3 text-white">
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
    </section>
  );
}
