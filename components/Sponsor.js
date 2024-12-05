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
        <h2 className="font-bold text-3xl text-white">Our Trusted Partners</h2>{" "}
        {/* Heading */}
      </div>

      {/* Sponsor Logos */}
      <div className="grid grid-cols-3 gap-5 items-center">
        {/* Partner 1 - CSD Gaadi's vehicle partner */}
        <Reveal keyframes={fadeInUp} duration={800} delay={200}>
          <div className="flex flex-col items-center justify-center relative w-full h-[60px]">
            <div className="relative w-full h-[60px]">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                src="/sponsor/t.jpg" // Update to your relevant logo
                alt="tata-motors"
              />
            </div>
            <p className="text-center mt-2 text-sm opacity-70">Tata Motors</p>{" "}
            {/* Company Name */}
          </div>
        </Reveal>

        {/* Partner 2 - Insurance Partner */}
        <Reveal keyframes={fadeInUp} duration={800} delay={400}>
          <div className="flex flex-col items-center justify-center relative w-full h-[60px]">
            <div className="relative w-full h-[60px]">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                src="/sponsor/i.jpg" // Update to your relevant logo
                alt="reliance-insurance"
              />
            </div>
            <p className="text-center mt-2 text-sm opacity-70">
              Reliance Insurance
            </p>{" "}
            {/* Company Name */}
          </div>
        </Reveal>

        {/* Partner 3 - Financing Partner */}
        <Reveal keyframes={fadeInUp} duration={800} delay={600}>
          <div className="flex flex-col items-center justify-center relative w-full h-[60px]">
            <div className="relative w-full h-[60px]">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                src="/sponsor/h.webp" // Update to your relevant logo
                alt="hdfc-finance"
              />
            </div>
            <p className="text-center mt-2 text-sm opacity-70">HDFC Finance</p>{" "}
            {/* Company Name */}
          </div>
        </Reveal>
      </div>
    </Container>
  );
};

export default Sponsor;
