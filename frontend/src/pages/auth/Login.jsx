import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "Student") {
      navigate("/student");
    } else if (role === "Faculty") {
      navigate("/faculty");
    } else if (role === "Admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">
          Faculty Feedback
        </h1>

        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full border p-3 rounded-lg mt-2 mb-4"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full border p-3 rounded-lg mt-2 mb-4"
          />

          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-3 rounded-lg mt-2 mb-5"
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Demo Access */}
        <div className="mt-6 border-t pt-5">
          <h2 className="text-center font-semibold mb-3">
            Explore Demo Dashboards
          </h2>

          <div className="grid grid-cols-3 gap-2">
            <Link
              to="/student"
              className="bg-blue-600 text-white text-center py-2 rounded-lg text-sm hover:bg-blue-700"
            >
              Student
            </Link>

            <Link
              to="/faculty"
              className="bg-green-600 text-white text-center py-2 rounded-lg text-sm hover:bg-green-700"
            >
              Faculty
            </Link>

            <Link
              to="/admin"
              className="bg-purple-600 text-white text-center py-2 rounded-lg text-sm hover:bg-purple-700"
            >
              Admin
            </Link>
          </div>

          <p className="text-center text-xs text-gray-500 mt-3">
            Explore the project without login credentials.
          </p>
        </div>

        {/* Registration Link */}
        <p className="text-center mt-5 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
