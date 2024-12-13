import React, { useState, useRef, useEffect } from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft } from "@/keyframes";
import CarCalculator from "./Calculator/CarCalculator";
import EducationCalculator from "./Calculator/EducationCalculator";
import WealthBuilderCalculator from "./Calculator/WealthBuilder";
import RetirementCalculator from "./Calculator/RetirementCalculator";
import HolidayCalculator from "./Calculator/DreamHoliday";
import CustomDreamCalculator from "./Calculator/CustomDream";
import WeddingCalculator from "./Calculator/DestinationWedding";
import HomeCalculator from "./Calculator/DreamHome";

const Collections = () => {
  const [listBtn, setListBtn] = useState([
    { name: "Dream Car", status: true, delay: 100 },
    { name: "Child's Education", status: false, delay: 200 },
    { name: "Wealth Builder", status: false, delay: 300 },
    { name: "Retirement", status: false, delay: 400 },
    { name: "Dream Holiday", status: false, delay: 500 },
    { name: "Custom Dream", status: false, delay: 600 },
    { name: "Destination Wedding", status: false, delay: 700 },
    { name: "Dream Home", status: false, delay: 800 },
  ]);

  // Set initial active section to "Dream Car" on component mount
  const [activeSection, setActiveSection] = useState("Dream Car");

  // Refs for each section
  const carCalculatorRef = useRef(null);
  const educationRef = useRef(null);
  const wealthRef = useRef(null);
  const retirementRef = useRef(null);
  const holidayRef = useRef(null);
  const customDreamRef = useRef(null);
  const weddingRef = useRef(null);
  const homeRef = useRef(null);

  const refs = {
    "Dream Car": carCalculatorRef,
    "Child's Education": educationRef,
    "Wealth Builder": wealthRef,
    Retirement: retirementRef,
    "Dream Holiday": holidayRef,
    "Custom Dream": customDreamRef,
    "Destination Wedding": weddingRef,
    "Dream Home": homeRef,
  };

  const handleClickMenu = (name) => {
    const filterBtn = listBtn.map((item) => ({
      ...item,
      status: item.name === name,
    }));
    setListBtn(filterBtn);

    setActiveSection(name); // Set the active section
    refs[name]?.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to the respective section
  };

  return (
    <Container id="collections" className={"mb-44 scroll-mt-10"}>
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Start Planning Now</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full sm:w-[400px] mx-auto">
            All your dreams are possible if you plan for them systematically. Ab
            sapno ko skip nahi, SIP karo. Use our customized SIP Calculators to
            find the amount you need to invest for your dreams.
          </p>
        </Reveal>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
        {listBtn.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInLeft}
            duration={300}
            delay={item.delay}
          >
            <Button
              onClick={() => handleClickMenu(item.name)}
              variant={item.status ? "primary" : ""}
              className="w-full h-12 flex items-center justify-center transition duration-1000 ease-in-out"
            >
              {item.name}
            </Button>
          </Reveal>
        ))}
      </div>

      {/* Content Sections */}
      <div>
        {activeSection === "Dream Car" && (
          <div ref={carCalculatorRef}>
            <CarCalculator />
          </div>
        )}
        {activeSection === "Child's Education" && (
          <div ref={educationRef}>
            <EducationCalculator />
          </div>
        )}
        {activeSection === "Wealth Builder" && (
          <div ref={wealthRef}>
            <WealthBuilderCalculator />
          </div>
        )}
        {activeSection === "Retirement" && (
          <div ref={retirementRef}>
            <RetirementCalculator />
          </div>
        )}
        {activeSection === "Dream Holiday" && (
          <div ref={holidayRef}>
            <HolidayCalculator />
          </div>
        )}
        {activeSection === "Custom Dream" && (
          <div ref={customDreamRef}>
            <CustomDreamCalculator />
          </div>
        )}
        {activeSection === "Destination Wedding" && (
          <div ref={weddingRef}>
            <WeddingCalculator />
          </div>
        )}
        {activeSection === "Dream Home" && (
          <div ref={homeRef}>
            <HomeCalculator />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Collections;
