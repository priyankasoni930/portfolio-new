import React from "react";
export function Contact() {
  return (
    <section className="py-20 text-center">
      {/* Contact badge */}
      <div className="inline-block px-6 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
        Contact
      </div>

      {/* Main heading */}
      <h2 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h2>

      {/* Description with links */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-2">
          <span>👋</span>
          <span>Wanna chat? Just</span>
        </span>
        <a
          href="mailto:soni.priyanka93016@gmail.com"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300  transition-colors"
        >
          email me
        </a>
        <span>or</span>
        <a
          href="https://x.com/Priyankasoni930"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          dm me on X
        </a>
        <span>.</span>
      </p>
    </section>
  );
}
