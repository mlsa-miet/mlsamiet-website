

"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Commudle } from "@/components/icons/Commudle";


// Custom Commudle SVG icon
const CommudleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M12 2C6.477 2 2 6.486 2 12.011c0 5.52 4.477 9.989 10 9.989s10-4.47 10-9.989C22 6.486 17.523 2 12 2zm0 1.6c4.637 0 8.4 3.764 8.4 8.411 0 4.64-3.763 8.389-8.4 8.389s-8.4-3.749-8.4-8.389c0-4.647 3.763-8.411 8.4-8.411zm0 3.2c-.885 0-1.6.715-1.6 1.6 0 .883.715 1.6 1.6 1.6.884 0 1.6-.717 1.6-1.6 0-.885-.716-1.6-1.6-1.6zm0 3.6a1.6 1.6 0 0 0-1.6 1.6v6.4a1.6 1.6 0 1 0 3.2 0v-6.4a1.6 1.6 0 0 0-1.6-1.6z" />
  </svg>
);

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    image: string;
    socials: {
      linkedin?: string;
      email?: string;
      commudle?: string;
    };
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 gap-14",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-3 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                layoutId="hoverBackground"
                className="absolute inset-0 h-full w-full bg-blue-50 rounded-3xl shadow-md"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.25 } }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardImage src={item.image} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardSocials socials={item.socials} />
          </Card>
        </div>
      ))}
    </div>
  );
};

// 🧱 Card Layout
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "rounded-2xl h-[400px] w-full overflow-hidden bg-white border border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-sm group-hover:shadow-blue-100 hover:shadow-lg flex flex-col items-center text-center",
      className
    )}
  >
    <div className="relative z-10 p-4 flex flex-col items-center justify-center">
      {children}
    </div>
  </div>
);

// 🖼️ Alumni Photo
export const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-100 shadow-md mb-4">
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
    />
  </div>
);

// 🧾 Name
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h4
    className={cn(
      "text-gray-800 font-semibold tracking-wide text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300",
      className
    )}
  >
    {children}
  </h4>
);

// 🧠 Designation
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p
    className={cn(
      "text-gray-600 leading-relaxed text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300 px-3",
      className
    )}
  >
    {children}
  </p>
);

// 🌐 Socials (LinkedIn, Email, Commudle)
export const CardSocials = ({
  socials,
}: {
  socials: { linkedin?: string; email?: string; commudle?: string };
}) => (
  <div className="flex gap-5 justify-center mt-3">
    {socials.linkedin && (
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    )}
    {socials.email && (
      <a
        href={`mailto:${socials.email}`}
        className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
      >
        <Mail className="w-6 h-6" />
      </a>
    )}
   {socials.commudle && (
  <a
    href={socials.commudle}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:scale-110"
  >
    <img
      src="/commudle.svg"
      alt="Commudle"
      className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 hover:text-blue-800"
    />
  </a>
)}


  </div>
);
