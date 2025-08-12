import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../src/pages/auth/Login";
import Signup from "../src/pages/auth/Signup";
import Home from "../src/pages/Home";
import Vehicle from "../src/pages/dashboard/vehicle/Vehicle";
import Payment from "../src/pages/dashboard/payment/Payment";
import AddVehicle from "../src/pages/dashboard/vehicle/AddVehicle";
import EditVehicle from "../src/pages/dashboard/vehicle/EditVehicle";
import AddMultVehicle from "../src/pages/dashboard/vehicle/AddMultVehicle";

const AppRoutes = ({ authentication }) => {
  return (
    <>
      {authentication ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/vehicle/add" element={<AddVehicle />} />
          <Route path="/vehicle/add/csv" element={<AddMultVehicle />} />
          <Route path="/vehicle/edit/:id" element={<EditVehicle />} />
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
