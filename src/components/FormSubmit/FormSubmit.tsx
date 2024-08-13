import React, { useState } from "react";
// import { client } from "../client";

import "./FormSubmit.css";

const FormSubmit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Create a new document in the 'formSubmission' collection
    // await client.create({
    //   _type: "formSubmission",
    //   name,
    //   email,
    //   message,
    // });

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);

    // Set submitted state to true
    setIsSubmitted(true);
  };

  return (
    <section className="form-container">
      <p>
        Have questions, suggestions, or feedback? Please feel free to contact me
        using the form below:
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {!isSubmitted && (
          <input type="submit" value={isLoading ? "Loading..." : "Submit"} />
        )}
        {isSubmitted && <p>Thank you for your submission!</p>}
      </form>
    </section>
  );
};

export default FormSubmit;
