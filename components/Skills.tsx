"use client";

import { Card, CardContent } from "@/components/ui/card";

const Skills=() => {
  const skills = [
    {
      name: "JavaScript",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.74 18.87c.44.73 1.01.73 1.69.73.87 0 1.42-.44 1.42-1.31V12.1h-1.69v6.14c0 .44-.18.58-.44.58-.29 0-.44-.18-.58-.44l-1.4.49zm3.49-.15c.51.87 1.18.87 1.98.87 1.31 0 2.16-.65 2.16-1.98 0-1.18-.65-1.6-1.75-2.05l-.36-.15c-.58-.25-.83-.42-.83-.83 0-.33.25-.58.65-.58.36 0 .58.15.8.58l1.31-.84c-.58-.98-1.38-.98-2.11-.98-1.31 0-2.16.69-2.16 1.84 0 1.13.65 1.56 1.6 1.93l.36.15c.62.27.98.44.98.91 0 .4-.36.69-.87.69-.62 0-.98-.29-1.31-.84l-1.45.84z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
          <ellipse
            cx="12"
            cy="12"
            rx="7"
            ry="3"
            stroke="#61DAFB"
            strokeWidth="1"
            fill="none"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="7"
            ry="3"
            stroke="#61DAFB"
            strokeWidth="1"
            fill="none"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="7"
            ry="3"
            stroke="#61DAFB"
            strokeWidth="1"
            fill="none"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#000" />
          <path
            d="M9.5 9.5L14.5 14.5M14.5 9.5v5h-5"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M8.5 8.5h7M12 8.5v7M8.5 15.5h7"
            stroke="#fff"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <text
            x="12"
            y="13"
            textAnchor="middle"
            fill="#fff"
            fontSize="6"
            fontWeight="bold"
          >
            TS
          </text>
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"
            fill="#06B6D4"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#181717" />
          <path
            d="M12 7c-2.76 0-5 2.24-5 5 0 2.21 1.44 4.09 3.44 4.75.25.05.34-.11.34-.24 0-.12-.01-.52-.01-.95-1.39.3-1.68-.59-1.68-.59-.23-.58-.56-.74-.56-.74-.46-.31.03-.31.03-.31.51.04.78.52.78.52.45.77 1.18.55 1.47.42.05-.33.18-.55.32-.68-1.12-.13-2.3-.56-2.3-2.5 0-.55.2-1 .52-1.36-.05-.13-.23-.65.05-1.36 0 0 .42-.14 1.38.52.4-.11.83-.17 1.25-.17s.85.06 1.25.17c.96-.66 1.38-.52 1.38-.52.28.71.1 1.23.05 1.36.32.36.52.81.52 1.36 0 1.94-1.18 2.37-2.3 2.5.18.16.34.47.34.95 0 .68-.01 1.23-.01 1.4 0 .13.09.29.34.24C15.56 16.09 17 14.21 17 12c0-2.76-2.24-5-5-5z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      name: "Vite",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient
              id="viteGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
          <path
            d="M23.827 8.243A.5.5 0 0 0 23.456 8L12.618 1.2a.5.5 0 0 0-.736 0L.044 8a.5.5 0 0 0-.371.243.5.5 0 0 0 .056.514l11.5 14a.5.5 0 0 0 .771 0l11.5-14a.5.5 0 0 0 .327-.514z"
            fill="url(#viteGradient)"
          />
          <path d="M18.5 7.5L12 2L5.5 7.5L12 20L18.5 7.5z" fill="#FFD62E" />
        </svg>
      ),
    },
    {
      name: "SCSS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#CF649A" />
          <path
            d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2.5 8.5c-.28.28-.65.5-1.06.65-.41.15-.85.23-1.31.23-.46 0-.9-.08-1.31-.23-.41-.15-.78-.37-1.06-.65s-.5-.65-.65-1.06c-.15-.41-.23-.85-.23-1.31s.08-.9.23-1.31c.15-.41.37-.78.65-1.06s.65-.5 1.06-.65c.41-.15.85-.23 1.31-.23s.9.08 1.31.23c.41.15.78.37 1.06.65s.5.65.65 1.06c.15.41.23.85.23 1.31s-.08.9-.23 1.31c-.15.41-.37.78-.65 1.06z"
            fill="#fff"
          />
          <text
            x="12"
            y="13.5"
            textAnchor="middle"
            fill="#CF649A"
            fontSize="4"
            fontWeight="bold"
          >
            SCSS
          </text>
        </svg>
      ),
    },
    {
      name: "Chakra UI",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#319795" />
          <path
            d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM8 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
            fill="#fff"
          />
          <circle cx="12" cy="12" r="2" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "shadcn/ui",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#000" />
          <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="#fff" />
          <circle cx="18" cy="6" r="2" fill="#fff" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600">
            Technologies I work with to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center space-y-4 p-0">
                <div className="flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {skill.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
