import React, { Component } from "react";
import SiteListing from "./../../SiteListing";
import API from "./../../../utils/API";

class Portfolio extends Component {
    state = {
        siteListings: []
    };

    componentDidMount() {
        this.loadSiteListings();
    }

    loadSiteListings = () => {
        API.getSiteListings()
          .then(res => {
            this.setState({ siteListings: res.data })
          })
          .catch(err => console.log(err));
      };

    render() {
        return(
            <div>
                <h1>Portfolio Page</h1>
                <h2>Sample sites from Web Development Bootcamp</h2>
                {this.state.siteListings.map(siteListing => {
                    console.log(siteListing.src);
                    return (
                        <SiteListing
                        src={siteListing.src}
                        description={siteListing.description}
                        siteName={siteListing.siteName}
                    />
                    )
                })}
                <SiteListing
                    src="https://kiglaze.github.io/Bootstrap-Portfolio/portfolio.html"
                    description="Old version of this site."
                    siteName="Old Portfolio Site"
                />
                <SiteListing
                    src="https://calm-mountain-94353.herokuapp.com/"
                    description="Intended to keep track of belongings. Utilizes Sequelize."
                    siteName="Find My Stuff"
                />
                <SiteListing
                    src="https://vaijineel.github.io/BigFishSmallFish/"
                    description="Whimsical game utilizing Google Maps API and Firebase."
                    siteName="Big Fish Game"
                />
                <SiteListing
                    src="https://kiglaze.github.io/week-4-game/"
                    description="Simple game. CSS and Javascript; nothing too fancy."
                    siteName="Gem Points Game"
                />
                <h2>Sample sites from work at Kadro Solutions</h2>
                <SiteListing
                    src="https://audioadvice.com"
                    description="Audio Advice"
                    siteName="Audio Advice"
                />
                <SiteListing
                    src="https://www.reeds.com"
                    description="REEDS"
                    siteName="REEDS Jewelers"
                />
            </div>
        );
    }
}

export default Portfolio;
