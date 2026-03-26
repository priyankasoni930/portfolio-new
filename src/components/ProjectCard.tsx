import React from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  links: {
    code?: string;
    demo?: string;
  };
}
export function ProjectCard({
  title,
  description,
  tech,
  links
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white/60 dark:bg-[#111111] backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-2 flex flex-col h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/[0.02] dark:to-transparent rounded-3xl pointer-events-none transition-all duration-200"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1 transition-colors duration-200">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t) =>
          <span
            key={t}
            className="px-3 py-1 bg-gray-100/80 dark:bg-white/5 text-gray-800 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200/50 dark:border-white/10 transition-colors duration-200">
            
              {t}
            </span>
          )}
        </div>

        <div className="flex gap-4 mt-auto">
          {links.code &&
          <a
            href={links.code}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
            
              <GithubIcon className="w-4 h-4" />
              Source
            </a>
          }
          {links.demo &&
          <a
            href={links.demo}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-200 shadow-sm">
            
              <ExternalLinkIcon className="w-4 h-4" />
              Demo
            </a>
          }
        </div>
      </div>
    </div>);

}