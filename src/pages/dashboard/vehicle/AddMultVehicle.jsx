// AddMultVehicle.jsx
import React, { useState } from "react";
import * as XLSX from "xlsx";

const AddMultVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selected, setSelected] = useState([]);

  // Helper: Clean string (trim, lowercase)
  const clean = (value) => {
    if (value == null) return "";
    return String(value).trim().toLowerCase();
  };

  // Demo BRTA registered vehicles
  const brtaRegistered = [
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
      chassisNumber: "9876",
    },
  ];

  // Check if vehicle exists in BRTA
  const isRegistered = (vehicle) => {
    return brtaRegistered.some(
      (v) =>
        clean(v.zone) === clean(vehicle.zone) &&
        clean(v.vehicleClass) === clean(vehicle.vehicleClass) &&
        clean(v.registrationNumber) === clean(vehicle.registrationNumber) &&
        clean(v.chassisNumber) === clean(vehicle.chassisNumber)
    );
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);

      const formatted = data.map((row, index) => {
        const vehicle = {
          id: index + 1,
          zone: row.zone || "",
          vehicleClass: row.vehicleClass || "",
          registrationNumber: row.registrationNumber || "",
          chassisNumber: row.chassisNumber || "",
          vehicleName: row.vehicleName || "",
        };
        return { ...vehicle, registered: isRegistered(vehicle) };
      });

      setVehicles(formatted);
      setSelected([]);
    };
    reader.readAsBinaryString(file);
  };

  // Checkbox toggle
  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selected.length === vehicles.length) {
      setSelected([]);
    } else {
      setSelected(vehicles.map((v) => v.id));
    }
  };

  // Submit selected vehicles
  const handleSubmit = () => {
    const selectedVehicles = vehicles.filter((v) => selected.includes(v.id));
    const existing = JSON.parse(localStorage.getItem("vehicles")) || [];
    localStorage.setItem(
      "vehicles",
      JSON.stringify([...existing, ...selectedVehicles])
    );
    alert(`${selectedVehicles.length} vehicles added successfully!`);
    setVehicles([]);
    setSelected([]);
    window.location.href = "/vehicle";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Add Multiple Vehicles</h2>

      {/* Step Guide */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-green-800">
          Follow These Steps
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-green-700">
          <li>
            Download the{" "}
            <a
              href="/assets/vehicles-template.xlsx"
              download
              className="text-green-600 font-medium underline hover:text-green-800"
            >
              Vehicles Template
            </a>{" "}
            file.
          </li>
          <li>
            Open the file and fill in your vehicle details in the given columns:
            <strong>
              {" "}
              Zone, Vehicle Class, Registration Number, Chassis Number, Vehicle
              Name
            </strong>
            .
          </li>
          <li>Save the file after entering all vehicle data.</li>
          <li>Upload the completed file below to add your vehicles.</li>
        </ol>
      </div>

      {/* File upload UI */}
      <div className="max-w-lg">
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-green-500 transition">
          <svg
            className="w-10 h-10 text-gray-400 mb-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-3 3m3-3l3 3"
            />
          </svg>
          <p className="text-gray-600 font-medium">
            Click or drag & drop your Excel file
          </p>
          <p className="text-sm text-gray-400">(Only .xlsx, .xls)</p>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {vehicles.length > 0 && (
        <>
          {/* Table */}
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">
                  <input
                    type="checkbox"
                    checked={selected.length === vehicles.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="p-2 border">Zone</th>
                <th className="p-2 border">Class</th>
                <th className="p-2 border">Reg. Number</th>
                <th className="p-2 border">Chassis No.</th>
                <th className="p-2 border">Vehicle Name</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((v) => (
                <tr
                  key={v.id}
                  className={v.registered ? "bg-green-100" : "bg-red-100"}
                >
                  <td className="p-2 border text-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(v.id)}
                      onChange={() => toggleSelect(v.id)}
                    />
                  </td>
                  <td className="p-2 border">{v.zone}</td>
                  <td className="p-2 border">{v.vehicleClass}</td>
                  <td className="p-2 border">{v.registrationNumber}</td>
                  <td className="p-2 border">{v.chassisNumber}</td>
                  <td className="p-2 border">{v.vehicleName}</td>
                  <td className="p-2 border font-semibold">
                    {v.registered ? "Registered" : "Not Registered"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            disabled={selected.length === 0}
          >
            Submit Selected
          </button>
        </>
      )}
    </div>
  );
};

export default AddMultVehicle;
