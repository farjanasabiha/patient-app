export default function RNReportsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          RN Reports
        </h1>
      </div>
      
      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Patient Care Reports</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-blue-50 rounded border hover:bg-blue-100">
                Daily Care Summary
              </button>
              <button className="w-full text-left p-3 bg-blue-50 rounded border hover:bg-blue-100">
                Weekly Progress Report
              </button>
              <button className="w-full text-left p-3 bg-blue-50 rounded border hover:bg-blue-100">
                Monthly Assessment
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Administrative Reports</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-green-50 rounded border hover:bg-green-100">
                Staff Performance
              </button>
              <button className="w-full text-left p-3 bg-green-50 rounded border hover:bg-green-100">
                Resource Utilization
              </button>
              <button className="w-full text-left p-3 bg-green-50 rounded border hover:bg-green-100">
                Compliance Reports
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Report Generation</h3>
          <p className="text-gray-600">
            Select the type of report you want to generate and configure the parameters.
          </p>
        </div>
      </div>
    </div>
  );
}
