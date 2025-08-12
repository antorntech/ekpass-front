import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="md:min-h-screen flex items-center py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Fast, Paperless <span className="text-green-600">Toll Payment</span>
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-600">
            Experience a hassle-free toll payment system with real-time vehicle
            verification and seamless transactions.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-6 cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md text-md md:text-lg hover:bg-green-700 transition"
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/assets/banner-bg.png"
            alt="Toll System"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
