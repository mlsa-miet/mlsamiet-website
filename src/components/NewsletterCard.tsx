"use client";
// import React from "react";
// import Link from "next/link";
// import { Newspaper } from "lucide-react";
// import { TextAnimate } from "./magicui/text-animate";
// import { HiArrowSmallRight } from "react-icons/hi2";
// import "./webflow-3d-cards.css";


// interface NewsletterCardProps {
//   title: string;
//   description: string;
//   link: string;
//   icon: React.ReactNode;
// }

// function SingleCard({ title, description, link, icon }: NewsletterCardProps) {
//   return (
//     <div className="w-80 h-96">
//       <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col items-center justify-center space-y-4 hover:shadow-xl transition-shadow">
//         <div className="text-secondary w-16 h-16">{icon}</div>
//         <h2 className="text-2xl primary text-black">{title}</h2>
//         <p className="text-black text-center secondary">{description}</p>
//         <Link href={link}>
//         <div className="flex items-center gap-2 bg-[#203A61] text-white font-bold py-2 px-6 rounded-[5px] shadow-lg transition-all duration-300 transform hover:scale-105 secondary">
//          <button>Know More </button>
//          <HiArrowSmallRight />
//         </div>
          
//         </Link>
//       </div>
//     </div>
//   );
// }

// export function NewsletterCards() {
//   const newsletters = [
//     {
//       title: "October '25",
//       description: "Explore key updates and exciting accomplishments from October 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/14th-edition-of-mlsa-miet-chronicles-october-2025-78a5f2cd-c4dc-4d48-acb7-b3c0281537fe",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "September '25",
//       description: "Explore key updates and exciting accomplishments from September 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/13th-edition-of-mlsa-miet-chronicles-september-2025",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "August '25",
//       description: "Explore key updates and exciting accomplishments from August 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/12th-edition-of-mlsa-miet-chronicles",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "July '25",
//       description: "Explore key updates and exciting accomplishments from July 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/11th-edition-of-mlsa-miet-chronicles-july-2025",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "June '25",
//       description: "Explore key updates and exciting accomplishments from June 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/10th-edition-of-mlsa-miet-chronicles-june-2025",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "May '25",
//       description: "Explore key updates and exciting accomplishments from May 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/9th-edition-of-mlsa-miet-chronicles-may-2025",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "April '25",
//       description: "Explore key updates and exciting accomplishments from April 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/8th-edition-of-mlsa-miet-chronicles",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "March '25",
//       description: "Explore key updates and exciting accomplishments from March 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/7th-edition-of-mlsa-miet-newsletters",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "February '25",
//       description: "Explore key updates and exciting accomplishments from February 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/6th-edition-of-mlsa-miet-newsletters",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "January '25",
//       description: "Explore key updates and exciting accomplishments from the start of 2025.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/mlsa-miet-chronicles-a-thrilling-start-to-2025-with-mlsa",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     {
//       title: "December '24",
//       description: "Discover insights from our December content and technical achievements.",
//       link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/from-us-to-you-a-heartwarming-look-back-at-2024",
//       icon: <Newspaper className="w-full h-full" />,
//     },
//     // {
//     //   title: "November '24 ",
//     //   description: "Check out the events and activities that defined November.",
//     //   link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/3rd-edition-of-mlsa-miet",
//     //   icon: <Newspaper className="w-full h-full" />,
//     // },
//   ];

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center gap-4 text-primary text-center m-4">
//         <TextAnimate
//           animation="blurInUp"
//           by="character"
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl primary"
//         >
//           HIGHLIGHTS
//         </TextAnimate>
//       </div>

//       <div className="bg-gray-100 py-8 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className=" grid grid-rows-4 grid-cols-3 gap-2 items-center justify-center gap-8">
//             {newsletters.map((newsletter, index) => (
//               <SingleCard key={index} {...newsletter} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// 

import React, { useEffect, useState } from "react";

const elements = [
  {
    name: "WATER",
    description:
      "A period of retreat, where stillness, contracting and coolness.",
    img: "https://cdn.prod.website-files.com/691dec680c763d6f4c9a6d54/691dec690c763d6f4c9a6dd5_water.jpg",
    accent: "border-cyan-400",
  },
  {
    name: "SOIL",
    description:
      "It can be seen as a transitional period between the other phases or seasons.",
    img: "https://cdn.prod.website-files.com/691dec680c763d6f4c9a6d54/691dec690c763d6f4c9a6dd4_soil.jpg",
    accent: "border-emerald-400",
  },
  {
    name: "GOLD",
    description: "A period of harvesting, collecting and dryness.",
    img: "https://cdn.prod.website-files.com/691dec680c763d6f4c9a6d54/691dec690c763d6f4c9a6dd3_gold.jpg",
    accent: "border-amber-300",
  },
  {
    name: "FIRE",
    description: "A period of swelling, flowering, expanding with heat.",
    img: "https://cdn.prod.website-files.com/691dec680c763d6f4c9a6d54/691dec690c763d6f4c9a6dd2_fire.jpg",
    accent: "border-red-400",
  },
  {
    name: "WOOD",
    description:
      "A period of growth, which generates abundant vitality, movement and wind.",
    img: "https://cdn.prod.website-files.com/691dec680c763d6f4c9a6d54/691dec690c763d6f4c9a6dd6_wood.jpg",
    accent: "border-lime-400",
  },
];

const NewsletterCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change card every 3 seconds
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

  const getPositionClasses = (index:any) => {
    const prevIndex = (activeIndex - 1 + elements.length) % elements.length;
    const nextIndex = (activeIndex + 1) % elements.length;

    if (index === activeIndex) {
      // Center/main card
      return "z-30 opacity-100 scale-100 translate-y-0";
    } else if (index === prevIndex || index === nextIndex) {
      // Slightly behind
      return "z-20 opacity-40 scale-90 translate-y-4 blur-[1px]";
    } else {
      // Far behind / hidden
      return "z-10 opacity-0 scale-75 translate-y-8 pointer-events-none";
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4">
      {/* Cards stack */}
      <div className="relative w-full max-w-md h-[340px] sm:h-[360px]">
        {elements.map((el, index) => (
          <div
            key={el.name}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${getPositionClasses(
              index
            )}`}
          >
            <div
              className={`w-full rounded-2xl bg-slate-900/90 border border-slate-700/70 ${el.accent} border-t-4 shadow-2xl shadow-slate-900/80 overflow-hidden`}
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={el.img}
                  alt={el.name.toLowerCase()}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-100 mb-1">
                  {el.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {el.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-200 hover:bg-slate-800 transition"
        >
          ◀ Prev
        </button>
        <div className="flex gap-1.5">
          {elements.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition ${
                idx === activeIndex
                  ? "bg-slate-100 w-4"
                  : "bg-slate-500/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-200 hover:bg-slate-800 transition"
        >
          Next ▶
        </button>
      </div>
    </section>
  );
};

export default NewsletterCard;
