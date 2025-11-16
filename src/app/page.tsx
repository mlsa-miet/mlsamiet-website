"use client";
import { SpotlightNewDemo } from "@/components/HeroSection";
import { MagicCardDemo } from "@/components/MagicCardDemo";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import Cards from "@/components/cards";
import { NewsletterCards } from "@/components/NewsletterCard";
import SponsorsSection from "@/components/sponsers";

const testimonials = [
  {
    quote:
      "A dynamic lead at MLSA MIET, passionate about AWS, development, and scalable applications, driving impactful// innovations.",
    name: "Pranav Bansal",
    designation: "Lead",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Pranav.jpg",
    social: {
      commudle: "https://www.commudle.com/users/yashg",
      linkedin: "https://www.linkedin.com/in/pranav-bansal-0b91412aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "yashg031124@gmail.com",
    },
  },
  {
 quote:
   "A visionary leader at MLSA MIET, proficient in Java and Python, blending AI expertise with social media enthusiasm. ",
    name: "Avni Gupta",
    designation: "Lead",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Avni.jpg",
    social: {
      commudle: "https://www.commudle.com/users/Muskanjain1702",
      linkedin: "https://www.linkedin.com/in/avni-gupta-186366281/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "muskanjain1702@gmail.com",
    },
  },
  {
   quote:
     "A cheerful and dedicated soul ensuring smooth events, skilled in Python, SQL, C, and DSA, making moments memorable",
    name: "Kushagra Sharma",
    designation: "Head Of Operations",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Kushagra.jpg",
    social: {
     commudle:"https://www.commudle.com/users/3e8b79ce2ba94f96e865be6a5fee0fc9",
     linkedin: "https://www.linkedin.com/in/kushagra-sharma-6b2347245/",
     email: "yagyanshsinghdeshwal@gmail.com",
    },
  },
  {
    quote:
      "A tech enthusiast scaling technology, leveraging web development, MERN stack, and DevOps to build seamless solutions. ",
    name: "Ankit Kumar",
    designation: "Tech Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Ankit.jpg",
    social: {
      commudle: "https://www.commudle.com/users/Suryanshpatwal1",
      linkedin: "https://www.linkedin.com/in/i-ankit01/",
      email: "suryanshpatwal@gmail.com",
    },
  },
  {
    quote:
      "A storyteller capturing impactful moments, with competitive programming skills with expertise in C, C++, and DSA.",
    name: "Aayushi",
    designation: "Tech Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/aayushi1.jpg", 
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/aayushi-nagar-688642279/",
email: "asit.upadhyay793@gmail.com",
    },
  },
  {
  quote:
    "A creative mind behind content, passionate about Blockchain, Java, and frontend, crafting engaging and tech-driven narratives.",
    name: "Geetanshi Goel",
    designation: "Content Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Geetanshi.jpg",
    social: {
    linkedin: "https://www.linkedin.com/in/geetanshi-goel-49ba5832b/",
    email: "tanushkakashyap506@gmail.com",
    commudle:
      "https://www.commudle.com/users/da6ac7497d07e91ee07ea2683c57a17c",
    },
  },
  {
   quote:
     "An expert bringing graphics to life, blending aesthetics with functionality, backed by a strong grip on frontend.",
    name: "Bhavya Gupta",
    designation: "Graphics Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Bhavya.jpg",
    social: {
     commudle: "https://www.commudle.com/users/anmolkumar001",
     linkedin: "https://www.linkedin.com/in/anmolkumar01/",
     email: "anmolkumar.cod01@gmail.com",
    },
  },
  {
    quote:
      "A skilled communicator and multitasker, leading PR and outreach while bringing a developer’s touch to collaborations.",
    name: "Ansh Goyal",
    designation: "Outreach Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/AnshGoyal.jpg",
    social: {
     commudle: "https://www.commudle.com/users/Pariagarwal",
     linkedin: "linkedin.com/in/anshgoyal15032007",
     email: "agarwalpari329@gmail.com",
    },
  },
  {
  quote:
    "A storyteller capturing impactful moments, with competitive programming skills with expertise in C, C++, and DSA.",
    name: "Praffullit Bhattacharya",
    designation: "Outreach Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Prafullit.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/prafullit-bhattacharya-9443b4306/",
email: "asit.upadhyay793@gmail.com",
    },
  },
  {
quote:
  "A storyteller capturing impactful moments, with competitive programming skills with expertise in C, C++, and DSA.",
    name: "Yash Goyal",
    designation: "Socials Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/YashGoyal.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/yash-goyal-b3bb8129a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
email: "asit.upadhyay793@gmail.com",
    },
  },
  {
   quote:
     "A storyteller capturing impactful moments, with competitive programming skills with expertise in C, C++, and DSA.",
    name: "Daksh Goswami",
    designation: "Workflow Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Daksh.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/daksh-goswami-9607712ba/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
email: "asit.upadhyay793@gmail.com",
    },
  },

  {
   quote:
     "A storyteller capturing impactful moments, with competitive programming skills with expertise in C, C++, and DSA.",
    name: "Tushar Tyagi",
    designation: "Workflow Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Tushar.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/tushar-tyagi-a3781a290/",
email: "asit.upadhyay793@gmail.com",
    },
  },
  {
   quote:
     "A storyteller capturing impactful moments, with competitive programming skills with expertise in C, C++, and DSA.",
    name: "Yojit Tyagi",
    designation: "Visuals Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/visuals2.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/yojit-tyagi-6a9429316/",
email: "asit.upadhyay793@gmail.com",
    },
  },
];

export default function Home() {
  return (
    <div>
      <SpotlightNewDemo />
      <Cards />
      <NewsletterCards />
      <MarqueeDemo />
      <AnimatedTestimonialsDemo
        testimonials={testimonials}
        title="MEET THE LEADERS"
      />
      <SponsorsSection/>
    </div>
  );
}
