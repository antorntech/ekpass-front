import React, { useState } from "react";
import * as XLSX from "xlsx";

const AddMultVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selected, setSelected] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Helper function to normalize text
  const clean = (value) =>
    value == null ? "" : String(value).trim().toLowerCase();

  // Dummy BRTA registered list
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

  // Check if vehicle is registered in BRTA list
  const isRegistered = (vehicle) => {
    return brtaRegistered.some(
      (v) =>
        clean(v.zone) === clean(vehicle.zone) &&
        clean(v.vehicleClass) === clean(vehicle.vehicleClass) &&
        clean(v.registrationNumber) === clean(vehicle.registrationNumber) &&
        clean(v.chassisNumber) === clean(vehicle.chassisNumber)
    );
  };

  // File upload and parsing
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
        return {
          ...vehicle,
          registered: isRegistered(vehicle),
          errorReason: isRegistered(vehicle)
            ? ""
            : "Vehicle Registration Number do not match BRTA records.",
        };
      });

      setVehicles(formatted);
      setSelected([]);
    };
    reader.readAsBinaryString(file);
  };

  // Download Excel template
  const downloadTemplate = () => {
    const ws = XLSX.utils.json_to_sheet([
      {
        zone: "Dhaka Metro",
        vehicleClass: "Ka(ক)",
        registrationNumber: "12-3456",
        chassisNumber: "1234",
        vehicleName: "Toyota Corolla",
      },
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, "vehicle_template.xlsx");
  };

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const toggleSelectAll = () => {
    const verifiedOnly = vehicles.filter((v) => v.registered).map((v) => v.id);
    if (selected.length === verifiedOnly.length) {
      setSelected([]);
    } else {
      setSelected(verifiedOnly);
    }
  };

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

      {/* Download Template */}
      {/* <button
        onClick={downloadTemplate}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Excel Template
      </button> */}

      {/* File upload */}
      <div className="max-w-lg">
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-green-500 transition">
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
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">
                  <input
                    type="checkbox"
                    checked={
                      selected.length ===
                      vehicles.filter((v) => v.registered).length
                    }
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
                <tr key={v.id}>
                  <td className="p-2 border text-center">
                    <input
                      type="checkbox"
                      disabled={!v.registered}
                      checked={selected.includes(v.id)}
                      onChange={() => toggleSelect(v.id)}
                    />
                  </td>
                  <td className="p-2 border">{v.zone}</td>
                  <td className="p-2 border">{v.vehicleClass}</td>
                  <td className="p-2 border">{v.registrationNumber}</td>
                  <td className="p-2 border">{v.chassisNumber}</td>
                  <td className="p-2 border">{v.vehicleName}</td>
                  <td className="p-2 border text-center">
                    {v.registered ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                        Verified
                      </span>
                    ) : (
                      <button
                        className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
                        onClick={() => {
                          setErrorMessage(v.errorReason);
                          setShowModal(true);
                        }}
                      >
                        Not Verified
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            disabled={selected.length === 0}
          >
            Submit Selected
          </button>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm">
            <h3 className="text-lg font-bold mb-4 text-red-600">
              Verification Failed
            </h3>
            <p className="text-gray-700 mb-4">{errorMessage}</p>
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMultVehicle;
