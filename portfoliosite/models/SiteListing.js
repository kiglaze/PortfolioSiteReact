const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteListingSchema = new Schema({
  src: { type: String, required: true },
  description: { type: String, required: false },
  siteName: { type: String, required: true },
  siteContext: { type: String, required: false }
});

const SiteListing = mongoose.model("SiteListing", siteListingSchema);

module.exports = SiteListing;
