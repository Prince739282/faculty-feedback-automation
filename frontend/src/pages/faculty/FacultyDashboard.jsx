import { Link } from "react-router-dom";

function FacultyDashboard() {
  const feedbackData = [
    {
      id: 1,
      subject: "Data Structures and Algorithms",
      responses: 45,
      rating: 4.5,
    },
    {
      id: 2,
      subject: "Database Management System",
      responses: 40,
      rating: 4.2,
    },
    {
      id: 3,
      subject: "Operating Systems",
      responses: 38,
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center bg-white p-5 shadow">
        <h1 className="text-xl font-bold text-blue-600">Faculty Feedback</h1>

        <Link to="/login" className="text-red-600">
          Logout
        </Link>
      </nav>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Faculty Dashboard</h2>

        <p className="text-gray-500 mb-6">
          View your subject-wise student feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white p-5 rounded-lg shadow">
            <p className="text-gray-500">Total Responses</p>
            <h3 className="text-3xl font-bold mt-2">123</h3>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <p className="text-gray-500">Overall Average Rating</p>
            <h3 className="text-3xl font-bold mt-2 text-green-600">4.5 / 5</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Subject-wise Feedback</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-3">Subject</th>
                  <th className="p-3">Responses</th>
                  <th className="p-3">Average Rating</th>
                </tr>
              </thead>

              <tbody>
                {feedbackData.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">{item.subject}</td>
                    <td className="p-3">{item.responses}</td>
                    <td className="p-3 font-semibold text-green-600">
                      {item.rating} / 5
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;
