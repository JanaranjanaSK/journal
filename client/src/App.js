import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
<Routes>
  <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/dashboard" element={user ? <Main /> : <Navigate to="/login" />} />
</Routes>

	);
}

export default App;
