// import React from "react";
// import { Button, Container } from ".";
// import { JackInTheBox, Reveal } from "react-awesome-reveal";
// import { fadeInDownShorter, fadeInLeft, fadeInUp } from "@/keyframes";
// import Image from "next/image";
// import car from "../public/icons/lo.webp";

// const Hero = () => {
//   return (
//     <Container className={"flex flex-col sm:flex-row mt-20 mb-32"}>
//       <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10">
//         <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
//           <h1 className="text-3xl lg:text-6xl font-bold mb-5">
//             SAPNO KO <br />
//             SKIP NAHI, <br />
//             SIP KARO!
//           </h1>
//         </Reveal>
//         <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
//           <p className="mb-8 opacity-50">
//             CSD Gaadi offers special deals on 2-wheelers, 4-wheelers, and
//             electric bikes for defence and army personnel. Get exclusive offers
//             and discounts tailored just for you.
//           </p>
//         </Reveal>

//         <div className="flex mb-10">
//           <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
//             <Button
//               isLink
//               href={"/#about"}
//               className={"mr-3"}
//               variant={"primary"}
//             >
//               Explore Vehicles
//             </Button>
//           </Reveal>
//           <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
//             <Button isLink href={"/#collections"}>
//               Get Yours Now
//             </Button>
//           </Reveal>
//         </div>
//         <div className="grid grid-cols-3 gap-3">
//           <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
//             <div>
//               <p className="font-bold text-2xl mb-1">50k+</p>
//               <p className="opacity-50 ">Vehicles Sold</p>
//             </div>
//           </Reveal>
//           <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
//             <div>
//               <p className="font-bold text-2xl mb-1">10k+</p>
//               <p className="opacity-50 ">Defence Personnel Served</p>
//             </div>
//           </Reveal>
//           <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
//             <div>
//               <p className="font-bold text-2xl mb-1">5k+</p>
//               <p className="opacity-50 ">Electric Bikes Sold</p>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//       <div className="flex-1 mt-14 sm:mt-0">
//         <JackInTheBox delay={200} triggerOnce>
//           <div className="relative w-full h-[400px] lg:h-[500px]">
//             <Image
//               layout="fill"
//               objectFit="contain"
//               objectPosition={"center"}
//               src={car} // Replace with actual car image path
//               alt="Car"
//             />
//           </div>
//         </JackInTheBox>
//       </div>
//     </Container>
//   );
// };

// export default Hero;

import React from "react";
import { Button, Container } from ".";
import { JackInTheBox, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "@/keyframes";
import Image from "next/image";
import sipImage from "../public/icons/lo.webp";

const Hero = () => {
  return (
    <Container className={"flex flex-col sm:flex-row mt-20 mb-32"}>
      <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10">
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className="text-3xl lg:text-6xl font-bold mb-5">
            SAPNO KO <br />
            SKIP NAHI, <br />
            SIP KARO!
          </h1>
        </Reveal>
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
          <p className="mb-8 opacity-50">
            Turn your dreams into reality with a Systematic Investment Plan.
            Start small, dream big, and grow your wealth with consistent and
            disciplined investments. Begin your journey today!
          </p>
        </Reveal>

        <div className="flex mb-10">
          <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
            <Button
              isLink
              href={"/#learn-more"}
              className={"mr-3"}
              variant={"primary"}
            >
              Learn More
            </Button>
          </Reveal>
          <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
            <Button isLink href={"/#get-started"}>
              Get Started
            </Button>
          </Reveal>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
            <div>
              <p className="font-bold text-2xl mb-1">1M+</p>
              <p className="opacity-50 ">Investors Empowered</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
            <div>
              <p className="font-bold text-2xl mb-1">$10B+</p>
              <p className="opacity-50 ">Investments Managed</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
            <div>
              <p className="font-bold text-2xl mb-1">20+</p>
              <p className="opacity-50 ">Years of Excellence</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex-1 mt-14 sm:mt-0">
        <JackInTheBox delay={200} triggerOnce>
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
              src={sipImage} // Replace with an appropriate SIP-related image
              alt="SIP Illustration"
            />
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Hero;
