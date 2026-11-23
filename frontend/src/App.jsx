import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Faculty Feedback Automation</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
        <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
        <Route path="/student" element={<h1>Student Dashboard</h1>} />
        <Route path="/faculty" element={<h1>Faculty Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
