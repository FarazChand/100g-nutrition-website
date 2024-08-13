import "../../index.css"; // do not need to import since this component is in its scope, but will be implicit for now
import { NavLink } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="centered-container mx-auto mt-24 px-6 sm:mt-32 sm:px-8">
      <div>
        <h1 className=" --color-primary text-center text-3xl">About Us</h1>
        <p className="mt-6">
          Welcome to 100g Nutrition – your ultimate resource for understanding
          and optimizing your nutritional intake!
        </p>
      </div>

      <div className="mt-8">
        <h2 className=" text-xl">Our Misson</h2>
        <p className="mt-2">
          At 100g Nutrition, our mission is simple: to empower you with accurate
          and actionable nutritional information. Whether you're a fitness
          enthusiast, a health-conscious individual, or simply curious about the
          nutritional content of your favorite foods, we're here to help you
          make informed decisions about what you eat.
        </p>
      </div>

      <div className="mt-8">
        <h2 className=" text-xl">What We Do</h2>
        <p className="mt-2">
          Our platform allows you to search for a wide range of foods and view
          detailed nutritional information, thanks to the comprehensive USDA
          Nutritional Database. But we don’t stop there – we give you the
          flexibility to customize your calculations.
        </p>

        <ul className="mt-4 list-disc pl-8">
          <li className="mt-2">
            <p>
              <span className="font-semibold">Search and Discover:</span> Easily
              find nutritional information for thousands of foods.
            </p>
          </li>
          <li className="mt-2">
            <p>
              <span className="font-semibold">Custom Calculations:</span> Adjust
              the quantities based on your protein needs, or calculate the
              nutritional values based on the weight in grams.
            </p>
          </li>
          <li className="mt-2">
            <p>
              <span className="font-semibold">Data Accuracy:</span> Rely on the
              trusted USDA nutritional database for precise and up-to-date food
              information.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className=" text-xl">Coming Soon...</h2>
        <p className="mt-2">
          We’re excited to share that we have some fantastic updates on the
          horizon for 100g Nutrition! Our team is working diligently to bring
          you new features that will enhance your experience:
        </p>

        <ul className="mt-4 list-disc pl-8">
          <li className="mt-2">
            <p>
              <span className="font-semibold">Personal Accounts:</span> Soon,
              you’ll be able to create a personalized account to save your
              favorite foods, track your nutritional goals, and more. Stay tuned
              for the convenience of having your own profile on 100g Nutrition!
            </p>
          </li>
          <li className="mt-2">
            <p>
              <span className="font-semibold">
                Custom Ingredients & Recipes:
              </span>{" "}
              We understand that sometimes the foods you’re looking for may not
              be in the USDA database. That’s why we’re planning to introduce
              the ability to add your own custom ingredients and recipes. This
              feature will allow you to input and calculate nutrition
              information for any food, ensuring that you have all the details
              you need.
            </p>
          </li>
        </ul>

        <p className="mt-4">
          We can’t wait to roll out these new features and enhance your
          experience with 100g Nutrition. Thank you for your patience and
          continued support!
        </p>
      </div>

      <div className="mt-8">
        <h2 className=" text-xl">Get in Touch</h2>
        <p className="mt-2">
          Have questions or feedback? We’d love to hear from you! Reach out to
          us through our{" "}
          <NavLink to={"/contact"} className="text-blue-600">
            contact page{" "}
          </NavLink>
          or check out our quick guide{" "}
          <NavLink to={"/guide"} className="text-blue-600">
            here
          </NavLink>
          .
        </p>
      </div>

      <p className="mt-6">
        Thank you for choosing 100g Nutrition – where your journey to better
        nutrition starts today!
      </p>
    </section>
  );
}
