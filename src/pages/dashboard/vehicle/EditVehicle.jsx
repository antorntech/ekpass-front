import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Demo BRTA Data for checking registration
const brtaData = [
  {
    zone: "Dhaka Metro",
    vehicleClass: "Ka(ক)",
    registrationNumber: "12-3456",
    chassisNumber: "1234",
  },
  {
    zone: "Chatta Metro",
    vehicleClass: "Ga(গ)",
    registrationNumber: "98-7654",
    chassisNumber: "5678",
  },
];

const EditVehicle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    zone: "",
    vehicleClass: "",
    registrationNumber: "",
    chassisNumber: "",
    vehicleName: "",
  });
  const [brtaVerified, setBrtaVerified] = useState(null);

  const zones = [
    "Dhaka Metro",
    "Chatta Metro",
    "Khulna Metro",
    "Rajshahi Metro",
  ];
  const classes = ["Ka(ক)", "kha(খ)", "Ga(গ)", "Gha(ঘ)"];

  useEffect(() => {
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    const vehicle = vehicles.find((v) => v.id === parseInt(id));
    if (vehicle) setFormData(vehicle);
  }, [id]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Auto insert "-" after two digits in registration number
    if (name === "registrationNumber") {
      value = value.replace(/\D/g, ""); // Only numbers
      if (value.length > 2) {
        value = value.slice(0, 2) + "-" + value.slice(2, 6);
      }
    }

    // Limit chassis number to last 4 digits
    if (name === "chassisNumber") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData({ ...formData, [name]: value });
  };

  const checkBRTA = () => {
    const found = brtaData.some(
      (v) =>
        v.zone === formData.zone &&
        v.vehicleClass === formData.vehicleClass &&
        v.registrationNumber === formData.registrationNumber &&
        v.chassisNumber === formData.chassisNumber
    );
    setBrtaVerified(found);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    const updatedVehicles = vehicles.map((v) =>
      v.id === parseInt(id) ? formData : v
    );
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
    navigate("/vehicle");
  };

  return (
    <div className="max-w-xl space-y-6">
      <header>
        <h2 className="text-2xl font-bold">Edit Vehicle</h2>
        <p className="text-gray-600">Update the details of your vehicle.</p>
      </header>
      <form
        className="space-y-4 bg-white p-6 rounded-lg shadow"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Zone */}
          <div>
            <label className="block text-sm font-medium mb-1">Zone</label>
            <select
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              className="w-full text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
              required
              disabled
            >
              <option value="">Select Zone</option>
              {zones.map((z) => (
                <option key={z} value={z}>
                  {z}
                </option>
              ))}
            </select>
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <select
              name="vehicleClass"
              value={formData.vehicleClass}
              onChange={handleChange}
              className="w-full text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
              required
              disabled
            >
              <option value="">Select Class</option>
              {classes.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Registration Number */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Vehicle Full Registration Number (Only Numeric)
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="12-3456"
            maxLength="7"
            className="w-full text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
            required
            disabled
          />
        </div>

        {/* Chassis Number */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Chassis Number (Last 4 Digit)
          </label>
          <input
            type="text"
            name="chassisNumber"
            value={formData.chassisNumber}
            onChange={handleChange}
            placeholder="1234"
            maxLength="4"
            className="w-full text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
            required
            disabled
          />
        </div>

        {/* Vehicle Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Name</label>
          <input
            type="text"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            placeholder="Vehicle Name"
            className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
            required
          />
        </div>

        {/* BRTA Verification */}
        {/* <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={checkBRTA}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            Check BRTA
          </button>
          {brtaVerified !== null && (
            <span
              className={`text-sm font-semibold ${
                brtaVerified ? "text-green-600" : "text-red-600"
              }`}
            >
              {brtaVerified
                ? "Vehicle Registered in BRTA"
                : "Not Found in BRTA"}
            </span>
          )}
        </div> */}

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Update Vehicle
        </button>
      </form>
    </div>
  );
};

export default EditVehicle;
