import React from "react";
import { Container } from "../components/Container";

const Home = () => {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold">
          Welcome to <span className="text-green-600">Ek-Pass</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-lg">
          Manage and monitor toll collections efficiently.
        </p>
      </div>
    </section>
  );
};

export default Home;
