import React from "react";
import "./HeroSection.css";
import "../App.css";
import "./Button.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video2.mp4" autoPlay loop muted />
      <h1>ONE STOP MUSIC</h1>
      <p>Gig listings for independent music artist</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SEARCH LISTINGS
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LEARN MORE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
