import React, { useState, useEffect } from "react";
import { FaChartLine } from "react-icons/fa"; // Icon for SIP Wealth Calculator
import sipImage from "../assets/w.jpg"; // Replace with your SIP-related image

const SIPWealthCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(9000);
  const [years, setYears] = useState(20);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [wealthAccumulated, setWealthAccumulated] = useState(0);
  const [isFullDisclaimer, setIsFullDisclaimer] = useState(false);

  const calculateWealth = () => {
    const months = years * 12; // Calculate the total number of months
    const monthlyRate = rateOfReturn / 12 / 100; // Convert annual rate to monthly rate

    // Calculate accumulated wealth using the future value of a series formula
    const accumulatedWealth =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    setWealthAccumulated(accumulatedWealth); // Update state with accumulated wealth
  };

  useEffect(() => {
    calculateWealth();
  }, [monthlyInvestment, years, rateOfReturn]);

  const renderInputBox = (label, value, onChange, min, max, step = 1) => (
    <div className="bg-gray-300 px-4 py-2 space-y-2 shadow-sm rounded-xl">
      <div className="flex items-center justify-between">
        <label
          className="text-xs font-medium text-gray-700 truncate"
          style={{ maxWidth: "60%" }}
        >
          {label}
        </label>
        <input
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          className="w-24 p-1 text-right bg-gray-300 focus:ring-red-500 focus:outline-none text-sm"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full bg-white rounded-full appearance-none cursor-pointer"
        style={{
          accentColor: "#014a94",
          height: "3px",
          borderRadius: "15px",
        }}
      />
    </div>
  );

  const renderDisclaimer = () => {
    const disclaimerStyle = "text-xs text-gray-600"; // Smaller text style

    const shortDisclaimer = (
      <div className={`w-full text-left ${disclaimerStyle}`}>
        <p className="mb-2">
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={rateOfReturn}
            onChange={(e) => setRateOfReturn(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 20 }, (_, index) => index + 6).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>{" "}
          is for illustration purposes only and should not be construed as a
          promise on minimum returns and safeguard of capital.{" "}
          <span
            onClick={() => setIsFullDisclaimer(true)}
            className="underline cursor-pointer font-semibold"
            style={{ color: "#014a94" }}
          >
            Read More
          </span>
        </p>
      </div>
    );

    const fullDisclaimer = (
      <div className={`w-full text-left space-y-2 ${disclaimerStyle}`}>
        <p className="mb-2">
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={rateOfReturn}
            onChange={(e) => setRateOfReturn(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 12 }, (_, index) => index + 2).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>{" "}
          is for illustration purposes only and should not be construed as a
          promise on minimum returns and safeguard of capital. SIP Calculator is
          designed to assist you in determining the appropriate amount. SIP
          calculator alone are not sufficient and shouldn&apos;t be used for the
          development or implementation of an investment strategy.
        </p>
        <div className="text-right">
          <span
            onClick={() => setIsFullDisclaimer(false)}
            className="underline cursor-pointer font-semibold"
            style={{ color: "#014a94" }}
          >
            Read Less
          </span>
        </div>
      </div>
    );

    return isFullDisclaimer ? fullDisclaimer : shortDisclaimer;
  };

  const statement = (
    <div className="bg-white p-4 space-y-4 text-center">
      <div className="text-body text-sm text-gray-700">
        <p>
          If you invest ₹{Number(monthlyInvestment).toLocaleString()} monthly
          for the next {years} years, you may accumulate ₹
          {Number(wealthAccumulated).toLocaleString()}.
        </p>
      </div>
      <div className="text-body font-semibold text-gray-800">
        To reach your goal, you need to invest ₹
        {Number(monthlyInvestment).toLocaleString()} monthly.
      </div>
      <div className="text-body font-semibold text-gray-800 mt-4">
        Dreams are achievable, just SIP karo!
      </div>
      <div className="mt-4">
        <button
          onClick={() => alert("Request for Callback")}
          className="px-5 py-1 text-white text-body rounded-md"
          style={{ backgroundColor: "#014a94" }}
        >
          REQUEST A CALL BACK
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "#014a94" }}
    >
      <div className="bg-white w-full max-w-7xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8">
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src={sipImage}
              alt="SIP Wealth"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaChartLine
              className="font-bold text-2xl sm:text-4xl"
              style={{ color: "#014a94" }}
            />
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
              SIP Wealth Calculator
            </h1>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {renderInputBox(
                "Monthly Investment (₹)",
                monthlyInvestment,
                (e) => setMonthlyInvestment(Number(e.target.value)),
                1000,
                1000000,
                5000
              )}
              {renderInputBox(
                "Invest for (Years)",
                years,
                (e) => setYears(Number(e.target.value)),
                1,
                50
              )}
            </div>
          </div>

          {statement}
          {renderDisclaimer()}
        </div>
      </div>
    </div>
  );
};

export default SIPWealthCalculator;
