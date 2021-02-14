import React from "react";
// import Upper from "../assets/icon/upper-mark.svg";
// import Lower from "../assets/icon/lower-mark.svg";

export default function Quote() {
  return (
    <>
      <div className="hero-text">
        {/* <img className="up" src={Upper} alt="" /> */}

        <p classNmae="hero-quote">
          <span className="creativity">Creativity</span> <br />
          takes courage
        </p>
        {/* <img className="down" src={Lower} alt="" /> */}
        <span className="hero-author">~ Henri Matisse</span>
        <div className="btn-container"></div>
      </div>
    </>
  );
}
