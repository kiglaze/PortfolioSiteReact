const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the News collection and inserts the news below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfoliosite",
  {
    useMongoClient: true
  }
);

const siteListingSeed = [
  {
    src: "https://kiglaze.github.io/Bootstrap-Portfolio/portfolio.html",
    description: "Old version of this site.",
    siteName: "Old Portfolio Site",
    siteContext: "bootcamp"
  },
  {
    src: "https://calm-mountain-94353.herokuapp.com/",
    description: "Intended to keep track of belongings. Utilizes Sequelize.",
    siteName: "Find My Stuff",
    siteContext: "bootcamp"
  },
  {
    src: "https://vaijineel.github.io/BigFishSmallFish/",
    description: "Whimsical game utilizing Google Maps API and Firebase.",
    siteName: "Big Fish Game",
    siteContext: "bootcamp"
  },
  {
    src: "https://kiglaze.github.io/week-4-game/",
    description: "Simple game. CSS and Javascript; nothing too fancy.",
    siteName: "Gem Points Game",
    siteContext: "bootcamp"
  },
  {
    src: "https://audioadvice.com",
    description: "Audio Advice",
    siteName: "Audio Advice",
    siteContext: "kadro"
  },
  {
    src: "https://www.reeds.com",
    description: "REEDS",
    siteName: "REEDS Jewelers",
    siteContext: "kadro"
  }
];

db.SiteListing
  .remove({})
  .then(() => db.SiteListing.collection.insertMany(siteListingSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
