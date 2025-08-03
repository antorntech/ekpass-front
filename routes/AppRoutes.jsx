import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Login from "../src/pages/auth/Login";
import Signup from "../src/pages/auth/Signup";

const AppRoutes = ({ authentication }) => {
  return (
    <>
      {authentication ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
