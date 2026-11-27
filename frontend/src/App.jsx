import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import StudentDashboard from "./pages/student/StudentDashboard";
import FeedbackForm from "./pages/student/FeedbackForm";
import AdminDashboard from "./pages/admin/AdminDashboard";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Faculty Feedback Automation</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/feedback/:id" element={<FeedbackForm />} />
        <Route path="/faculty" element={<h1>Faculty Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
