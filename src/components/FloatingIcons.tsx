import React from 'react';
import {
  CodeIcon,
  LayersIcon,
  DatabaseIcon,
  GlobeIcon,
  CpuIcon,
  ZapIcon } from
'lucide-react';
export function FloatingIcons() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <CodeIcon className="absolute top-20 left-[10%] w-12 h-12 text-blue-100 dark:text-blue-900/30 animate-float" />
      <GlobeIcon className="absolute top-60 left-[5%] w-16 h-16 text-indigo-100 dark:text-indigo-900/30 animate-float-delayed" />
      <ZapIcon className="absolute top-[40%] left-[12%] w-10 h-10 text-cyan-100 dark:text-cyan-900/30 animate-float" />

      <CpuIcon className="absolute top-24 right-[10%] w-14 h-14 text-purple-100 dark:text-purple-900/30 animate-float-delayed" />
      <LayersIcon className="absolute top-72 right-[6%] w-16 h-16 text-blue-100 dark:text-blue-900/30 animate-float" />
      <DatabaseIcon className="absolute top-[50%] right-[12%] w-12 h-12 text-indigo-100 dark:text-indigo-900/30 animate-float-delayed" />

      <CodeIcon className="absolute bottom-40 left-[8%] w-10 h-10 text-purple-100 dark:text-purple-900/30 animate-float" />
      <LayersIcon className="absolute bottom-60 right-[8%] w-14 h-14 text-cyan-100 dark:text-cyan-900/30 animate-float-delayed" />
    </div>);

}