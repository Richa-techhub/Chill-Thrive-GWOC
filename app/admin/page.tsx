export default function AdminPage() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-900 mb-6">
          Chill Thrive Admin
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>Dashboard</li>
          <li>Services</li>
          <li>Combos</li>
          <li>Bookings</li>
          <li>Content</li>
          <li>Gallery</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-blue-900">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Bookings</p>
            <h3 className="text-2xl font-bold">124</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Active Services</p>
            <h3 className="text-2xl font-bold">6</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Revenue</p>
            <h3 className="text-2xl font-bold">₹82,000</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
