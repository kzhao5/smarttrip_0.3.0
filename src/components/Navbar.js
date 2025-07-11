import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../services/authService";
import "../styles/navbar.css";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      onLogout();
      navigate("/auth");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Travel Guide
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/recommendations" className="navbar-link">
            Recommendations
          </Link>
          <Link to="/itinerary" className="navbar-link">
            Itinerary
          </Link>
        </div>
        
        <div className="navbar-user">
          {user && (
            <>
              <span className="user-welcome">
                Welcome, {user.get("username")}
              </span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 