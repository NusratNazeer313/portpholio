"use client";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
          Contact me
        </h1>

        {/* Decorative divider */}
        <div className="flex justify-center items-center mb-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded-full" />
          <div className="w-16 sm:w-24 h-1 bg-orange-600 mx-2" />
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded-full" />
        </div>
        <div className="w-16 sm:w-24 h-1 bg-gray-400 mx-auto" />
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Mobile Layout - Stack vertically */}
        <div className="block lg:hidden space-y-8">
          {/* Mobile Lottie Animation */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <DotLottieReact
                src="https://lottie.host/6db9bb2e-11fc-468f-bcf5-0d21d86b5ccf/xCcfIA5arb.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Mobile Contact Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="p-6 sm:p-8 rounded-lg bg-white shadow-lg">
              <form className="flex flex-col space-y-4 sm:space-y-6">
                <motion.input
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  type="text"
                  placeholder="Name"
                  className="bg-gray-100 border border-neutral-300 p-3 sm:p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
                <motion.input
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 border border-neutral-300 p-3 sm:p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
                <motion.textarea
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  placeholder="Message"
                  className="bg-gray-100 border border-neutral-300 p-3 sm:p-4 rounded-md h-32 sm:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                ></motion.textarea>
                <motion.button
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  type="submit"
                  className="bg-black hover:bg-gray-800 font-bold text-white py-3 sm:py-4 rounded-md transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-8 xl:gap-12">
          {/* Desktop Lottie Animation */}
          <div className="flex-1 max-w-2xl">
            <DotLottieReact
              src="https://lottie.host/6db9bb2e-11fc-468f-bcf5-0d21d86b5ccf/xCcfIA5arb.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Desktop Contact Form */}
          <div className="flex-1 max-w-lg">
            <div className="p-8 xl:p-10 rounded-lg bg-white shadow-xl">
              <form className="flex flex-col space-y-6">
                <motion.input
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-100 border border-neutral-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                />
                <motion.input
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-100 border border-neutral-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                />
                <motion.textarea
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  placeholder="Your Message"
                  className="bg-gray-100 border border-neutral-300 p-4 rounded-md h-40 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                ></motion.textarea>
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  type="submit"
                  className="bg-black hover:bg-gray-800 font-bold text-white py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
