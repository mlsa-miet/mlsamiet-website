"use client";

import { TextAnimate } from "@/components/magicui/text-animate";

const devGatheringImages = [
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261024/EVENT_PHOTO/DEV%20GATHERING/IMG_2529.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261056/EVENT_PHOTO/DEV%20GATHERING/IMG_4875.webp",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261028/EVENT_PHOTO/DEV%20GATHERING/IMG_3177.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261060/EVENT_PHOTO/DEV%20GATHERING/IMG_5020.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261031/EVENT_PHOTO/DEV%20GATHERING/IMG_3405.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261038/EVENT_PHOTO/DEV%20GATHERING/IMG_3452.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261046/EVENT_PHOTO/DEV%20GATHERING/IMG_4740.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261052/EVENT_PHOTO/DEV%20GATHERING/IMG_4778.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261065/EVENT_PHOTO/DEV%20GATHERING/IMG_5045.jpg",

]

const preMeetupImages = [
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261230/EVENT_PHOTO/PRE%20MEETUP/IMG_3332.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261232/EVENT_PHOTO/PRE%20MEETUP/IMG_3825.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261233/EVENT_PHOTO/PRE%20MEETUP/IMG_3845.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261237/EVENT_PHOTO/PRE%20MEETUP/IMG_4952.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261241/EVENT_PHOTO/PRE%20MEETUP/IMG_4977.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261241/EVENT_PHOTO/PRE%20MEETUP/IMG_4977.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261249/EVENT_PHOTO/PRE%20MEETUP/PXL_20250426_071627459.jpg",
]
const avasarImagesArray = [
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179833/EVENT_PHOTO/AVSAR/IMG_2276.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179836/EVENT_PHOTO/AVSAR/IMG_2280.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179846/EVENT_PHOTO/AVSAR/IMG_2283.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179856/EVENT_PHOTO/AVSAR/IMG_2286.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179872/EVENT_PHOTO/AVSAR/IMG_2288.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179890/EVENT_PHOTO/AVSAR/IMG_2289.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179934/EVENT_PHOTO/AVSAR/IMG_2291.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179942/EVENT_PHOTO/AVSAR/IMG_2313.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179947/EVENT_PHOTO/AVSAR/IMG_2314.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762179954/EVENT_PHOTO/AVSAR/IMG_2321.jpg",

];

const funMeetArray = [
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261068/EVENT_PHOTO/fun%20meet/IMG_0295.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261069/EVENT_PHOTO/fun%20meet/IMG_0297.jpg",
   "https://res.cloudinary.com/davfze0e8/image/upload/v1762261075/EVENT_PHOTO/fun%20meet/IMG_0318.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261072/EVENT_PHOTO/fun%20meet/IMG_0317.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261079/EVENT_PHOTO/fun%20meet/IMG_0331.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261082/EVENT_PHOTO/fun%20meet/IMG_0337.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261084/EVENT_PHOTO/fun%20meet/IMG_0339.jpg",

];

const introToMLSAArray = [
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261118/EVENT_PHOTO/intro%20mlsa/IMG_0366.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261123/EVENT_PHOTO/intro%20mlsa/IMG_0377.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261130/EVENT_PHOTO/intro%20mlsa/IMG_0391.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261137/EVENT_PHOTO/intro%20mlsa/IMG_0399.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261140/EVENT_PHOTO/intro%20mlsa/IMG_0447.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261142/EVENT_PHOTO/intro%20mlsa/IMG_0455_exported_1566.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261146/EVENT_PHOTO/intro%20mlsa/IMG_0468.jpg",

];

const prayasArray = [
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261155/EVENT_PHOTO/prayas/20240529_095734.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/a_90/v1762432930/20240529_100212_1_ufrias.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261163/EVENT_PHOTO/prayas/20240529_111933AMByGPSMapCamera.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261165/EVENT_PHOTO/prayas/20240529_120926PMByGPSMapCamera.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261166/EVENT_PHOTO/prayas/20240529_121006PMByGPSMapCamera.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261168/EVENT_PHOTO/prayas/IMG_3021.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261169/EVENT_PHOTO/prayas/IMG_3022.jpg",

];

const samaarambhArray = [
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261257/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0721.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261263/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0730.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261266/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0735.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261270/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0743.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261275/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0751.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261279/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0760.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261284/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0816.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261288/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0827.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261291/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0880.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1762261293/EVENT_PHOTO/SAMAARAMBH%202.0/IMG_0898.jpg",

];




const avasar2ImagesArray = [
 "https://res.cloudinary.com/davfze0e8/image/upload/v1763106390/IMG20250902145313_ta2f0z.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1763106432/IMG_8071_gydhlp.jpg",
 "https://res.cloudinary.com/davfze0e8/image/upload/v1763106303/IMG_7894_tbyl2j.jpg",
 "https://res.cloudinary.com/davfze0e8/image/upload/v1763108289/IMG-20250902-WA0049_yd3jxv.jpg",

 "https://res.cloudinary.com/davfze0e8/image/upload/v1763106395/IMG-20250902-WA0061_xjm8ir.jpg",
 "https://res.cloudinary.com/davfze0e8/image/upload/v1763108280/IMG_7925_duogx1.jpg",
   "https://res.cloudinary.com/davfze0e8/image/upload/v1763108288/IMG-20250902-WA0057_izyyj8.jpg",
  "https://res.cloudinary.com/davfze0e8/image/upload/v1763108283/IMG_8024_f84kr1.jpg",
 "https://res.cloudinary.com/davfze0e8/image/upload/v1763106382/IMG_8057_ave836.jpg",
 "https://res.cloudinary.com/davfze0e8/image/upload/v1763106395/IMG-20250902-WA0061_xjm8ir.jpg",

 "https://res.cloudinary.com/davfze0e8/image/upload/v1763106366/IMG_8056_gqepfk.jpg",





];

// Combine all images into one array

const Gallery = () => {
  return (
    <div id="media_section" className="px-4 sm:px-6 lg:px-8 py-8 lg:pt-20">



      <section id="devgathering">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center text-[#203A61] secondary">
          <TextAnimate>

            DevGathering 2k25
          </TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {devGatheringImages.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="premeetup">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center text-[#203A61] secondary">
          <TextAnimate>

            PRE HACKATHON MEETUP
          </TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {preMeetupImages.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="samaarambh">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center text-[#203A61] secondary">
          <TextAnimate>

            SAMAARAMBH 2.O
          </TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {samaarambhArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="intromlsa">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center  text-[#203A61] secondary">
          <TextAnimate>
            EXCLUSIVE REEL SHOOT

          </TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {introToMLSAArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="funmeet">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center  text-[#203A61] secondary">
          <TextAnimate>THE TEAM MEET</TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {funMeetArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="avasar">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-center  text-[#203A61]">
          <TextAnimate>

            AVSAR
          </TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {avasarImagesArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>





      <section id="prayas">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center  text-[#203A61]">
          <TextAnimate>
            PRAYAS

          </TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {prayasArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>



       <section id="avasar2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-center mt-10  text-[#203A61]">
          <TextAnimate>

            AVSAR 2.O
          </TextAnimate>
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {avasar2ImagesArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Gallery;
