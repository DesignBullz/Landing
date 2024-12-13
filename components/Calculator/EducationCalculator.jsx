import React, { useState, useEffect } from "react";
import { FaSchool } from "react-icons/fa";
import styles from "./CarCalculator.module.css"; // Import CSS Module

const EducationCalculator = () => {
  const [years, setYears] = useState(5);
  const [currentCost, setCurrentCost] = useState(1000000);
  const [amountInvestedToday, setAmountInvestedToday] = useState(100000);
  const [disclaimerReturns, setDisclaimerReturns] = useState(12);
  const [disclaimerInflation, setDisclaimerInflation] = useState(7);
  const [isFullDisclaimer, setIsFullDisclaimer] = useState(false);

  const [futureCost, setFutureCost] = useState(0);
  const [sipAmount, setSIPAmount] = useState(0);
  const [additionalAmount, setAdditionalAmount] = useState(0);

  const calculate = () => {
    // Adjusted return and inflation rates
    const expectedReturns = disclaimerReturns;
    const inflationRate = disclaimerInflation;

    // Calculate the future cost of the car after inflation
    const futureCostValue =
      currentCost * Math.pow(1 + inflationRate / 100, years);

    // Calculate the future value of the current investment at 13% return
    const lumpSumValue =
      amountInvestedToday * Math.pow(1 + expectedReturns / 100, years);

    // Calculate the SIP required to meet the future cost
    const monthlyRate = expectedReturns / 12 / 100;
    const months = years * 12;

    // Adjusted SIP calculation
    const sipValue =
      (futureCostValue - lumpSumValue) *
      (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

    // Calculate the additional amount needed
    const additionalNeeded = futureCostValue - lumpSumValue;

    // Update state with the calculated values and rounding for formatting
    setFutureCost(Math.round(futureCostValue)); // Rounded to nearest integer
    setSIPAmount(Math.round(sipValue)); // Rounded SIP to nearest integer
    setAdditionalAmount(Math.round(additionalNeeded)); // Rounded additional amount
  };

  useEffect(() => {
    calculate();
  }, [
    years,
    currentCost,
    amountInvestedToday,
    disclaimerReturns,
    disclaimerInflation,
  ]);

  // Calculation logic remains the same as in the previous implementation

  const renderInputBox = (label, value, onChange, min, max, step = 1) => (
    <div className={styles.inputBox}>
      <div className={styles.inputLabel}>
        <label>{label}</label>
        <input
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
        />
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={styles.inputRange}
      />
    </div>
  );

  const statement = (
    <div className={styles.statementContainer}>
      <div className={styles.statementText}>
        <p>
          For your child&apos;s future, you may need{" "}
          <span className={styles.highlightText}>
            ₹{Number(futureCost).toLocaleString()}
          </span>{" "}
          in {years} years. Your current investment of{" "}
          <span className={styles.highlightText}>
            ₹{Number(amountInvestedToday).toLocaleString()}
          </span>{" "}
          may appreciate to{" "}
          <span className={styles.highlightText}>
            ₹{Number((futureCost - additionalAmount).toFixed(2))}
          </span>
          . You may need to accumulate an additional{" "}
          <span className={styles.highlightText}>
            ₹{Number(additionalAmount).toLocaleString()}
          </span>{" "}
          to fund your child&apos;s future.
        </p>
      </div>
      <div className={styles.sipGoalText}>
        To reach your goal, you will need to start an SIP of{" "}
        <span className={styles.highlightText}>
          ₹{Number(sipAmount).toLocaleString()}
        </span>
      </div>
      <div className={styles.sloganText}>
        Higher Education ka sapna skip nahi, SIP karo.
      </div>
      <button
        onClick={() => alert("Request for Callback")}
        className={styles.callbackButton}
      >
        REQUEST A CALL BACK
      </button>
    </div>
  );

  const renderDisclaimer = () => {
    const shortDisclaimer = (
      <div className={styles.disclaimerText}>
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
          </select>{" "}
          and inflation rate of{" "}
          <select
            value={disclaimerInflation}
            onChange={(e) => setDisclaimerInflation(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 7 }, (_, index) => index + 4).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
          , is for illustration purpose only and should not be construed as a
          promise on minimum returns and safeguard of capital. SIP does not
          assure a profit or guarantee protection against loss in a declining
          market.{" "}
          <span
            onClick={() => setIsFullDisclaimer(true)}
            className={styles.disclaimerLink}
          >
            Read More
          </span>
        </p>
      </div>
    );

    const fullDisclaimer = (
      <div className={styles.disclaimerText}>
        <p className="mb-2">
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={disclaimerReturns}
            onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 12 }, (_, index) => index + 2).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>{" "}
          and inflation rate of{" "}
          <select
            value={disclaimerInflation}
            onChange={(e) => setDisclaimerInflation(Number(e.target.value))}
            className="mx-1 text-xs p-1 border rounded"
          >
            {Array.from({ length: 25 }, (_, index) => index + 1).map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
          , is for illustration purpose only and should not be construed as a
          promise on minimum returns and safeguard of capital.SIP Calculator is
          designed to assist you in determining the appropriate amount. SIP
          calculator alone are not sufficient and shouldn&apos;t be used for the
          development or implementation of an investment strategy. KMAMC makes
          no warranty about the accuracy of the calculators/reckoners. The
          examples do not purport to represent the performance of any security
          or Investments. In view of Individual nature of tax consequences, each
          Investor is advised to consult his her own professional tax advisor.
        </p>
        <div className="text-right">
          <span
            onClick={() => setIsFullDisclaimer(false)}
            className=" underline cursor-pointer font-semibold"
            style={{ color: "#014a94" }}
          >
            Read Less
          </span>
        </div>
      </div>
    );

    return isFullDisclaimer ? fullDisclaimer : shortDisclaimer;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/creators/c2.jpg"
          alt="Dream Car"
          className={styles.carImage}
        />
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className={styles.header}>
          <FaSchool className={styles.headerIcon} />

          <h1
            className={`text-2xl sm:text-4xl font-bold text-gray-800 ${styles.headerTitle}`}
          >
            Child's Education
          </h1>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {renderInputBox(
              "Money required for your child's future (₹)",
              currentCost,
              (e) => setCurrentCost(Number(e.target.value)),
              100000,
              5000000,
              10000
            )}
            {renderInputBox(
              "You want to achieve this goal in (years)",
              years,
              (e) => setYears(Number(e.target.value)),
              1,
              100
            )}
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            style={{ marginTop: "15px" }}
          >
            {renderInputBox(
              "Amount you can invest today (₹)",
              amountInvestedToday,
              (e) => setAmountInvestedToday(Number(e.target.value)),
              0,
              currentCost,
              1000
            )}
          </div>
        </div>
        {statement}
        {renderDisclaimer()}
      </div>
    </div>
  );
};

export default EducationCalculator;
