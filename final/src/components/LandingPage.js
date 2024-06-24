import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="content">
      <div className="LandingPage">
        <div className="LandingPage-content">
          <h1 className="LandingPage__title">Welcome to Ski Shop</h1>
          <p className="LandingPage__text">Let's hit the slope!</p>
          <Link className="LandingPage__link" to="/products">
            Get yours now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
