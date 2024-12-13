import React, { useState, useEffect } from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import styles from "./RetirementCalculator.module.css";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(44);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [monthlyExpense, setMonthlyExpense] = useState(100000);
  const [amountInvestedToday, setAmountInvestedToday] = useState(150000);
  const [disclaimerReturns, setDisclaimerReturns] = useState(12);
  const [disclaimerInflation, setDisclaimerInflation] = useState(7);
  const [isFullDisclaimer, setIsFullDisclaimer] = useState(false);

  const [requiredCorpus, setRequiredCorpus] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [additionalAmount, setAdditionalAmount] = useState(0);
  const [sipAmount, setSIPAmount] = useState(0);

  useEffect(() => {
    calculateRetirement();
  }, [
    currentAge,
    retirementAge,
    lifeExpectancy,
    monthlyExpense,
    amountInvestedToday,
    disclaimerReturns,
    disclaimerInflation,
  ]);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = lifeExpectancy - retirementAge;

    // Adjust the monthly expense for inflation over the years to retirement
    const adjustedMonthlyExpense =
      monthlyExpense *
      Math.pow(1 + disclaimerInflation / 100, yearsToRetirement);

    // Total corpus needed for retirement
    const corpusNeeded = adjustedMonthlyExpense / 0.0075;

    // Future value of the current investment after growth (disclaimerReturns rate of return)
    const futureValue =
      amountInvestedToday *
      Math.pow(1 + disclaimerReturns / 100, yearsToRetirement);

    // Additional amount needed after considering the future value of the current investment
    const additionalNeeded = corpusNeeded - futureValue;

    // Monthly return rate for SIP calculation
    const monthlyRate = disclaimerReturns / 12 / 100;
    const months = yearsToRetirement * 12;

    // SIP calculation to accumulate the additional amount needed
    const sipValue =
      additionalNeeded *
      (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

    // Update the state with the calculated values
    setRequiredCorpus(corpusNeeded);
    setFutureValue(futureValue);
    setAdditionalAmount(additionalNeeded);
    setSIPAmount(sipValue);
  };

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

  const renderDisclaimer = () => {
    const shortDisclaimer = (
      <div className={styles.disclaimerText}>
        <p>
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={disclaimerReturns}
            onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
            className={styles.disclaimerSelect}
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
            className={styles.disclaimerSelect}
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
        <p>
          The above investment simulation, based on assumed rate of return(s) of{" "}
          <select
            value={disclaimerReturns}
            onChange={(e) => setDisclaimerReturns(Number(e.target.value))}
            className={styles.disclaimerSelect}
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
            className={styles.disclaimerSelect}
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
        <div>
          <span
            onClick={() => setIsFullDisclaimer(false)}
            className={styles.disclaimerLink}
          >
            Read Less
          </span>
        </div>
      </div>
    );

    return isFullDisclaimer ? fullDisclaimer : shortDisclaimer;
  };

  const statement = (
    <div className={styles.statementContainer}>
      <div className={styles.statementText}>
        <p>
          For your dream retirement plan, you may require a corpus of{" "}
          <span className={styles.highlightText}>
            ₹{Number(requiredCorpus).toLocaleString()}
          </span>{" "}
          in {retirementAge - currentAge} years. Your current investment of{" "}
          <span className={styles.highlightText}>
            ₹{Number(amountInvestedToday).toLocaleString()}
          </span>{" "}
          may grow to{" "}
          <span className={styles.highlightText}>
            ₹{Number(futureValue).toLocaleString()}
          </span>
          . You may need to accumulate an additional{" "}
          <span className={styles.highlightText}>
            ₹{Number(additionalAmount).toLocaleString()}
          </span>{" "}
          to fund your dream retirement.
        </p>
      </div>
      <div className={styles.sipGoalText}>
        To reach your goal, you will need to start an SIP of{" "}
        <span className={styles.highlightText}>
          ₹{Number(sipAmount).toLocaleString()}
        </span>
      </div>
      <div className={styles.sloganText}>
        Early Retirement ka sapna skip nahi, SIP karo.
      </div>
      <button
        onClick={() => alert("Request for Callback")}
        className={styles.callbackButton}
      >
        REQUEST A CALL BACK
      </button>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/creators/c5.jpg"
          alt="Retirement Plan"
          className={styles.carImage}
        />
      </div>

      <div>
        <div className={styles.header}>
          <FaUmbrellaBeach className={styles.headerIcon} />
          <h1 className={styles.headerTitle}>Retirement Planner</h1>
        </div>

        <div className={styles.inputContainer}>
          <div>
            {renderInputBox(
              "Your current age",
              currentAge,
              (e) => setCurrentAge(Number(e.target.value)),
              18,
              100
            )}
            {renderInputBox(
              "Your retirement age",
              retirementAge,
              (e) => setRetirementAge(Number(e.target.value)),
              18,
              100
            )}
            {renderInputBox(
              "Your expectancy",
              lifeExpectancy,
              (e) => setLifeExpectancy(Number(e.target.value)),
              18,
              100
            )}
          </div>

          <div>
            {renderInputBox(
              "Your Monthly expense",
              monthlyExpense,
              (e) => setMonthlyExpense(Number(e.target.value)),
              1000,
              100000
            )}
            {renderInputBox(
              "Amount you can invest today",
              amountInvestedToday,
              (e) => setAmountInvestedToday(Number(e.target.value)),
              0,
              1000000
            )}
          </div>
        </div>

        {statement}
        {renderDisclaimer()}
      </div>
    </div>
  );
};

export default RetirementCalculator;
