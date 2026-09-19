import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Project from "./components/Project";
// import Footer from "./components/Footer";
import './index.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";


function App() {
  return (
    <div className="min-h-screen bg-cream text-white flex flex-col justify-between">
          <Router>
            <Navbar />
            <ScrollToHash />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              {/* <Route path="/Project" element={<Project />} /> */}
              {/* <Route path="/hero" element={<Hero />} /> */}
            </Routes>
          </Router>
      </div>
  
  );
}

export default App;