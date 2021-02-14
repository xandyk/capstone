import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-img" alt="">
          <div className="btn-container">
            <Link to="/map">
              <button className="hero-btn"> Explore more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
