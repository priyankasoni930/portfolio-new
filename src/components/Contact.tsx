import React from "react";
export function Contact() {
  return (
    <section className="py-20 text-center">
      {/* Contact badge */}
      <div className="inline-block px-4 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900  text-sm font-medium mb-8">
        Contact
      </div>

      {/* Main heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb mb-8">
        Get in Touch
      </h2>

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
