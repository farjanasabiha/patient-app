export default function RNDashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          RN Dashboard
        </h1>
      </div>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Cards */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-lg text-blue-800 mb-2">
            Active Patients
          </h3>
          <p className="text-blue-600">
            Overview of currently active patients under RN care.
          </p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg text-green-800 mb-2">
            Care Plans
          </h3>
          <p className="text-green-600">
            Manage and review patient care plans and protocols.
          </p>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-lg text-purple-800 mb-2">
            Reports
          </h3>
          <p className="text-purple-600">
            Generate and view nursing reports and analytics.
          </p>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-lg text-orange-800 mb-2">
            Schedules
          </h3>
          <p className="text-orange-600">
            View and manage RN schedules and assignments.
          </p>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="font-semibent text-lg text-red-800 mb-2">
            Alerts
          </h3>
          <p className="text-red-600">
            Critical alerts and notifications for immediate attention.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Resources
          </h3>
          <p className="text-gray-600">
            Access to nursing resources and documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
