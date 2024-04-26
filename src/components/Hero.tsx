// import heroImage from "../assets/hero-image-1.jpg";

export default function Hero() {
  return (
    <section className="bg-blueviolet relative flex h-[60vh] items-center justify-center bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-blue-600 opacity-100"></div>
      <div className="z-10 text-center">
        {/* <img src={heroImage} alt="Hero" className="mx-auto mb-4" /> */}
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Track Your Nutrition
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          An easy way to calculate and track the foods you love to eat!
        </p>
      </div>
    </section>
  );
}
