import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [initialValues, setInitialValues] = React.useState({
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(initialValues));
    window.location.href = "/";
    setInitialValues({ email: "", password: "" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center mb-2 md:mb-4">
          <img
            src="/assets/logo-1.png"
            alt="logo.png"
            className="w-28 md:w-36 lg:w-48 mx-auto"
          />
          <h2 className="text-xl font-bold text-green-600 mt-3">
            Login to EkPass
          </h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <input
              name="mobile"
              type="number"
              onChange={handleChange}
              value={initialValues.mobile}
              placeholder="01xxxxxxxxx"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={initialValues.password}
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-green-600 hover:underline ml-1">
            Signup
          </Link>
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <img src="/assets/np-logo-set.png" alt="authorities" className="w-52" />
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheckCircle,
//   faTimesCircle,
// } from "@fortawesome/free-solid-svg-icons";

// const mfsList = [
//   { name: "bKash", logo: "/assets/bkash.png" },
//   { name: "Nagad", logo: "/assets/nagad.png" },
//   { name: "Rocket", logo: "/assets/rocket.png" },
//   { name: "Upay", logo: "/assets/upay.png" },
// ];

// // Demo registered numbers
// const registeredNumbers = ["01795937735", "01608081907", "01721974369"];

// export default function Login() {
//   const navigate = useNavigate();
//   const [initialValues, setInitialValues] = useState({
//     email: "",
//     password: "",
//   });

//   const [selectedMfs, setSelectedMfs] = useState(null);
//   const [mobile, setMobile] = useState("");
//   const [step, setStep] = useState(1); // 1 = select mfs & number, 2 = code verification
//   const [verifyCode, setVerifyCode] = useState("");
//   const [sentCode, setSentCode] = useState("");
//   const [message, setMessage] = useState("");
//   const [modal, setModal] = useState(null);

//   // Email/password login
//   const handleChange = (e) => {
//     setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     localStorage.setItem("user", JSON.stringify(initialValues));
//     window.location.href = "/";
//   };

//   // MFS login step 1
//   const handleCheckRegistration = () => {
//     if (registeredNumbers.includes(mobile)) {
//       const code = Math.floor(10000 + Math.random() * 90000).toString(); // 5-digit random code
//       localStorage.setItem("mfsVerifyCode", code);
//       setSentCode(code);
//       setStep(2);
//       setMessage("");
//     } else {
//       setMessage("❌ This number is not registered for this MFS.");
//     }
//   };

//   // MFS login step 2
//   const handleVerifyCode = () => {
//     const storedCode = localStorage.getItem("mfsVerifyCode");
//     if (verifyCode === storedCode) {
//       setModal({
//         title: "Successfully Verified",
//         text: `Welcome! Your ${selectedMfs} account is verified.`,
//       });

//       localStorage.removeItem("mfsVerifyCode");
//       localStorage.setItem("user", JSON.stringify(initialValues));
//       setTimeout(() => {
//         window.location.href = "/"; // auto redirect
//       }, 2000);
//     } else {
//       setMessage("❌ Invalid verification code.");
//     }
//   };

//   const handleResendCode = () => {
//     const code = Math.floor(10000 + Math.random() * 90000).toString();
//     localStorage.setItem("mfsVerifyCode", code);
//     setSentCode(code);
//     setMessage("✅ New verification code sent.");
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-10">
//       <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
//         {/* Email login */}
//         <div className="text-center mb-2 md:mb-4">
//           <Link to="/">
//             <img src="/assets/logo-1.png" alt="logo" className="w-28 mx-auto" />
//           </Link>
//           <h2 className="text-xl font-bold text-green-600 mt-3">
//             Login to EkPass
//           </h2>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               name="email"
//               type="email"
//               onChange={handleChange}
//               value={initialValues.email}
//               className="w-full px-4 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               name="password"
//               type="password"
//               onChange={handleChange}
//               value={initialValues.password}
//               className="w-full px-4 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4 text-gray-600">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-green-600 hover:underline">
//             Register
//           </Link>
//         </p>

//         {/* Divider */}
//         <div className="my-6 text-center text-gray-500 text-sm">
//           or login with MFS
//         </div>

//         {/* Step 1: Select MFS */}
//         {step === 1 && (
//           <>
//             <div className="w-full flex flex-row items-center gap-4">
//               {mfsList.map((mfs) => (
//                 <div
//                   key={mfs.name}
//                   className={`w-full flex items-center justify-between border p-2 rounded cursor-pointer ${
//                     selectedMfs === mfs.name
//                       ? "border-green-500"
//                       : "border-gray-200"
//                   }`}
//                   onClick={() => setSelectedMfs(mfs.name)}
//                 >
//                   <div className="w-full">
//                     <img
//                       src={mfs.logo}
//                       alt={mfs.name}
//                       className="w-14 h-8 object-contain"
//                     />
//                   </div>
//                   {selectedMfs === mfs.name && (
//                     <FontAwesomeIcon
//                       icon={faCheckCircle}
//                       className="text-green-500"
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>

//             {selectedMfs && (
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Mobile Number"
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                   className="w-full border border-gray-300 focus:outline-none focus:border-green-500 p-2 rounded"
//                 />
//                 {message && (
//                   <p className="text-red-500 text-sm mt-1">{message}</p>
//                 )}
//                 <button
//                   onClick={handleCheckRegistration}
//                   className="cursor-pointer w-full bg-green-600 text-white py-2 rounded mt-3"
//                 >
//                   Continue
//                 </button>
//               </div>
//             )}
//           </>
//         )}

//         {/* Step 2: Code verification */}
//         {step === 2 && (
//           <div className="mt-4">
//             <p className="text-sm mb-2">
//               Verification code sent to {mobile} (demo code:{" "}
//               <span className="font-bold">{sentCode}</span>)
//             </p>
//             <input
//               type="text"
//               placeholder="Enter Verification Code"
//               value={verifyCode}
//               onChange={(e) => setVerifyCode(e.target.value)}
//               className="w-full border p-2 rounded"
//             />
//             {message && <p className="text-red-500 text-sm mt-1">{message}</p>}
//             <button
//               onClick={handleVerifyCode}
//               className="cursor-pointer w-full bg-green-600 text-white py-2 rounded mt-3"
//             >
//               Verify
//             </button>
//             <button
//               onClick={handleResendCode}
//               className="cursor-pointer w-full bg-gray-300 text-black py-2 rounded mt-2"
//             >
//               Resend Code
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Success Modal */}
//       {modal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur z-50">
//           <div className="bg-white rounded-lg p-6 text-center max-w-sm w-full shadow-lg">
//             <FontAwesomeIcon
//               icon={faCheckCircle}
//               className="text-green-500 text-5xl mb-3"
//             />
//             <h2 className="text-xl font-bold mb-2">{modal.title}</h2>
//             <p className="text-gray-600 mb-4">{modal.text}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
