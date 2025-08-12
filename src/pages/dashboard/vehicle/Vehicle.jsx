import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(data);
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleDelete = () => {
    const updated = vehicles.filter((v) => v.id !== deleteId);
    localStorage.setItem("vehicles", JSON.stringify(updated));
    setVehicles(updated);
    setShowModal(false);
    setDeleteId(null);
  };

  const handleDownloadLog = () => {
    alert("Log history downloading... (implement download logic here)");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h2 className="text-xl sm:text-2xl font-bold">My Vehicles</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/vehicle/add/csv"
            className="bg-orange-600 text-white text-sm px-3 py-2 rounded-md hover:bg-orange-700 flex items-center"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            Add CSV
          </Link>
          <Link
            to="/vehicle/add"
            className="bg-green-600 text-white text-sm px-3 py-2 rounded-md hover:bg-green-700 flex items-center"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            Add Vehicle
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm w-full">
        {/* Desktop view */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-[700px] w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 text-sm">
                <th className="p-3 whitespace-nowrap">Zone</th>
                <th className="p-3 whitespace-nowrap">Class</th>
                <th className="p-3 whitespace-nowrap">Reg. Number</th>
                <th className="p-3 whitespace-nowrap">Chassis</th>
                <th className="p-3 whitespace-nowrap">Name</th>
                <th className="p-3 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length > 0 ? (
                vehicles.map((v) => (
                  <tr
                    key={v.id}
                    className="border-b border-gray-200 hover:bg-gray-50 text-sm"
                  >
                    <td className="p-3 whitespace-nowrap">{v.zone}</td>
                    <td className="p-3 whitespace-nowrap">{v.vehicleClass}</td>
                    <td className="p-3 whitespace-nowrap">
                      {v.registrationNumber}
                    </td>
                    <td className="p-3 whitespace-nowrap">{v.chassisNumber}</td>
                    <td className="p-3 whitespace-nowrap">{v.vehicleName}</td>
                    <td className="p-3 flex gap-2 whitespace-nowrap">
                      <button className="cursor-pointer bg-gray-400 flex items-center justify-center rounded p-2 text-white hover:bg-blue-600 transition">
                        <FontAwesomeIcon icon={faEye} className="text-sm" />
                      </button>
                      <Link
                        to={`/vehicle/edit/${v.id}`}
                        className="cursor-pointer bg-gray-400 flex items-center justify-center rounded p-2 text-white hover:bg-green-600 transition"
                        title="You can only edit vehicle name"
                      >
                        <FontAwesomeIcon icon={faPen} className="text-sm" />
                      </Link>
                      <button
                        onClick={() => confirmDelete(v.id)}
                        className="cursor-pointer bg-gray-400 flex items-center justify-center rounded p-2 text-white hover:bg-red-600 transition"
                      >
                        <FontAwesomeIcon icon={faTrash} className="text-sm" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">
                    No vehicles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="block sm:hidden space-y-4">
          {vehicles.length > 0 ? (
            vehicles.map((v) => (
              <div
                key={v.id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
              >
                <div className="text-sm">
                  <strong>Zone:</strong> {v.zone}
                </div>
                <div className="text-sm">
                  <strong>Class:</strong> {v.vehicleClass}
                </div>
                <div className="text-sm">
                  <strong>Reg. Number:</strong> {v.registrationNumber}
                </div>
                <div className="text-sm">
                  <strong>Chassis:</strong> {v.chassisNumber}
                </div>
                <div className="text-sm">
                  <strong>Name:</strong> {v.vehicleName}
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="bg-gray-400 flex items-center justify-center rounded p-2 text-white hover:bg-blue-600 transition">
                    <FontAwesomeIcon icon={faEye} className="text-sm" />
                  </button>
                  <Link
                    to={`/vehicle/edit/${v.id}`}
                    className="bg-gray-400 flex items-center justify-center rounded p-2 text-white hover:bg-green-600 transition"
                    title="You can only edit vehicle name"
                  >
                    <FontAwesomeIcon icon={faPen} className="text-sm" />
                  </Link>
                  <button
                    onClick={() => confirmDelete(v.id)}
                    className="bg-gray-400 flex items-center justify-center rounded p-2 text-white hover:bg-red-600 transition"
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-sm" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No vehicles found.</p>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
              ⚠ Delete Vehicle
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              Are you sure you want to delete this vehicle? This action cannot
              be undone.
            </p>
            <div className="bg-gray-100 p-3 rounded-md mb-4 text-orange-500 text-sm">
              If you want to download the log history, click the button below.
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <button
                onClick={handleDownloadLog}
                className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm flex items-center justify-center gap-1"
              >
                <FontAwesomeIcon icon={faDownload} />
                Log History
              </button>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="cursor-pointer bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicle;
