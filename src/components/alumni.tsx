

"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
 import { TextAnimate } from "./magicui/text-animate";

export function Alumni() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      
      <h1 className="text-2xl md:text-5xl text-center mb-16 text-[#203A61] primary">
        <TextAnimate>
         THE LEGACY OF LEADERSHIP
        </TextAnimate>
      </h1>
      <HoverEffect items={alumniData} />
    </section>
  );
}

export const alumniData = [
  {
    title: "Yash Gupta",
    description:
      "Lead, passionate about AWS, development, and scalable applications.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/yash1.JPG",
    socials: {
      linkedin: "https://www.linkedin.com/in/yash-gupta-b59877280/",
      email: "yashg031124@gmail.com",
      commudle: "https://www.commudle.com/users/yashg",
    },
  },
  {
    title: "Muskan Jain",
    description:
      "Lead, proficient in Java and Python, blending AI with creativity.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/MUSKAN2.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/muskanjain1702/",
      email: "muskanjain1702@gmail.com",
      commudle: "https://www.commudle.com/users/Muskanjain1702",
    },
  },
  {
    title: "Yagyansh Singh Deshwal",
    description:
      "Head of Operations, skilled in Python, SQL, and event coordination.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/yagyansh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/yagyansh-singh-deshwal/",
      email: "yagyanshsinghdeshwal@gmail.com",
      commudle:
        "https://www.commudle.com/users/3e8b79ce2ba94f96e865be6a5fee0fc9",
    },
  },
  {
    title: "Suryansh",
    description:
      "Tech Head, leveraging MERN stack and DevOps for seamless solutions.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/suryansh.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/suryansh-patwal/",
      email: "suryanshpatwal@gmail.com",
      commudle: "https://www.commudle.com/users/Suryanshpatwal1",
    },
  },
  {
    title: "Tanushka Kashyap",
    description:
      "Content Head, passionate about Blockchain, Java, and frontend design.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/tanushka.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/tanushka-kashyap-3b5a28211/",
      email: "tanushkakashyap506@gmail.com",
      commudle:
        "https://www.commudle.com/users/da6ac7497d07e91ee07ea2683c57a17c",
    },
  },
  {
    title: "Anmol Kumar",
    description:
      "Graphics Head, blending aesthetics and frontend to build great visuals.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/anmol.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/anmolkumar01/",
      email: "anmolkumar.cod01@gmail.com",
      commudle: "https://www.commudle.com/users/anmolkumar001",
    },
  },
  {
    title: "Pari Agarwal",
    description:
      "Outreach Head, skilled communicator bringing developer’s touch to PR.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/Pari.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/pari-agarwal-3153bb290/",
      email: "agarwalpari329@gmail.com",
      commudle: "https://www.commudle.com/users/Pariagarwal",
    },
  },
  {
    title: "Asit Upadhyay",
    description:
      "Media Head, storyteller capturing moments with C++ and DSA skills.",
    image: "/MLSA_WEBSITE/Domain_Heads_photo/ASIT_UPADHYAY.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/asit-upadhyay-5b469a207/",
      email: "asit.upadhyay793@gmail.com",
      commudle: "https://www.commudle.com/users/asitupadhyay",
    },
  },
];


