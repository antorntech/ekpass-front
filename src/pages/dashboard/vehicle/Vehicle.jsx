import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(data);
  }, []);

  const handleDelete = (id) => {
    const updated = vehicles.filter((v) => v.id !== id);
    localStorage.setItem("vehicles", JSON.stringify(updated));
    setVehicles(updated);
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
                      onClick={() => handleDelete(v.id)}
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
    </div>
  );
};

export default Vehicle;
