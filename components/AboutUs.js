import React from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft } from "@/keyframes";
import v from "../public/icons/q.mp4"; // Video source for SIP-related video

const AboutUs = () => {
  return (
    <Container className="mb-12 md:mb-44 scroll-mt-10" id="about">
      {/* About Us Section */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-2xl md:text-3xl mb-2">
          About Systematic Investment Plan (SIP)
        </h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 px-4 md:px-0 w-full md:w-[400px] mx-auto text-sm md:text-base">
            SIP is an investment strategy where you invest a fixed amount
            regularly in mutual funds or stocks. It helps you build wealth over
            time with the power of compounding, allowing you to achieve your
            financial goals without worrying about market fluctuations.
          </p>
        </Reveal>
      </div>

      {/* Video and Content Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Video Section */}
        <div className="w-full md:w-[44%] mb-6 md:mb-0 rounded-2xl overflow-hidden">
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div className="relative w-full h-[250px] md:h-[500px] lg:h-[700px]">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={v} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>
        </div>

        {/* Content Section */}
        <div className="w-full md:flex-1 md:ml-10 lg:ml-20 px-4 md:px-0">
          <h3 className="font-bold text-xl md:text-2xl mb-3">
            Why Choose SIP?
          </h3>
          <p className="mb-3 opacity-50 text-sm md:text-base">
            SIP allows you to invest in small amounts regularly, making it
            affordable for everyone. It&apos;s the most disciplined way to grow
            your wealth over time.
          </p>

          <p className="mb-3 opacity-50 text-sm md:text-base">
            With SIP, you can start investing with as little as ₹500 and
            increase your investments as your financial situation improves.
            It&apos;s the most disciplined way to grow your wealth over time.
          </p>

          <h3 className="font-bold text-xl md:text-2xl mb-3">
            Benefits of SIP
          </h3>
          <p className="mb-3 opacity-50 text-sm md:text-base">
            SIP provides a way to invest in mutual funds or stocks
            systematically. Some key benefits include:
          </p>
          <ul className="list-disc ml-6 opacity-50 mb-3 text-sm md:text-base">
            <li>
              Rupee Cost Averaging: Invest regularly regardless of market
              conditions.
            </li>
            <li>
              Power of Compounding: Earn returns on your returns over time.
            </li>
            <li>Flexibility: Modify the SIP amount as your income grows.</li>
          </ul>

          <h3 className="font-bold text-xl md:text-2xl mb-3">
            How SIP Helps You Achieve Your Goals
          </h3>
          <p className="mb-3 opacity-50 text-sm md:text-base">
            SIP is the best way to achieve long-term financial goals like buying
            a home, funding education, or retirement planning. The systematic
            nature of SIP ensures you stay on track and make consistent progress
            toward your goals.
          </p>
          <p className="mb-3 opacity-50 text-sm md:text-base">
            Whether you want to save for your child&apos;s education, buy a
            dream car, or simply build a retirement corpus, SIP makes it easy to
            manage your financial future.
          </p>

          <h3 className="font-bold text-xl md:text-2xl mb-3">
            Start Investing with SIP
          </h3>
          <p className="mb-3 opacity-50 text-sm md:text-base">
            No matter your age or financial background, SIP makes investing
            simple, flexible, and accessible. It&apos;s time to start planning
            for your future—one SIP at a time.
          </p>

          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter2}>
            <div className="flex justify-center md:block">
              <Button variant={"primary"} className="w-full md:w-auto">
                Start Your SIP Now
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
