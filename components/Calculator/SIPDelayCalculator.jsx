import React, { useState, useEffect } from "react";
import { FaMoneyBillWave } from "react-icons/fa";

const SIPDelayCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(9000); // Default monthly investment
  const [investmentYears, setInvestmentYears] = useState(20); // Default investment period
  const [delayMonths, setDelayMonths] = useState(10); // Default delay of 10 months
  const [disclaimerReturns, setDisclaimerReturns] = useState(12); // Default return rate of 12%

  const [amountAccumulated, setAmountAccumulated] = useState(0);
  const [investmentAfterDelay, setInvestmentAfterDelay] = useState(0);
  const [costOfDelay, setCostOfDelay] = useState(0);

  const calculate = () => {
    const annualRate = disclaimerReturns / 100; // Annual return rate
    const totalMonths = investmentYears * 12; // Total investment months
    const monthlyRate = annualRate / 12; // Monthly return rate

    // Precise calculation for total corpus without delay
    const corpusWithoutDelay =
      ((monthlyInvestment * (Math.pow(1 + monthlyRate, totalMonths) - 1)) /
        monthlyRate) *
      (1 + monthlyRate);
    console.log(corpusWithoutDelay);

    // Precise calculation for corpus with delay
    const monthsAfterDelay = totalMonths - delayMonths;
    const corpusWithDelay =
      ((monthlyInvestment * (Math.pow(1 + monthlyRate, monthsAfterDelay) - 1)) /
        monthlyRate) *
      (1 + monthlyRate);
    console.log(corpusWithDelay);

    // Calculate the difference (cost of delay)
    const delayLoss = corpusWithoutDelay - corpusWithDelay;
    console.log(delayLoss);

    // Rounding to match the specific format
    setAmountAccumulated(Math.round(corpusWithoutDelay / 100) * 100);
    setInvestmentAfterDelay(Math.round(corpusWithDelay / 100) * 100);
    setCostOfDelay(Math.round(delayLoss / 100) * 100);
  };

  useEffect(() => {
    calculate();
  }, [monthlyInvestment, investmentYears, delayMonths, disclaimerReturns]);

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

    return (
      <div className={`w-full text-left space-y-2 ${disclaimerStyle}`}>
        <p className="mb-2">
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={disclaimerReturns}
            onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 20 }, (_, index) => index + 6).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
          , is for illustration purposes only and should not be construed as a
          promise on minimum returns and safeguard of capital. SIP does not
          assure a profit or guarantee protection against loss in a declining
          market. SIP Calculator is designed to assist you in determining the
          appropriate amount. SIP calculators alone are not sufficient and
          shouldn&apos;t be used for the development or implementation of an
          investment strategy. KMAMC makes no warranty about the accuracy of the
          calculators.
        </p>
      </div>
    );
  };

  //   const statement = (
  //     <div className="bg-white p-4 space-y-4 text-center">
  //       <div className="text-body text-sm text-gray-700">
  //         <p>
  //           Total value of investment after delay is{" "}
  //           <span className="font-bold text-base" style={{ color: "#014a94" }}>
  //             ₹{Number(totalValueWithDelay).toLocaleString()}
  //           </span>
  //         </p>
  //         <p>
  //           The delay may cause you a loss of{" "}
  //           <span className="font-bold text-base" style={{ color: "#014a94" }}>
  //             ₹{Number(lossDueToDelay).toLocaleString()}
  //           </span>
  //         </p>
  //       </div>
  //       <div className="text-body font-semibold text-gray-800 mt-4">
  //         Don't delay, start investing today!
  //       </div>
  //     </div>
  //   );
  const statement = (
    <div className="bg-white p-4 space-y-4 text-center">
      <div className="text-body text-sm text-gray-700">
        <p>
          <strong>Amount Accumulated (D12):</strong> ₹
          {Number(amountAccumulated).toLocaleString()}
        </p>
        <p>
          <strong>Investment Amount After Delay (F12):</strong> ₹
          {Number(investmentAfterDelay).toLocaleString()}
        </p>
        <p>
          <strong>Cost of Delay (D14):</strong> ₹
          {Number(costOfDelay).toLocaleString()}
        </p>
      </div>
      <div className="text-body font-semibold text-gray-800 mt-4">
        Don&apos;t delay, start investing today!
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
            <FaMoneyBillWave
              className="w-full h-auto object-cover text-6xl"
              style={{ color: "#014a94" }}
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
              SIP Delay Impact Calculator
            </h1>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {renderInputBox(
                "Monthly Investment (₹)",
                monthlyInvestment,
                (e) => setMonthlyInvestment(Number(e.target.value)),
                1000,
                100000,
                1000
              )}
              {renderInputBox(
                "Investment Period (years)",
                investmentYears,
                (e) => setInvestmentYears(Number(e.target.value)),
                1,
                40
              )}
              {renderInputBox(
                "Delay in Months (months)",
                delayMonths,
                (e) => setDelayMonths(Number(e.target.value)),
                0,
                24
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

export default SIPDelayCalculator;
