const SupportDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Support Dashboard</h1>

      {/* Open Disputes */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Open Disputes</h2>
        <ul className="space-y-2">
          <li className="p-3 border-b">Dispute #123 - Overcharged - Pending</li>
          <li className="p-3 border-b">
            Dispute #456 - Wrong Plaza Entry - Investigating
          </li>
        </ul>
      </div>

      {/* Support Tickets */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Support Tickets</h2>
        <ul className="space-y-2">
          <li className="p-3 border-b">Ticket #789 - Login Issue - Resolved</li>
          <li className="p-3 border-b">Ticket #101 - Payment Failed - Open</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportDashboard;
