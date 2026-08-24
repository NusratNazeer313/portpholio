"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const links = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "GitHub",
    value: "NusratNazeer313",
    href: "https://github.com/NusratNazeer313",
  },
  {
    label: "LinkedIn",
    value: "Nusrat Nazeer",
    href: "https://www.linkedin.com/in/your-linkedin-profile",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center atmosphere px-4 py-20 md:py-28">
      <SectionHeading
        title="Contact Me"
        subtitle="Have a project in mind? Let's build something memorable together."
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-ink text-stone p-8 sm:p-10 flex flex-col justify-between min-h-[320px]"
        >
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(232,93,4,0.6) 0%, transparent 70%)",
            }}
          />
          <div>
            <p className="text-ember-bright text-xs tracking-[0.25em] uppercase font-medium mb-4">
              Let&apos;s connect
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Tell me about your next idea
            </h3>
            <p className="mt-4 text-stone/60 text-sm sm:text-base max-w-sm leading-relaxed">
              Open to freelance work, collaborations, and full-time frontend
              roles focused on React and React Native.
            </p>
          </div>

          <ul className="mt-10 space-y-4 relative z-10">
            {links.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block border-t border-white/10 pt-4"
                >
                  <span className="text-[11px] tracking-wider uppercase text-stone/40">
                    {item.label}
                  </span>
                  <span className="block mt-1 font-medium text-stone group-hover:text-ember-bright transition-colors">
                    {item.value}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <form className="h-full flex flex-col space-y-4 sm:space-y-5 border border-ink/10 bg-white/40 backdrop-blur-sm p-6 sm:p-8 shadow-soft">
            {[
              { type: "text", placeholder: "Your Name", delay: 0.1 },
              { type: "email", placeholder: "Your Email", delay: 0.2 },
            ].map((field) => (
              <motion.input
                key={field.placeholder}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: field.delay }}
                type={field.type}
                placeholder={field.placeholder}
                className="bg-stone/80 border border-ink/10 p-3.5 sm:p-4 focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember/30 transition-all duration-300 text-ink placeholder:text-mist"
              />
            ))}
            <motion.textarea
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              placeholder="Your Message"
              className="bg-stone/80 border border-ink/10 p-3.5 sm:p-4 h-36 flex-1 resize-none focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember/30 transition-all duration-300 text-ink placeholder:text-mist"
            />
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-ink hover:bg-ember font-semibold text-stone py-3.5 sm:py-4 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center text-mist text-sm"
      >
        <p className="font-display text-ink/40">© 2026 Nusrat Nazeer</p>
      </motion.footer>
    </div>
  );
};

export default Contact;
