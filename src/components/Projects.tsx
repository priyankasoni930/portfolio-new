import React from "react";
import { ProjectCard } from "./ProjectCard";
const projects = [
  {
    title: "NoteWave",
    description:
      "NoteWave is a web application that enables users to take real-time speech-to-text notes and summarize those notes, YouTube videos, and PDFs. And generate PPTs, PDFs, flashcards, and quizzes.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: {
      code: "https://github.com/priyankasoni930/NoteWave",
      demo: "https://notewave-ai.vercel.app/",
    },
  },
  {
    title: "Career-Canvas",
    description:
      "Career Canvas is a resume builder, cover letter generator, and ATS score checker to help users create job-ready applications. With a portfolio builder where users can upload their resume, choose from 50+ portfolio templates, and get a live link for their portfolio.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: {
      demo: "https://career-canvas-ai.vercel.app/",
    },
  },
  {
    title: "Interview-Buddy",
    description:
      "Interview-Buddy is a web application providing personalized interview simulations and AI-powered performance analysis. Designed to help users refine their interview skills.",
    tech: ["Next.js", "JavaScript", "PostgreSQL", "Drizzle"],
    links: {
      code: "https://github.com/priyankasoni930/Interview-Buddy",
      demo: "https://interview-buddyai.vercel.app/",
    },
  },
  {
    title: "LinkShrink",
    description:
      "LinkShrink is a sleek URL shortener website, designed to make sharing links easier and more efficient. LinkShrink allows users to quickly shorten long URLs, track click statistics, and manage their links effortlessly.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    links: {
      code: "https://github.com/priyankasoni930/LinkShrink",
      demo: "https://link-shrink-snowy.vercel.app/",
    },
  },
  {
    title: "GlamStrip Studio",
    description:
      "GlamStrip Studio is a web application that lets users capture photobooth-style strip photos, apply aesthetic filters, and craft beautiful photo collages. Users can upload or capture photos, apply real-time filters, remove backgrounds, add cute stickers and text, and customize photo strips with vibrant borders and themes. The platform offers 50+ collage layouts.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      demo: "#",
    },
  },
  {
    title: "ReadRealm",
    description:
      "ReadRealm is a web application designed for book lovers to connect, track, and grow their reading journeys. The platform allows users to leave detailed reviews on books, build and organize their personal digital library, and create custom reading challenges to stay motivated. It features interactive forums where users can chat.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: {
      code: "https://github.com/priyankasoni930/Read-Realm",
      demo: "https://read-realm-snowy.vercel.app/",
    },
  },
  {
    title: "StoryNest",
    description:
      "StoryNest is a backend platform designed to provide a Wattpad-like experience for reading and writing stories.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    links: {
      code: "https://github.com/priyankasoni930/StoryNest-Backend",
    },
  },
  {
    title: "DevInquire",
    description:
      "DevInquire is a backend designed to support a Stack Overflow-like platform. It facilitates efficient question-and-answer interactions, enabling developers to seek help and share knowledge effortlessly.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    links: {
      code: "https://github.com/priyankasoni930/DevInquire-Backend",
    },
  },
];

export function Projects() {
  return (
    <section className="relative z-10 py-20">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-bold mb-6">
          Projects
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Check out my latest work
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-400">
          A selection of my recent work and personal projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
