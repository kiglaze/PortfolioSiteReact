const router = require("express").Router();
const siteListingRoutes = require("./siteListing");

// new routes
router.use("/siteListing", siteListingRoutes);

module.exports = router;
