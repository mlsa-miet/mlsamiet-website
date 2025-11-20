
"use client";
import React, { useEffect, useState } from "react";
import { Newspaper } from "lucide-react";
 import { TextAnimate } from "./magicui/text-animate";

// ====================
// ELEMENTS DATA
// ====================
const elements = [
  {
    title: "October '25",
    description: "Explore key updates and exciting accomplishments from October 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/14th-edition-of-mlsa-miet-chronicles-october-2025-78a5f2cd-c4dc-4d48-acb7-b3c0281537fe",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "September '25",
    description: "Explore key updates and exciting accomplishments from September 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/13th-edition-of-mlsa-miet-chronicles-september-2025",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "August '25",
    description: "Explore key updates and exciting accomplishments from August 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/12th-edition-of-mlsa-miet-chronicles",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "July '25",
    description: "Explore key updates and exciting accomplishments from July 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/11th-edition-of-mlsa-miet-chronicles-july-2025",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "June '25",
    description: "Explore key updates and exciting accomplishments from June 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/10th-edition-of-mlsa-miet-chronicles-june-2025",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "May '25",
    description: "Explore key updates and exciting accomplishments from May 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/9th-edition-of-mlsa-miet-chronicles-may-2025",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "April '25",
    description: "Explore key updates and exciting accomplishments from April 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/8th-edition-of-mlsa-miet-chronicles",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "March '25",
    description: "Explore key updates and exciting accomplishments from March 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/7th-edition-of-mlsa-miet-newsletters",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "February '25",
    description: "Explore key updates and exciting accomplishments from February 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/6th-edition-of-mlsa-miet-newsletters",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "January '25",
    description: "Explore key updates and exciting accomplishments from the start of 2025.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/mlsa-miet-chronicles-a-thrilling-start-to-2025-with-mlsa",
    icon: <Newspaper className="w-full h-full" />,
  },
  {
    title: "December '24",
    description: "Discover insights from our December content and technical achievements.",
    link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/from-us-to-you-a-heartwarming-look-back-at-2024",
    icon: <Newspaper className="w-full h-full" />,
  },
];

const NewsletterCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % elements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % elements.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? elements.length - 1 : prev - 1
    );
  };

  

  
  const getPositionClasses = (index) => {
    
    if (elements.length === 0) return "";

    const prevIndex = (activeIndex - 1 + elements.length) % elements.length;
    const nextIndex = (activeIndex + 1) % elements.length;

    if (index === activeIndex) {
      return "z-30 opacity-100 scale-100 translate-y-0";
    } else if (index === prevIndex || index === nextIndex) {
      return "z-20 opacity-40 scale-90 translate-y-4 blur-[1px]";
    } else {
      return "z-10 opacity-0 scale-75 translate-y-8 pointer-events-none";
    }
  };

  // Prevent rendering until data exists
  if (!elements.length) return null;

  return (
<section className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 px-2 border-t-2 border-zinc-950">

  {/* Heading */}
  <h1 className=" text-xl sm:text-4xl md:text-5xl lg:text-6xl primary  text-center mb-16 text-[#203A61] primary">
  <TextAnimate> Newsletters</TextAnimate> 
  </h1>
      <div className="relative w-full max-w-md h-[360px]">
        {elements.map((el, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${getPositionClasses(
              index
            )}`}
          >
            <div className="w-80 h-96 bg-zinc-200 rounded-2xl border shadow-lg flex flex-col items-center justify-center p-6 space-y-6 transition">
              <a
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 text-blue-950 hover:scale-110 transition-transform"
              >
                {el.icon}
              </a>

              <h2 className="text-2xl font-bold text-zinc-900 text-center">
                {el.title}
              </h2>

              <p className="text-zinc-950 text-center text-xl leading-relaxed">
                {el.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="rounded-full border border-zinc-500 px-3 py-1 text-xs text-zinc-800 hover:bg-zinc-300 transition"
        >
          ◀ Prev
        </button>

        <div className="flex gap-1.5">
          {elements.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition ${
                idx === activeIndex ? "bg-zinc-800 w-4" : "bg-zinc-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="rounded-full border border-zinc-500 px-3 py-1 text-xs text-zinc-800 hover:bg-zinc-300 transition"
        >
          Next ▶
        </button>
      </div>
    </section>
  );
};

export default NewsletterCard;
