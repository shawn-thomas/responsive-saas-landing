import React from "react";
import inviLogo from "../images/InviLogo.svg";
import "./styles/HomepageNavbar.css";

function HomepageNavbar() {
  return (
    <header className="navbar">
      <div href="/" className="navbar-title navbar-item">
        <img className="navbar-logo" src={inviLogo} alt="invi-logo" />
      </div>
      <div href="/" className="navbar-item navbar-login">Login</div>
      <div href="/" className="navbar-item navbar-signup">Sign Up</div>
    </header>
  );
}

export default HomepageNavbar;

