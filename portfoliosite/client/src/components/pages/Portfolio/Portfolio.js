import React from "react";
import SiteListing from "./../../SiteListing";

const Portfolio = props => (
  <div>
    <h1>Portfolio Page</h1>
    <h2>Sample sites from Web Development Bootcamp</h2>
    <SiteListing
        src="https://kiglaze.github.io/Bootstrap-Portfolio/portfolio.html"
        description="Old version of this site."
    />
    <SiteListing
        src="https://calm-mountain-94353.herokuapp.com/"
        description="Intended to keep track of belongings. Utilizes Sequelize."
    />
    <SiteListing
        src="https://vaijineel.github.io/BigFishSmallFish/"
        description="Whimsical game utilizing Google Maps API and Firebase."
    />
    <SiteListing
        src="https://kiglaze.github.io/week-4-game/"
        description="Simple game. CSS and Javascript; nothing too fancy."
    />
    <h2>Sample sites from work at Kadro Solutions</h2>
    <SiteListing
        src="https://audioadvice.com"
        description="Audio Advice"
    />
    <SiteListing
        src="https://www.reeds.com"
        description="REEDS"
    />
  </div>
);

export default Portfolio;
