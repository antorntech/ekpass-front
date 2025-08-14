import { motion } from "framer-motion";
import { useState } from "react";

const EkpassIdLogin = ({ onClose }) => {
  const [ekpassId, setEkpassId] = useState("");

  const handleEkpassLogin = (e) => {
    e.preventDefault();
    if (!ekpassId) {
      alert("Please enter your EKPASS ID");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ ekpassId }));
    window.location.href = "/";
    setEkpassId("");
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="text-center mb-4">
          <img
            src="/assets/logo-1.png"
            alt="logo.png"
            className="w-28 md:w-36 mx-auto"
          />
          <h2 className="text-xl font-bold text-green-600">
            Login with EKPASS ID
          </h2>
        </div>
        <form onSubmit={handleEkpassLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              EKPASS ID (For MFS / FI Users)
            </label>
            <input
              type="text"
              value={ekpassId}
              onChange={(e) => setEkpassId(e.target.value)}
              placeholder="Enter your EKPASS ID"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 cursor-pointer bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 cursor-pointer bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EkpassIdLogin;
