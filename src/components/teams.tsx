import { TextAnimate } from "./magicui/text-animate";
import { TeamMember } from "./ui/team-member";

const technicalTeam = [
  {
    name: "Ankit Kumar",
    imageUrl: "/MLSA_WEBSITE/Domain_Heads_photo/Ankit.webp",
  },
  {
    name: "Aayushi Nagar",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/aayushi1.webp",
  },
  {
    name: "Rakshit Shekhawat",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Rakshit_shekhawat_Technical.jpg",
  },
  {
    name: "Manu Chauhan",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Manu Chauhan.jpg",
  },
   {
    name: "Vishvdeep Pundir",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Vishvdeep Pundir .jpg",
  },
   {
    name: "Mohd Faishal",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Mo Faisal_Technical.jpg",
  },
   {
    name: "Vani Chaudhary",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Vani Chaudhary_Technical.jpg",
  },
    {
    name: "Shant Chauhan",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/ShantChauhan_Technical.jpeg",
  },
    {
    name: "Rudra Chaudhary",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Rudra Chaudhary_Technical.jpg",
  },
];

const graphicsTeam = [
  {
    name: "Bhavya Gupta",
    imageUrl: "/MLSA_WEBSITE/Domain_Heads_photo/Bhavya.webp",

  },
  {
    name: "Arpit Sharma",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/Arpit Kumar Sharma_Graphics .jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Anushka Garg",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/Anushka Garg_Graphics .jpg",
    imagePosition: "top" as const,
  },
  {
    name: "Rupal Agrawal",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/Rupal Agrawal_Graphics.jpg",
  },
  {
    name: "Tanu Chauhan",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/Tanu Chauhan_Graphics .jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Dherya Pratap Singh",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Graphic team/IMG_20251103_171049.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Satyam Sharma",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/Satyam Sharma_Graphics.heic",
  },
];

const contentTeam = [
  {
    name: "Geetanshi Goel",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/Geetanshi.webp",
  },
 
  {
    name: "Pari",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/IMG_20250211_172808.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Pranav Raghav",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/Pranav Raghav_content.jpg",
  },
  {
    name: "Srishti",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/Srishti .jpg",
  },
   {
    name: "Bhumi Arora",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/Bhumi_Content.jpg",
  },
   {
    name: "Divyanshi Chaudhray",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/DivyanshiChaudhary_content.jpg",
  },
];

const eventTeam = [
  {
    name: "Kushagra Sharma",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/Kushagrasharma.webp",
  },
  {
    name: "Chirag",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Chirag_Events.jpg",
  },
  {
    name: "Arjun Sharma",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/IMG-20251110-WA0047.jpg",
  },
  {
    name: "Vaibhavi Chaudhary",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Vaibhavi Event.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Himani Jain",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Himani Jain_Event.jpg",
  },
  {
    name: "Saniya",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Saniya_events.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Shivam Sharma",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/ShivamSharma_Eventmanagement.png",
  },
  {
    name: "Saptak Gupta",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Saptak gupta_Event.jpg",
  },
  {
    name: "Aishwarya Gupta",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Aishwarya Gupta_Events.jpg",
  },
];

const prTeam = [
  {
    name: "Prafullit Bhattacharya",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/Prafullit.webp",
  },
  {
    name: "Ansh Goyal",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/PR team/AnshGoyal.webp",
  },
{
  name: "Deepika Panwar",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/DeepikaPanwar_PublicRelationsAndOutreach.JPG",
    imagePosition: "top" as const,

  },
{
  name: "Tushar Yadav",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/IMG_0524.PNG",
  },
{
  name: "Mahak Rana",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/IMG-2051107-WA0021.jpg",

  },
{
  name: "Akshara Agarwal",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/AksharaAgarwal_PR&Outreach.jpg",
    imagePosition: "top" as const,

  },
{
  name: "Priyanshi Jindal",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/PriyanshiJindal_PR and Outreach.jpg",
  },
  {
  name: "Gaurika Dogra",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/Gaurika Dogra_PR&Outreach .jpg",
  },
  {
  name: "Divyanshi",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/Divyanshi_pr& outreach.jpg",
  },
];

const socialTeam = [
  {
    name: "Yash Goyal",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/YashGoyal.webp",
  },
  {
    name: "Prashant",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/Prashant_Social.jpg",
  },
  {
    name: "Hitanshi Goswami",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/Hitanshi_socials.jpg",
  },
  {
    name: "Akshara Gupta",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/Akshara Gupta_Socials.png",
  },
  {
    name: "Samiya Shariq",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/SamiyaShariq_Socials.jpg",
  },
];

const visualTeam = [
  {
    name: "Yojit Tyagi",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/YojitTyagi.webp",
  },
  {
    name: "Vartika Chauhan",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/IMG_20251110_192208.jpg",
  },
  {
    name: "Aryan Choudhary",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/IMG_1243.HEIC",
  },
  {
    name: "Vansh Yadav",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/Vansh Yadav _Visuals.jpg",
  },
];

const workflowTeam = [
  {
    name: "Daksh Goswami",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/Daksh.webp",
  },
  {
    name: "Shaurya Pratap",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/workflow  team/Shaurya Pratap Gaur_Workflow.jpg",
  },
  {
    name: "Tannu Kumari",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/workflow team/Tannu kumari_workflow.jpg",
  },
  {
    name: "Naina Yadav",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/workflow team/Naina Yadav_workflow.jpg",
  },
  {
    name: "Lakshya Agarwal",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/workflow team/Lakshya Agarwal_Workflow.jpg",
  },
  {
    name: "Yug Jain",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/workflow team/Yug Jain_workflow.jpg",
  },
];

export function Teams() {
  return (
    <div className="container mx-auto px-20 py-16">
      <h1 className="text-2xl md:text-5xl text-center mb-16 text-[#203A61] primary">
        <TextAnimate>
          THE MINDS BEHIND THE MISSION
        </TextAnimate>
      </h1>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Content Creation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {contentTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Graphics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {graphicsTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Socials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Event Operations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {eventTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Public Relations & Outreach</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {prTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Technical Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technicalTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Visuals Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {visualTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Workflow & Management</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {workflowTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}
