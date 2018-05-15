const router = require("express").Router();
const siteListingController = require("./../../controllers/siteListingController");

// Matches with "/api/siteListing"
router.route("/")
  .get(siteListingController.findAll)
  .post(siteListingController.create);

// Matches with "/api/siteListing/:id"
router
  .route("/:id")
  .get(siteListingController.findById)
  .put(siteListingController.update)
  .delete(siteListingController.remove);

module.exports = router;

