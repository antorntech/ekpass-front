import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const generateCode = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

const Signup = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [inputCode, setInputCode] = useState(["", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [resendAvailable, setResendAvailable] = useState(false);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const code = generateCode();
    localStorage.setItem("verificationCode", code);
    setVerificationCode(code);
    setShowVerification(true);
    setTimeLeft(30);
    setResendAvailable(false);
  };

  useEffect(() => {
    let timer;
    if (!resendAvailable && showVerification) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setResendAvailable(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendAvailable, showVerification]);

  const handleResend = () => {
    const code = generateCode();
    localStorage.setItem("verificationCode", code);
    console.log("Resent Code:", code);
    setVerificationCode(code);
    setInputCode(["", "", "", "", ""]);
    setTimeLeft(30);
    setResendAvailable(false);
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...inputCode];
    newCode[index] = value;
    setInputCode(newCode);

    // Auto-focus next input
    if (value && index < 4) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const entered = inputCode.join("");
    const stored = localStorage.getItem("verificationCode");
    if (entered === stored) {
      alert("Verification successful!");
      localStorage.setItem("user", JSON.stringify(stored));
      window.location.href = "/";
    } else {
      alert("Invalid code. Try again.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("verificationCode");
    }, 30000);
  }, [verificationCode]);

  if (showVerification) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-md p-6 text-center space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-green-600">
              Enter Verification Code
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              A 5-digit code was sent to your phone. And your code is
              <strong> {verificationCode}</strong>
            </p>
          </div>
          <div className="flex justify-center gap-2 mb-4">
            {inputCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                className="w-10 h-10 md:w-14 md:h-14 text-center border border-gray-300 rounded focus:outline-none focus:border-green-500"
              />
            ))}
          </div>

          <div className="my-10 text-sm text-gray-600">
            {resendAvailable ? (
              <button
                onClick={handleResend}
                className="text-green-600 hover:underline"
              >
                Resend Code
              </button>
            ) : (
              <p>Resend code in {timeLeft} seconds</p>
            )}
          </div>

          <button
            onClick={handleVerify}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Verify
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full h-full py-6 px-4 md:px-0 flex flex-col items-center gap-8">
        <div className="w-full max-w-2xl border border-gray-200 rounded-md p-4 sm:p-6 md:p-8 bg-white shadow-sm">
          <div className="flex flex-col items-center mb-6 text-center">
            <img
              src="/assets/logo-1.png"
              alt="logo.png"
              className="w-28 md:w-36 lg:w-48 mx-auto"
            />
            <h2 className="text-lg sm:text-xl font-bold text-green-600">
              Create Your EkPass Account
            </h2>
          </div>

          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Mr. X"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="+8801xxxxxxxxx"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                required
              >
                <option value="" disabled selected>
                  Select Account Type
                </option>
                <option value="individual">Individual</option>
                <option value="company">Company</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pin Number
                </label>
                <input
                  type="password"
                  placeholder="*******"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Pin Number
                </label>
                <input
                  type="password"
                  placeholder="*******"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Signup
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-green-600 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>

        <div>
          <img
            src="/assets/authorities.png"
            alt="authorities"
            className="w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
