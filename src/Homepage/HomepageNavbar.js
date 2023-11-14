import React from "react";
import "./styles/HomepageNavbar.css"

function HomepageNavbar() {
  return (
    <header className="navbar">
      <div href="/" className="navbar-title navbar-item">Invi</div>
      <div href="/" className="navbar-item navbar-login">Login</div>
      <div href="/" className="navbar-item navbar-signup">Sign Up</div>
    </header>
  )
}

export default HomepageNavbar;

