import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import "./css/Header.css";
import ManasikLogo from "../assets/ManasikLogo.png"

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="header">
      <div className="logo-title">
        <img src={ManasikLogo} alt="Manasik Logo" className="logo-img" />
        <span>Manasik</span>
      </div>

      <nav className="nav">
        <NavLink to="/home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/planner" className="nav-link">
          The Plan
        </NavLink>
        <NavLink to="/umrah-guide" className="nav-link">
          How to Perform Umrah
        </NavLink>
        <NavLink to="/yourplan" className="nav-link">
          Your Plan
        </NavLink>
      </nav>

      <div className="logout-container">
        <button
          className="logout-combined"
          onClick={() => setConfirmVisible(true)}
        >
          <FiLogOut className="logout-icon" />
          Log Out
        </button>

        {confirmVisible && (
          <>
            <div
              className="logout-overlay"
              onClick={() => setConfirmVisible(false)}
            />
            <div className="logout-popup">
              <p>Are you sure you want to log out?</p>
              <div className="popup-buttons">
                <button onClick={handleLogout}>Yes</button>
                <button onClick={() => setConfirmVisible(false)}>No</button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
