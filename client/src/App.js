import "./styles/main.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Map from "./components/map/Map";
import About from "./components/About";
import Gallery from "./components/Card";
import Contact from "./components/ContactForm";
import BottomNav from "./components/BottomNav";
import Footer from "./components/FooterHome";

export default function App() {
  const [mobile, isMobile] = useState("false");

  window.onresize = function() {
    if (window.innerWidth < 768) {
      isMobile(true);
    }
  };

  if (mobile === true || window.innerWidth < 768) {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <BrowserRouter>
          <div>
            <Link to="/">
              <Navbar />
            </Link>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Map} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <BottomNav />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <BrowserRouter>
          <div>
            <Link to="/">
              <Navbar />
            </Link>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Map} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
// import ArtList from "./components/ArtLiyst";

// const url = "http://localhost:5000";
