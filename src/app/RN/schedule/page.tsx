export default function RNSchedulePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          RN Schedule
        </h1>
      </div>
      
      <div className="flex-1">
        <div className="bg-white rounded-lg border shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-lg mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-medium">Patient Visit - John Doe</h4>
                <p className="text-sm text-gray-600">Routine checkup and medication review</p>
              </div>
              <span className="text-sm font-medium text-blue-600">9:00 AM</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium">Patient Visit - Jane Smith</h4>
                <p className="text-sm text-gray-600">Post-surgery follow-up</p>
              </div>
              <span className="text-sm font-medium text-green-600">11:30 AM</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div>
                <h4 className="font-medium">Team Meeting</h4>
                <p className="text-sm text-gray-600">Weekly care coordination meeting</p>
              </div>
              <span className="text-sm font-medium text-orange-600">2:00 PM</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Upcoming Assignments</h3>
            <p className="text-gray-600">View and manage upcoming patient assignments.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Schedule Requests</h3>
            <p className="text-gray-600">Submit time-off requests and schedule changes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
