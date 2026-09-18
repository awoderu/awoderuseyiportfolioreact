import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Hero from "./components/Hero";
import ProjectPage from "./pages/projects/projectpage";
import SubHeading from "./components/SubHeading";
// import Footer from "./components/Footer";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="min-h-screen bg-cream text-white flex flex-col justify-between">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/projectpage" element={<ProjectPage />} /> */}
              {/* <Route path="/hero" element={<Hero />} /> */}
            </Routes>
          </Router>
      </div>
  
  );
}

export default App;