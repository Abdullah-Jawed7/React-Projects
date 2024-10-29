import React from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbe90aae-817c-499f-ae27-f9b6a122aac5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-6 bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
      >
        Contact Me
      </motion.h2>

      <form
        onSubmit={onSubmit}
        className="max-w-md mx-auto space-y-4 animate-fade-in"
      >
        {result && <p className="mx-auto">{result}</p>}
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.2 }}
          required
          name="name"
          placeholder="Your Name"
          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-teal-500 dark:focus:border-teal-400 block h-10 w-full p-4 rounded-lg transition-colors duration-300"
        />
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          required
          name="email"
          type="email"
          placeholder="Your Email"
          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-teal-500 dark:focus:border-teal-400 block h-10 w-full p-4 rounded-lg transition-colors duration-300"
        />
        <motion.textarea
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          required
          name="message"
          rows={3}
          placeholder="Your Message"
          className="resize-none  bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-teal-500 dark:focus:border-teal-400 block  w-full p-4 rounded-lg transition-colors duration-300"
        />
        <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white transition-colors duration-300 transform hover:scale-105">
          Send Message
          <Send className="inline-block ml-2 h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
