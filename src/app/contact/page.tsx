"use client";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10 px-4 relative">
      <h1 className="text-3xl font-bold text-black mb-4 text-center">
        Contact me
      </h1>

      <div className="flex justify-center items-center mb-2">
        <div className="w-4 h-4 bg-gray-600 rounded-full" />
        <div className="w-24 h-1 bg-orange-600" />
        <div className="w-4 h-4 bg-gray-600 rounded-full" />
      </div>

      <div className="w-24 h-1 bg-gray-400 mb-10" />
      <div className="w-full flex flex-row pr-96">
        <DotLottieReact
          src="https://lottie.host/6db9bb2e-11fc-468f-bcf5-0d21d86b5ccf/xCcfIA5arb.lottie"
          loop
          autoplay
          style={{ width: "90%", position: "relative", top: 10, left: -50 }}
        />

        <div className="w-1/2 lg:w-1/2 p-6 rounded-lg bg-white shadow-lg absolute top-56 right-40">
          <form className="flex flex-col space-y-4">
            <motion.input
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 1 }}
              type="text"
              placeholder="Name"
              className="bg-gray-100 border border-neutral-300 p-2 rounded-md focus:outline-none"
            />
            <motion.input
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 2 }}
              type="email"
              placeholder="Email"
              className="bg-gray-100 border border-neutral-300 p-2 rounded-md focus:outline-none"
            />
            <motion.textarea
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 3 }}
              placeholder="Message"
              className="bg-gray-100 border border-neutral-300 p-2 rounded-md h-32 resize-none focus:outline-none"
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 4 }}
              type="submit"
              className="bg-black font-bold text-white py-2 rounded-md"
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
