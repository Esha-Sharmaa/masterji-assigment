import { useCallback, useEffect, useRef } from "react";

const OtpInput = ({ length = 4, otp, setOtp }) => {
  const inputRefs = useRef([]);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = useCallback(
    (index, e) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    },
    [otp, length]
  );

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  return (
    <div className="otp-input-container">
      {otp.map((e, index) => (
        <input
          inputMode="numeric"
          pattern="[0-9]*"
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          className="otp-input"
          value={e}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};
export default OtpInput;
