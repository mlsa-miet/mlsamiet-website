// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "motion/react";

// import { useState } from "react";

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     title: string;
//     description: string;
//     link: string;
//   }[];
//   className?: string;
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
//         className
//       )}
//     >
//       {items.map((item, idx) => (
//         <a
//           href={item?.link}
//           key={item?.link}
//           className="relative group  block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-black dark:bg-slate-900/[0.8] block  rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   transition: { duration: 0.15 },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.2 },
//                 }}
//               />
//             )}
//           </AnimatePresence>
//           <Card>
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//           </Card>
//         </a>
//       ))}
//     </div>
//   );
// };

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-Zinc-700 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };
// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "motion/react";

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     title: string;
//     description: string;
//     link: string;
//   }[];
//   className?: string;
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 gap-8",
//         className
//       )}
//     >
//       {items.map((item, idx) => (
//         <a
//           href={item.link}
//           key={item.link}
//           className="relative group block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 layoutId="hoverBackground"
//                 className="absolute inset-0 h-full w-full bg-blue-50 rounded-3xl shadow-md"
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1, transition: { duration: 0.25 } }}
//                 exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
//               />
//             )}
//           </AnimatePresence>

//           <Card>
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//           </Card>
//         </a>
//       ))}
//     </div>
//   );
// };

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-sm group-hover:shadow-blue-100 hover:shadow-lg",
//         className
//       )}
//     >
//       <div className="relative z-10 p-3">{children}</div>
//     </div>
//   );
// };

// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4
//       className={cn(
//         "text-gray-800 font-semibold tracking-wide text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300",
//         className
//       )}
//     >
//       {children}
//     </h4>
//   );
// };

// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };
//---------------

// "use client";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "motion/react";
// import { Linkedin, Github, Globe } from "lucide-react";

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     title: string;
//     description: string;
//     image: string;
//     socials: {
//       linkedin?: string;
//       github?: string;
//       website?: string;
//     };
//   }[];
//   className?: string;
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 gap-12",
//         className
//       )}
//     >
//       {items.map((item, idx) => (
//         <div
//           key={item.title}
//           className="relative group block p-3 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 layoutId="hoverBackground"
//                 className="absolute inset-0 h-full w-full bg-blue-50 rounded-3xl shadow-md"
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1, transition: { duration: 0.25 } }}
//                 exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
//               />
//             )}
//           </AnimatePresence>

//           <Card>
//             <CardImage src={item.image} alt={item.title} />
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//             <CardSocials socials={item.socials} />
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

// // 📦 Card Container
// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => (
//   <div
//     className={cn(
//       "rounded-2xl h-[420px] w-full overflow-hidden bg-white border border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-sm group-hover:shadow-blue-100 hover:shadow-lg flex flex-col items-center text-center",
//       className
//     )}
//   >
//     <div className="relative z-10 p-4 flex flex-col items-center justify-center">
//       {children}
//     </div>
//   </div>
// );

// // 🖼️ Alumni Image
// export const CardImage = ({ src, alt }: { src: string; alt: string }) => (
//   <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-md mb-4">
//     <img
//       src={src}
//       alt={alt}
//       className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//     />
//   </div>
// );

// // 🧾 Name (Title)
// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => (
//   <h4
//     className={cn(
//       "text-gray-800 font-semibold tracking-wide text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300",
//       className
//     )}
//   >
//     {children}
//   </h4>
// );

// // 🗒️ Description
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => (
//   <p
//     className={cn(
//       "text-gray-600 leading-relaxed text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300",
//       className
//     )}
//   >
//     {children}
//   </p>
// );

// // 🌐 Social Links
// export const CardSocials = ({
//   socials,
// }: {
//   socials: { linkedin?: string; github?: string; website?: string };
// }) => (
//   <div className="flex gap-4 justify-center mt-2">
//     {socials.linkedin && (
//       <a
//         href={socials.linkedin}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//       >
//         <Linkedin className="w-5 h-5" />
//       </a>
//     )}
//     {socials.github && (
//       <a
//         href={socials.github}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
//       >
//         <Github className="w-5 h-5" />
//       </a>
//     )}
//     {socials.website && (
//       <a
//         href={socials.website}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
//       >
//         <Globe className="w-5 h-5" />
//       </a>
//     )}
//   </div>
// );

//------------------

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
      "rounded-2xl h-[460px] w-full overflow-hidden bg-white border border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-sm group-hover:shadow-blue-100 hover:shadow-lg flex flex-col items-center text-center",
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
    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
  >
    <Commudle />
  </a>
)}

  </div>
);
