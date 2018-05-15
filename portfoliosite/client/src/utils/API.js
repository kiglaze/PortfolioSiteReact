import axios from "axios";

// The getSiteListings method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getSiteListings: function(query) {
    return axios.get("/api/siteListing", { params: { q: query}});
  }
};
