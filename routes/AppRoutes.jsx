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
import Landing from "../src/pages/landing/Landing";
import Profile from "../src/pages/dashboard/profile/Profile";
import Notification from "../src/pages/dashboard/notification/Notification";
import Support from "../src/pages/dashboard/support/Support";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route exact path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
