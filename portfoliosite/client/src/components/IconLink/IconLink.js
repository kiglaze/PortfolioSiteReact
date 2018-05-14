import React from "react";
import "./IconLink.css";

const IconLink = props => (
  <div className="icon-link">
    <a href={props.link} target="_blank" >
        <img src={props.image} className="icon" title={props.label} alt={props.label} />
    </a>
  </div>
);

export default IconLink;
