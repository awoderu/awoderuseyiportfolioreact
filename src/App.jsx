import Navbar from "./components/Navbar";
import Home from "./pages/home";
import ProjectPage from "./pages/projects/projectpage";
import ProjectGallery from "./components/Project";
// import Project from "./components/Project";
// import Cube from "./pages/cube";
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
              {/* <Route path="/cube" element={<Cube />} /> */}
              <Route path="/Project" element={<ProjectGallery />} />
              <Route path="/ProjectPage" element={<ProjectPage />} />
              {/* <Route path="/Project" element={<Project />} /> */}
              {/* <Route path="/hero" element={<Hero />} /> */}
            </Routes>
          </Router>
      </div>
  
  );
}

export default App;