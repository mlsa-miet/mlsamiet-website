"use client";
import { SpotlightNewDemo } from "@/components/HeroSection";
import { MagicCardDemo } from "@/components/MagicCardDemo";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import Cards from "@/components/cards";
import NewsletterCard from "@/components/NewsletterCard";
import SponsorsSection from "@/components/sponsers";

const testimonials = [
  {
    quote:
      "An emerging software developer and Beta MLSA focused on cloud technologies, application development, and scalable systems, driving impactful, student-led community initiatives.",
    name: "Pranav Bansal",
    designation: "Lead",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Pranav.jpg",
    social: {
      commudle: "https://www.commudle.com/users/yashg",
      linkedin: "https://www.linkedin.com/in/pranav-bansal-0b91412aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "work.pranav.bansal@gmail.com",
    },
  },
  {
 quote:
   "An MLSA Lead with a strong interest in Cloud and AI, driven by innovation, collaboration, and empowering students through real-world learning opportunities. ",
    name: "Avni Gupta",
    designation: "Lead",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Avni.jpg",
    social: {
      commudle: "https://www.commudle.com/users/Muskanjain1702",
      linkedin: "https://www.linkedin.com/in/avni-gupta-186366281/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "avnim9247@gmail.com",
    },
  },
  {
   quote:
     "An operations-focused leader ensuring seamless planning, coordination, and efficient execution of MLSA MIET initiatives.",
    name: "Kushagra Sharma",
    designation: "Head Of Operations",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Kushagra.jpg",
    social: {
     commudle:"https://www.commudle.com/users/3e8b79ce2ba94f96e865be6a5fee0fc9",
     linkedin: "https://www.linkedin.com/in/kushagra-sharma-6b2347245/",
     email: "work.kushagra25@gmail.com",
    },
  },
  {
    quote:
      "A tech enthusiast scaling technology, A full-stack developer and DSA enthusiast dedicated to building scalable solutions and fostering a strong hands-on technical culture within the community. web development, MERN stack, and DevOps to build seamless solutions. ",
    name: "Ankit Kumar",
    designation: "Tech Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Ankit.webp",
    social: {
      commudle: "https://www.commudle.com/users/Suryanshpatwal1",
      linkedin: "https://www.linkedin.com/in/i-ankit01/",
      email: "its.ankit.acc@gmail.com",
    },
  },
  {
    quote:
      "Enjoys working across both hardware and software, with experience in sensors, CanSat, hobby rocketry, and web technologies. Focused on DSA and Generative AI, contributing to MLSA MIET’s technical growth. ",
    name: "Aayushi",
    designation: "Tech Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/aayushi.jpg", 
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/aayushi-nagar-688642279/",
email: "moralaayushi@gmail.com",
    },
  },
  {
  quote:
    "An AI Engineer and technical writer leading content at MLSA MIET, crafting meaningful narratives and technical communication aligned with the community’s vision.",
    name: "Geetanshi Goel",
    designation: "Content Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Geetanshi.jpg",
    social: {
    linkedin: "https://www.linkedin.com/in/geetanshi-goel-49ba5832b/",
    email: "geetanshi.goel.cse.2023@miet.ac.in",
    commudle:
      "https://www.commudle.com/users/da6ac7497d07e91ee07ea2683c57a17c",
    },
  },
  {
   quote:
     "Graphics Lead at MLSA MIET, designing visually consistent and engaging creatives to strengthen the community’s digital presence. ",
    name: "Bhavya Gupta",
    designation: "Graphics Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Bhavya.jpg",
    social: {
     commudle: "https://www.commudle.com/users/anmolkumar001",
     linkedin: "https://www.linkedin.com/in/anmolkumar01/",
     email: "itsbgupta004@gmail.com",
    },
  },
  {
    quote:
      "Manages internal outreach at MLSA MIET, strengthening communication, volunteer engagement, and internal collaboration.",
    name: "Ansh Goyal",
    designation: "Outreach Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/AnshGoyal.jpg",
    social: {
     commudle: "https://www.commudle.com/users/Pariagarwal",
     linkedin: "linkedin.com/in/anshgoyal15032007",
     email: "anshgoyal15032007@gmail.com",
    },
  },
  {
  quote:
    "Leads external outreach at MLSA MIET by building collaborations, managing partnerships, and expanding the community's reach.",
    name: "Praffullit Bhattacharya",
    designation: "Outreach Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Prafullit.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/prafullit-bhattacharya-9443b4306/",
email: "bprafullit@gmail.com",
    },
  },
  {
quote:
  "Social Media Lead at MLSA MIET, managing digital outreach and engagement through strategic content and community storytelling.",
    name: "Yash Goyal",
    designation: "Socials Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/YashGoyal.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/yash-goyal-b3bb8129a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
email: "yash.goyal.csit.2023@miet.ac.in",
    },
  },
  {
   quote:
     "Workflow Manager at MLSA MIET, streamlining processes and coordinating tasks to ensure smooth execution of initiatives.",
    name: "Daksh Goswami",
    designation: "Workflow Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Daksh.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/daksh-goswami-9607712ba/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
email: "dakshgoswami1309@gmail.com",
    },
  },

  
  {
   quote:
     "A creative designer leading the visual identity of MLSA MIET through impactful design, brand consistency, and engaging visuals.",
    name: "Yojit Tyagi",
    designation: "Visuals Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/visuals2.jpg",
    social: {
commudle: "https://www.commudle.com/users/asitupadhyay",
linkedin: "https://www.linkedin.com/in/yojit-tyagi-6a9429316/",
email: "yojittyagi4@gmail.com",
    },
  },
];

export default function Home() {
  return (
    <div>
      <SpotlightNewDemo />
      <Cards />
      <NewsletterCard />
      <MarqueeDemo />
      <AnimatedTestimonialsDemo
        testimonials={testimonials}
        title="MEET THE LEADERS"
      />
      <SponsorsSection/>
    </div>
  );
}
