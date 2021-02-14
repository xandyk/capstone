import React from "react";
import Community from "../assets/icon/community.svg";
import Map from "../assets/icon/map.svg";
import Calendar from "../assets/icon/calendar.svg";

export default function Icons() {
  return (
    <>
      <section className="section-container">
        <div className="card-wrapper">
          <div className="card-one">
            <img classNmame="card-icon" src={Community} alt="" />
            <h6>Support Community</h6>
          </div>

          <div className="card-two">
            <img classNmame="card-icon" src={Map} alt="" />
            <h6>Explore Vancouver</h6>
          </div>

          <div className="card-three">
            <img classNmame="card-icon" src={Calendar} alt="" />
            <h6>Mural Festival</h6>
          </div>
        </div>
      </section>
    </>
  );
}
