import React from "react";
import "./SiteListing.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const SiteListing = props => (
  <div>
    <img src={props.image} />
    <a href={props.src} target="_blank" alt={props.siteName}>{props.src}</a>
    <p>{props.description}</p>
  </div>
);

export default SiteListing;
