// import React from "react";
// import { Container } from ".";
// import { Reveal } from "react-awesome-reveal";
// import { fadeInUp } from "@/keyframes";
// import Image from "next/image";

// const Sponsor = () => {
//   return (
//     <Container className={"mb-32"}>
//       {/* Heading for the Sponsor Section */}
//       <div className="text-center mb-10">
//         <h2 className="font-bold text-3xl text-white">Our Trusted Partners</h2>{" "}
//         {/* Heading */}
//       </div>

//       {/* Sponsor Logos */}
//       <div className="grid grid-cols-3 gap-5 items-center">
//         {/* Partner 1 - CSD Gaadi's vehicle partner */}
//         <Reveal keyframes={fadeInUp} duration={800} delay={200}>
//           <div className="flex flex-col items-center justify-center relative w-full h-[60px]">
//             <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
//               <Image
//                 layout="fill"
//                 objectFit="contain"
//                 objectPosition={"center"}
//                 src="/sponsor/d.gif" // Update to your relevant logo
//                 alt="tata-motors"
//               />
//             </div>
//             <p className="text-center mt-2 text-sm opacity-70">
//               We have many dreams, at any given time.
//             </p>{" "}
//             {/* Company Name */}
//           </div>
//         </Reveal>

//         {/* Partner 2 - Insurance Partner */}
//         <Reveal keyframes={fadeInUp} duration={800} delay={400}>
//           <div className="flex flex-col items-center justify-center relative w-full h-[60px]">
//             <div className="relative w-full h-[60px]">
//               <Image
//                 layout="fill"
//                 objectFit="contain"
//                 objectPosition={"center"}
//                 src="/sponsor/d.gif" // Update to your relevant logo
//                 alt="reliance-insurance"
//               />
//             </div>
//             <p className="text-center mt-2 text-sm opacity-70">
//               So many that we get overwhelmed
//             </p>{" "}
//             {/* Company Name */}
//           </div>
//         </Reveal>

//         {/* Partner 3 - Financing Partner */}
//         <Reveal keyframes={fadeInUp} duration={800} delay={600}>
//           <div className="flex flex-col items-center justify-center relative w-full h-[60px]">
//             <div className="relative w-full h-[60px]">
//               <Image
//                 layout="fill"
//                 objectFit="contain"
//                 objectPosition={"center"}
//                 src="/sponsor/s.gif" // Update to your relevant logo
//                 alt="hdfc-finance"
//               />
//             </div>
//             <p className="text-center mt-2 text-sm opacity-70">
//               And start thinking: Kaunsa Sapna Skip Karun?
//             </p>{" "}
//             {/* Company Name */}
//           </div>
//         </Reveal>
//       </div>
//     </Container>
//   );
// };

// export default Sponsor;

import React from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "@/keyframes";
import Image from "next/image";

const Sponsor = () => {
  return (
    <Container className={"mb-32"}>
      {/* Heading for the Sponsor Section */}
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl text-white">
          Plan Your Dreams with SIP
        </h2>
      </div>

      {/* Sponsor Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center mb-10">
        {/* Partner 1 */}
        <Reveal keyframes={fadeInUp} duration={800} delay={200}>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden">
              <Image
                layout="fill"
                objectFit="cover"
                src="/sponsor/d.gif" // Update to your relevant logo
                alt="tata-motors"
              />
            </div>
            <p className="text-center mt-4 text-sm opacity-70">
              We have many dreams, at any given time.
            </p>
          </div>
        </Reveal>

        {/* Partner 2 */}
        <Reveal keyframes={fadeInUp} duration={800} delay={400}>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden">
              <Image
                layout="fill"
                objectFit="cover"
                src="/sponsor/c.gif" // Update to your relevant logo
                alt="reliance-insurance"
              />
            </div>
            <p className="text-center mt-4 text-sm opacity-70">
              So many that we get overwhelmed.
            </p>
          </div>
        </Reveal>

        {/* Partner 3 */}
        <Reveal keyframes={fadeInUp} duration={800} delay={600}>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden">
              <Image
                layout="fill"
                objectFit="cover"
                src="/sponsor/s.gif" // Update to your relevant logo
                alt="hdfc-finance"
              />
            </div>
            <p className="text-center mt-4 text-sm opacity-70">
              And start thinking: Kaunsa Sapna Skip Karun?
            </p>
          </div>
        </Reveal>
      </div>

      {/* Additional SIP Content */}
      <div className="text-center  mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Well… you may not need to.
        </h2>
        <p className="text-white opacity-80 mb-4">
          Simply plan them all systematically with SIP.
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Systematic Investment Plan
        </h3>
        <p className="text-white opacity-80 mt-2">Jitne Sapne, Utni SIP.</p>
        <p className="text-white opacity-80 mt-2">Jaise Sapne, waisi SIP.</p>
      </div>

      {/* Mr. SIP Banner */}
      <Reveal keyframes={fadeInUp} duration={800} delay={200}>
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            layout="fill"
            objectFit="contain"
            src="/sponsor/a.webp" // Replace with the path to your image
            alt="Mr SIP Banner"
          />
        </div>
      </Reveal>
    </Container>
  );
};

export default Sponsor;
