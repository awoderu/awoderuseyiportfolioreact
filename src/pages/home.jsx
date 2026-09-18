import React from "react";
import Hero from "../components/Hero";
import ProjectPage from "./projects/projectpage"; 
import SubHeading from "../components/SubHeading";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectPage />
    </div>
  )
}

export default Home;
