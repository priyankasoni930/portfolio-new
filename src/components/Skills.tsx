import React from 'react';
const skills = [
'React',
'TypeScript',
'Next.js',
'Tailwind CSS',
'Node.js',
'Express',
'Python',
'MongoDB',
'PostgreSQL',
'Docker',
'JavaScript',
'Prisma',
'Git',
'Zustand'];

export function Skills() {
  return (
    <section className="relative z-10 py-16">
      <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-wider wavy-underline inline-block">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) =>
        <span
          key={skill}
          className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default shadow-md">
          
            {skill}
          </span>
        )}
      </div>
    </section>);

}