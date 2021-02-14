import React from "react";
import Avatar1 from "../assets/img/me1.jpg";
import Avatar2 from "../assets/img/me.jpg";

const About = () => {
  return (
    <>
      <h5 className="about-header">Meet The Team</h5>
      <section className="about-wrap">
        <div className="developer-container">
          <img className="avatar developer" src={Avatar1} alt="" />
          <h5 className="about-name">Sandy</h5>
          <span className="about-title">Web Developer</span>
          <p className="about-description">
            Hi 👋 I am Sandy, the developer of hoppin. If this is your first
            time visiting Vancouver, I hope you enjoy the art scene of the city
            and find this site informative! If you are local, please support the
            Vancouver artists because without them, our city is not vibrant and
            joyful!
          </p>
        </div>

        <div className="designer-container">
          <img className="avatar designer" src={Avatar2} alt="" />
          <h5 className="about-name">Sandra</h5>
          <span className="about-title">Web Designer</span>
          <p className="about-description">
            Hello there! I am the designer of the team. I am so excited to share
            this site with you. 😊 We have about 100 murals in the city and the
            number is growing! Come check out the 2020 Vancouver Mural Festival
            in August. It's gonna be awesome!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
