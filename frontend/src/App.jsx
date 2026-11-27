import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import StudentDashboard from "./pages/student/StudentDashboard";
import FeedbackForm from "./pages/student/FeedbackForm";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/feedback/:id" element={<FeedbackForm />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
