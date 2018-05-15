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
    src: "https://calm-mountain-94353.herokuapp.com/",
    description: "Intended to keep track of belongings. Utilizes Sequelize.",
    siteName: "Find My Stuff"
  },
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
