import { useState } from "react";
import OtpInput from "./OtpInput";
import ChaiCode from "../ChaiCode";

const FromContainer = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const verifyOtp = () => {
    const finalOtp = otp.join("");
    const otpInputsArray = document.querySelectorAll(".otp-input");
    const verifyBtn = document.querySelector(".verify-button");

    if (finalOtp === "1234") {
      otpInputsArray.forEach((ele) => ele.classList.add("valid"));
      verifyBtn.classList.add("green");
      verifyBtn.textContent = "Verified";
    } else {
      otpInputsArray.forEach((ele) => ele.classList.add("invalid"));
      verifyBtn.classList.add("red");
      verifyBtn.textContent = "Verification Falied";
    }
  };
  return (
    <div className="otp-form-container">
      <h1 className="heading"> Chai Aur Code</h1>
      <div className="form-container">
        <h2 className="heading"> Mobile Phone Verification</h2>
        <p className="info">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>
        <OtpInput length={4} otp={otp} setOtp={setOtp} />
        <button className="verify-button" onClick={verifyOtp}>
          Verify Account
        </button>
        <p className="resend">
          Didn’t receive code? <span>Resend</span>{" "}
        </p>
      </div>
      <ChaiCode />
    </div>
  );
};
export default FromContainer;
