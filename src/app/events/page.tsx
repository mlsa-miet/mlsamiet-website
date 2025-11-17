"use client";

import { EventLayout } from "@/components/EventLayout";

export default function Event() {
  const eventData = [
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
