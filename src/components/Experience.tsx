import React from "react";
import LiquidGlass from "liquid-glass-react";
export function Experience() {
  return (
    <section className="relative z-10 py-16">
      <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-wider wavy-underline inline-block">
        Experience
      </h2>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Frontend Developer
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Astute Lex Servicado
            </p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 md:text-right">
            <p>April 2025 - Present</p>
            <p>Remote</p>
          </div>
        </div>

        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li className="flex gap-3">
            <span className="text-blue-500 mt-1.5">•</span>
            <span>
              Developed the complete contract lifecycle module including
              drafting, AI-powered redrafting, risk analysis, translation,
              summarization, clause generation, and auto summary features.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 mt-1.5">•</span>
            <span>
              Built the frontend of litigation module that generates judgments,
              summaries, facts, strategies, and drafts from case files.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 mt-1.5">•</span>
            <span>
              Implemented role-based team management flow for law firms and
              lawyers, supporting role-based access and permissions.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
