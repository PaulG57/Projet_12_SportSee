import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Sidebar />
        <main className="content">
            <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;
