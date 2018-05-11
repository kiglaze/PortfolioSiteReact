import React from "react";
import "./IconLink.css";

const IconLink = props => (
  <div className="icon-link">
    <a href={props.link} >
        <img src={props.image} className="icon" title={props.label} />
        <p>{props.label}</p>
    </a>
  </div>
);

export default IconLink;
