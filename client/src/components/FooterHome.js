import React, { Component } from "react";
import Instagram from "../assets/icon/ig-white.svg";
import Facebook from "../assets/icon/fb-white.svg";
import FoxLogo from "../assets/icon/hoppin-logo.svg";
import Linkedin from "../assets/icon/linkedin.svg";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer">
          <div className="logo-wrap">
            <img className="footer-logo" src={FoxLogo} alt="" />
          </div>
          <div className="office-social">
            <div className="office-wrap">
              <h6 className="footer-title">OFFICE</h6>
              <p className="footer-address">
                583 Abbott Street <br />
                Vancouver, BC V6B 2F7
              </p>
              <br />
              <p className="footer-tel">+1 604 936.2080</p>
            </div>

            <div className="social-wrap">
              <h6 className="footer-title social">SOCIAL</h6>
              <a href="https://www.instagram.com/sandyhkuan/">
                <img className="social-account" src={Instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/sandykuan/">
                <img className="social-account" src={Linkedin} alt="" />
              </a>
              <a href="https://facebook.com/">
                <img className="social-account" src={Facebook} alt="" />
              </a>
            </div>
          </div>
        </footer>
        <section className="section">
          <div className="copyright">© 2019 Copyright hoppin</div>
        </section>
      </>
    );
  }
}
