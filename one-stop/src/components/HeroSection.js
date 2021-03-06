import React from "react";
import "./HeroSection.css";
import "../App.css";
import "./Button.css";
import { SearchButton } from "./SearchButton";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video2.mp4" autoPlay loop muted />
      <h1>ONE STOP SHOP</h1>
      <p>Gigs for independent artists</p>
      <div className="hero-btns">
        <SearchButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SEARCH LISTINGS
        </SearchButton>

        <SearchButton
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LEARN MORE <i className="far fa-play-circle" />
        </SearchButton>
      </div>
    </div>
  );
}

export default HeroSection;
