export default function Settings() {
    return (
      <div className="p-6 max-w-3xl mx-auto  font-inter">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
  
        {/* Profile Settings */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
          <label className="block mb-2 text-sm font-medium">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter full name"
          />
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter email"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Save Changes
          </button>
        </div>
  
        {/* Security Settings */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Security</h2>
          <label className="block mb-2 text-sm font-medium">Change Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mb-4"
            placeholder="New password"
          />
          <input
            type="password"
            className="w-full p-2 border rounded mb-4"
            placeholder="Confirm new password"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Update Password
          </button>
        </div>
  
        {/* Notification Settings */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>Email Notifications</span>
          </label>
          <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>SMS Alerts</span>
          </label>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Preferences
          </button>
        </div>
      </div>
    );
  }
  