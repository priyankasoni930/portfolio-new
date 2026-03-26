import { useCallback, useEffect, useState } from "react";
import {
  HomeIcon,
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { XIcon } from "lucide-react";
import LiquidGlass from "liquid-glass-react";

export function BottomDock() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    const switchFn = () => setIsDark((prev) => !prev);
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        switchFn();
      });
    } else {
      switchFn();
    }
  }, []);

  const dockItems = [
    { icon: HomeIcon, label: "Home", href: "#" },
    {
      icon: FileTextIcon,
      label: "Resume",
      href: "https://drive.google.com/file/d/1kpcW0x3Ee7uxQO-Nht6gQx7XFKpCDbr9/view?usp=sharing",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/priyankasoni930",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyanka-soni-6a9798293/",
    },
    { icon: XIcon, label: "X", href: "https://x.com/Priyankasoni930" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "-50px",
        left: "50%",
        zIndex: 50,
      }}
    >
      <LiquidGlass
        displacementScale={50}
        blurAmount={0.1}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={28}
        padding="12px 8px"
        overLight={!isDark}
        style={{
          border: isDark
            ? "1px solid rgba(255,255,255,0.18)"
            : "1px solid rgba(0,0,0,0.12)",
          borderRadius: "28px",
          boxShadow: "none",
          gap: "0px",
        }}
      >
        <div className="flex items-center gap-2">
          {dockItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.label !== "Home" ? "_blank" : undefined}
              rel={item.label !== "Home" ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-center w-10 h-10 rounded-[16px] hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-150 hover:scale-110 active:scale-95"
              aria-label={item.label}
            >
              <item.icon
                className="w-5 h-5 text-gray-800 dark:text-gray-100 transition-colors duration-200"
                strokeWidth={1.5}
              />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-gray-900 text-[11px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[100]">
                {item.label}
              </div>
            </a>
          ))}

          <div className="w-px h-6 bg-gray-400/30 dark:bg-gray-600/30 transition-colors duration-200"></div>

          <button
            onClick={toggleTheme}
            className="group relative flex items-center justify-center w-10 h-10 rounded-[16px] hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-150 hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon
                className="w-5 h-5 text-gray-800 dark:text-gray-100 transition-colors duration-200"
                strokeWidth={1.5}
              />
            ) : (
              <MoonIcon
                className="w-5 h-5 text-gray-800 dark:text-gray-100 transition-colors duration-200"
                strokeWidth={1.5}
              />
            )}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-gray-900 text-[11px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[100]">
              {isDark ? "Light" : "Dark"}
            </div>
          </button>
        </div>
      </LiquidGlass>
    </div>
  );
}
