import React from "react";
import { Link } from "react-router-dom"; 
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <h1 className="home-title">Manasik: Umrah Planner</h1>
        <p className="home-subtitle">
          Plan your spiritual journey to the holy city of Makkah with our personalized Umrah planner.
          Get recommendations for accommodation, transportation, and historical sites.
        </p>
        <Link to="/planner" className="home-button">
          + Create a Plan
        </Link>
      </div>
    </div>
  );
};

export default Home;
