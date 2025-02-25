import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SelectUser from "../pages/SelectUser";
import Profile from "../pages/Profile";

function App() {
  return (
      <div className="app">
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<SelectUser />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;