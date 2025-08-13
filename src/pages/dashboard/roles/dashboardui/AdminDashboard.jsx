const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <p className="text-gray-600">Total Users</p>
          <h2 className="text-3xl font-bold">1,200</h2>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <p className="text-gray-600">Total Revenue</p>
          <h2 className="text-3xl font-bold">৳5,40,000</h2>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <p className="text-gray-600">Pending Approvals</p>
          <h2 className="text-3xl font-bold">15</h2>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <ul className="space-y-2">
          <li className="p-3 border-b">System Audit Completed - 2025-08-10</li>
          <li className="p-3 border-b">Monthly Revenue Report Generated</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
