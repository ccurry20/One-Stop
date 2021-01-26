import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>ARTISTS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/rapper.jpg"
              text="Local Rapper?"
              label="Hip Hop"
              path="/search"
            />
            <CardItem
              src="images/singer.jpg"
              text="Singer?"
              label="Singers"
              path="/search"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/models3.jpg"
              text="Actor/Actress/Model?"
              label="Acting"
              path="/search"
            />
            <CardItem
              src="/images/dancer.jpg"
              text="Dancer?"
              label="Dancer"
              path="/search"
            />
            <CardItem
              src="images/musician.jpg"
              text="Musician or Producer?"
              label="Musician"
              path="/search"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
