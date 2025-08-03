import React from "react";
import { Container } from "../components/Container";

const About = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">
          About <span className="text-green-600">Ek-Pass</span>
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ek-Pass is a web-based application designed to streamline toll
          collection across multiple toll plazas. It allows for real-time
          monitoring, digital payment integration, and accurate revenue
          tracking.
        </p>
      </div>
    </>
  );
};

export default About;
