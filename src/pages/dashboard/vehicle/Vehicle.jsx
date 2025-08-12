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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Vehicles</h2>
        <div className="flex gap-2">
          <Link
            to="/vehicle/add/csv"
            className="bg-orange-600 text-white text-sm p-2 rounded-md hover:bg-orange-700"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            Add CSV
          </Link>
          <Link
            to="/vehicle/add"
            className="bg-green-600 text-white text-sm p-2 rounded-md hover:bg-green-700"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            Add Vehicle
          </Link>
        </div>
      </div>

      <div className="p-6 rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Zone</th>
              <th className="p-3">Class</th>
              <th className="p-3">Reg. Number</th>
              <th className="p-3">Chassis</th>
              <th className="p-3">Name</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length > 0 ? (
              vehicles.map((v) => (
                <tr
                  key={v.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-3">{v.zone}</td>
                  <td className="p-3">{v.vehicleClass}</td>
                  <td className="p-3">{v.registrationNumber}</td>
                  <td className="p-3">{v.chassisNumber}</td>
                  <td className="p-3">{v.vehicleName}</td>
                  <td className="p-3 flex gap-2">
                    <button className="bg-gray-300 cursor-pointer flex items-center justify-center rounded p-2 text-white hover:bg-blue-700">
                      <FontAwesomeIcon icon={faEye} className="text-sm" />
                    </button>
                    <Link
                      to={`/vehicle/edit/${v.id}`}
                      className="bg-gray-300 cursor-pointer flex items-center justify-center rounded p-2 text-white hover:bg-green-700"
                      title="You can only edit vehicle name"
                    >
                      <FontAwesomeIcon icon={faPen} className="text-sm" />
                    </Link>
                    <button
                      onClick={() => confirmDelete(v.id)}
                      className="bg-gray-300 cursor-pointer flex items-center justify-center rounded p-2 text-white hover:bg-red-700"
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

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-bold text-red-600 mb-2">
              ⚠ Delete Vehicle
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              Are you sure you want to delete this vehicle? This action cannot
              be undone.
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-4 text-orange-400">
              If you want to download the log history, click the button below.
            </div>
            <div className="flex justify-between gap-2">
              <button
                onClick={handleDownloadLog}
                className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm"
              >
                <FontAwesomeIcon icon={faDownload} />
                Log History
              </button>
              <div className="flex gap-2">
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
