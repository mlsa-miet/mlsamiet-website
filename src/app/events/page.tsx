"use client";

import { EventLayout } from "@/components/EventLayout";

export default function Event() {
  const eventData = [
     {
      title: "SAMAARAMBH 3.O",
      body: " Samaarambh 3.O, the flagship event of MLSA MIET, was a remarkable celebration of technology, community, and innovation, hosted at the Microsoft Office, Gurugram. With 1200+ registrations and 180+ enthusiastic participants, the event truly reflected the growing strength of our 6000+ member community. Featuring engaging sessions like “Build Your First AI Agent”, explorations of the Fetch.Ai ecosystem, and insightful discussions on the future of web3 by Endless Domains. Samaarambh brought together inspiring voices from across the tech space, including Shubham Shakti, Dev Chauhan, and Sarthak Jain. A key highlight of the event was the product launch of Mailen.AI, adding an exciting dimension of real-world innovation to the experience. With the support of 20+ industry partners, the event created a vibrant platform for learners to explore emerging technologies, collaborate on ideas, and experience the spirit of community-driven growth. Samaarambh 3.O wasn’t just an event — it was a gateway to innovation and a milestone in MLSA MIET’s journey of impact.",
      button: "Explore Samaarambh 3.O",
      src: "/MLSA_WEBSITE/event_photos/samaarambh.jpeg",
      sectionId: "samaarambh3",
    },
     {
      title: "SalesForce session",
      body: "The Build Your Agent Workshop on Salesforce Agentforce, organized by MLSA MIET on 3rd November 2025, was thoughtfully designed to provide students with an immersive and hands-on exposure to cloud and AI-driven technologies. Led by Mr. Sarthak Jain, the session enabled participants to actively build and customize their own intelligent AI agents while working on real-world implementations using Salesforce Agentforce. Through guided demonstrations, interactive tasks, and practical exercises, students gained a strong understanding of automation, cloud-based workflows, and modern AI solutions. This event was not just a workshop—it was a premium learning experience that bridged the gap between theory and practice, empowering participants with industry-relevant skills, practical insights, and meaningful technical exposure aligned with current technological trends.",
      button: "Explore Selsforce",
      src: "/MLSA_WEBSITE/event_photos/selesforce.jpeg",
      sectionId: "SalesForceEventArray",
    },
      {
      title: "Avsar 2.0",
      body: "AVSAR 2.0 is a flagship initiative of Microsoft Learn Student Ambassadors (MLSA) MIET, dedicated to empowering students through structured learning, mentorship, and collaborative growth. Designed as a platform where innovation meets leadership, AVSAR encourages young minds to explore technology, build industry-relevant skills, and become confident professionals within a thriving tech community. AVSAR 2.0 – The Orientation marked an important milestone by formally welcoming new members and introducing first-year students to the vision and journey of MLSA MIET. Featuring an insightful keynote by Rohit Yadav on “How to Get Into Microsoft,” reflections on the community’s journey by Kushagra (HOO, MLSA MIET), and an engaging interactive quiz led by Avni, the event reflected MLSA MIET’s continued commitment to nurturing talent and enabling growt",
        button: "Explore Avsar 2.0 ",
      src: "/MLSA_WEBSITE/event_photos/avsar.jpeg",
      sectionId: "avasar-2",
    },
    { 
      title: "DevGathering 2K25",
      body: "DevGathering 2K25, the flagship 32-hour hackathon of MLSA MIET, was a spectacular celebration of innovation, teamwork, and creativity! 🚀 Hosted at MIET Meerut, the event witnessed 200+ participants across 55 shortlisted teams battling it out to solve real-world challenges through code and design. The Top 10 teams pitched before an esteemed jury from Microsoft, GitHub, and D.E. Shaw, showcasing cutting-edge solutions with passion and grit. Winners were crowned, trophies and goodies awarded, and memories created but beyond the prizes, every participant left with skills, confidence, and the spirit of collaboration. ✨ DevGathering 2K25 wasn’t just a hackathon, it was a movement of creators, doers, and dreamers. 💡",
      button: "Explore DevGathering 2k25",
      src: "https://res.cloudinary.com/davfze0e8/image/upload/v1762261056/EVENT_PHOTO/DEV%20GATHERING/IMG_4875.webp",
      sectionId: "devgathering",
    },
    {
      title: "PRE HACKATHON MEETUP",
      body: "At the exclusive Pre-Hackathon Meetup, we ignited the spark for DevGathering 2K25! Hosted at the Microsoft India Development Centre, this event brought together 100+ handpicked innovators from over 800+ registrations. After deep dives into the world of AI Agents with industry experts, the energy peaked during our Ideathon, where the best ideas won a golden ticket direct entry to the main hackathon. The day concluded with a monumental reveal: the official dates and an incredible $100,000 prize pool for DevGathering 2K25, leaving everyone inspired for the ultimate challenge. 🌟",
      button: "Explore Pre Meetup",
      src: "https://res.cloudinary.com/davfze0e8/image/upload/v1762261252/EVENT_PHOTO/PRE%20MEETUP/PXL_20250426_071803221.MP.webp",
      sectionId: "premeetup",
    },
    {
      title: "SAMAARAMBH 2.O",
      body: "It was more than just an industrial visit—it was an unforgettable experience filled with learning, laughter, and connections. From exploring Azure AI and AI Agents to fun challenges and interactive sessions, every moment was packed with excitement. With 1100+ registrations and 180+ attendees, the energy was truly electrifying! The day ended on a heartfelt note, with gratitude for our incredible speakers and partners, leaving everyone inspired and motivated for the journey ahead. 💙🚀",
      button: "Explore Samaarambh 2.O",
      src: "https://res.cloudinary.com/davfze0e8/image/upload/v1762261322/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_1001.jpg",
      sectionId: "samaarambh",
    },
    {
      title: "EXCLUSIVE REEL SHOOT",
      body: "The MLSA is designed to empower students by providing them with opportunities to explore Microsoft technologies, enhance their skills, and connect with a global network of tech enthusiasts. It’s a space where learning meets leadership, offering mentorship, hands-on experiences, and exclusive resources to help students grow.  Whether you're here to dive into new tech, collaborate with like-minded peers, or drive meaningful change, MLSA is where opportunities turn into reality! 🚀",
      button: "Explore The Reel Shoot",
      src: "https://res.cloudinary.com/davfze0e8/image/upload/v1762261123/EVENT_PHOTO/intro%20mlsa/IMG_0377.jpg",
      sectionId: "intromlsa",
    },
    {
      title: `TEAM MEET`,
      body: "It was all about building connections and creating a welcoming space where volunteers could engage freely with each other and the core team. Through open conversations and interactive activities, the event encouraged a sense of belonging and camaraderie. It wasn’t just about meeting new people—it was about strengthening teamwork, fostering collaboration, and laying the foundation for a more connected MLSA community! 🌟",
      button: `Explore The Team Meet`,
      src: "https://res.cloudinary.com/davfze0e8/image/upload/v1762261082/EVENT_PHOTO/fun%20meet/IMG_0337.jpg",
      sectionId: "funmeet",
    },
    {
      title: "AVSAR",
      body: "MLSA Orientation Session was an interactive and engaging event designed to welcome both new and existing members into the MLSA community. The session highlighted the vision, opportunities, and impact of MLSA, giving attendees a clear understanding of what lies ahead. With discussions on community initiatives, upcoming events, and ways to get involved, the event fostered a sense of excitement and collaboration. It set the perfect tone for the journey ahead, encouraging participants to explore, learn, and grow within the MLSA ecosystem.",
      button: "Explore Avsar",
      src: "https://res.cloudinary.com/davfze0e8/image/upload/v1762261009/EVENT_PHOTO/AVSAR/PXL_20241014_105027481.jpg",
      sectionId: "avasar",
    }, 
    {
      title: "PRAYAS",
      body: "It was a remarkable initiative aimed at bridging the gap between academia and industry by connecting students with MIET’s esteemed alumni. The event featured insightful speaker sessions, hands-on coding challenges, and interactive quizzes, fostering learning and engagement. Industry experts shared their journeys, career guidance, and the latest tech trends, leaving students inspired and well-equipped for their future! 🚀",
      button: "Explore Prayas",
      src: "https://res.cloudinary.com/davfze0e8/image/upload/v1762261228/EVENT_PHOTO/prayas/PXL_20240529_074308463.jpg",
      sectionId: "prayas",
    },

    // ...other items
  ];

  return (
    <div className="min-h-full bg-gray-50">
      <EventLayout items={eventData} />
    </div>
  );
}
