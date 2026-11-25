import { Link } from "react-router-dom";
import { GraduationCap, LogOut } from "lucide-react";

function StudentDashboard() {
  const feedbackForms = [
    {
      id: 1,
      subject: "Data Structures and Algorithms",
      faculty: "Dr. Rahul Kumar",
      status: "Pending",
    },
    {
      id: 2,
      subject: "Database Management System",
      faculty: "Prof. Shipra Gautam",
      status: "Pending",
    },
    {
      id: 3,
      subject: "Operating Systems",
      faculty: "Dr. Shweta Singh",
      status: "Submitted",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white p-5 shadow">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-blue-600" />
          <h1 className="text-xl font-bold">Faculty Feedback</h1>
        </div>

        <button className="flex items-center gap-2 text-gray-600">
          <LogOut size={18} />
          Logout
        </button>
      </nav>

      {/* Dashboard */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Student Dashboard</h2>

        <p className="text-gray-500 mb-6">
          View and submit your faculty feedback.
        </p>

        {/* Feedback Forms */}
        <div className="bg-white rounded-lg p-5 shadow">
          <h3 className="text-lg font-bold mb-4">Available Feedback Forms</h3>

          {feedbackForms.map((form) => (
            <div
              key={form.id}
              className="border rounded-lg p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold">{form.subject}</h4>

                <p className="text-sm text-gray-500">Faculty: {form.faculty}</p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={
                    form.status === "Pending"
                      ? "text-orange-600"
                      : "text-green-600"
                  }
                >
                  {form.status}
                </span>

                {form.status === "Pending" && (
                  <Link
                    to={`/student/feedback/${form.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Give Feedback
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
