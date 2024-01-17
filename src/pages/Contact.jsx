import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [formError, setFormError] = useState(null);

  const validateEmail = (email) => {
    // A simple email validation function, you can use a more sophisticated one if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setFormError("Please fill in all the fields.");
      return;
    }

    if (!validateEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_4h2crmj",
        "template_ne5ns6j",
        form.current,
        "H_EQs-nml7NIwwDvH"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-11/12 lg:w-1/2 mx-auto">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl md:text-2xl mt-3 sm:w-2/3 text-center">
          To touch base, just shoot me an email (mcayanan@gmail.com) or fill out
          the form below!
        </h1>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg my-10"
      >
        {formError && (
          <div className="mb-4 text-red-500">{formError}</div>
        )}
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
            autoFocus
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-violet-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-violet-500"
            required
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-pink-300 rounded hover:bg-pink-500 focus:outline-none focus:bg-blue-600"
          />
        </div>
      </form>

      <Footer />
    </div>
  );
}