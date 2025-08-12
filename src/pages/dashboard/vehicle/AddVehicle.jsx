import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Demo BRTA registered vehicle data
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

const AddVehicle = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    zone: "",
    vehicleClass: "",
    registrationNumber: "",
    chassisNumber: "",
    vehicleName: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const zones = [
    "Dhaka Metro",
    "Chatta Metro",
    "Khulna Metro",
    "Rajshahi Metro",
  ];
  const classes = ["Ka(ক)", "kha(খ)", "Ga(গ)", "Gha(ঘ)"];

  // Handle input change with auto hyphen for registrationNumber
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "registrationNumber") {
      // Remove non-numeric except hyphen
      value = value.replace(/[^0-9]/g, "");
      // Insert hyphen after 2 digits
      if (value.length > 2) {
        value = value.slice(0, 2) + "-" + value.slice(2, 6);
      }
    }

    if (name === "chassisNumber") {
      value = value.replace(/[^0-9]/g, "").slice(0, 4);
    }

    setFormData({ ...formData, [name]: value });
  };

  // Check if vehicle exists in BRTA (dummy check)
  const checkBRTARegistration = () => {
    return brtaData.some(
      (vehicle) =>
        vehicle.zone === formData.zone &&
        vehicle.vehicleClass === formData.vehicleClass &&
        vehicle.registrationNumber === formData.registrationNumber &&
        vehicle.chassisNumber === formData.chassisNumber
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Simulate BRTA check
    const isRegistered = checkBRTARegistration();
    if (!isRegistered) {
      setError("This vehicle is not found in BRTA records!");
      return;
    }

    // Save to LocalStorage
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicles.push({ id: Date.now(), ...formData });
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    setSuccess("Vehicle added successfully!");
    setTimeout(() => {
      navigate("/vehicle");
    }, 1000);
  };

  return (
    <div className="max-w-xl space-y-6">
      <header>
        <h2 className="text-2xl font-bold">Add Vehicle</h2>
        <p className="text-gray-600">
          Fill in the form below to add a new vehicle.
        </p>
      </header>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded">{error}</div>
      )}
      {success && (
        <div className="bg-green-100 text-green-600 p-3 rounded">{success}</div>
      )}

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
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
              required
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
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
              required
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
            Vehicle Full Registration Number
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="12-3456"
            maxLength="7"
            className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
            required
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
            className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-600 px-3 py-2"
            required
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

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Save Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
