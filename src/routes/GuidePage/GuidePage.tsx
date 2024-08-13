export default function GuidePage() {
  return (
    <section className="centered-container mx-auto mt-24 px-6 sm:mt-32 sm:px-8">
      <div>
        <h1 className=" --color-primary text-center text-3xl">Guide</h1>
        <p className="mt-4 text-center">
          If you're having trouble using the app, heres a quick guide that might
          help.
        </p>
      </div>

      <div className="mt-8">
        <h2 className=" text-xl">How it Works:</h2>

        <ol className="mt-4 pl-8">
          <li className="mt-2">
            <p>
              <span className="font-semibold">1. Search Your Food:</span> Enter
              the name of the food you’re interested in, and our search tool
              will provide you with an array of options to pick from.
            </p>
          </li>
          <li className="mt-2">
            <p>
              <span className="font-semibold">2. Pick an Option:</span> Once
              your list of options appear, be sure to pick the one that fits
              your needs the best.
            </p>
          </li>
          <li className="mt-2">
            <p>
              <span className="font-semibold">3. Adjust for Your Needs:</span>{" "}
              Use our intuitive tools to modify quantities based on grams or
              desired protein intake.
            </p>
          </li>
          <li className="mt-2">
            <p>
              <span className="font-semibold">4. Get Accurate Info:</span>{" "}
              Receive precise nutritional details tailored to your specific
              needs
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
