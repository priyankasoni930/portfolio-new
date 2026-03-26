import React from "react";
export function Hero() {
  return (
    <section className="relative z-10 pt-32 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Hi, I'm{" "}
          <span className="font-serif italic font-semibold">Priyanka</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Full Stack Developer building user-focused web applications
        </p>
      </div>
    </section>
  );
}
