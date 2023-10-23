import React from "react";
import "./AboutPadelTemplate.css";

function AboutPadelTemplate(props) {
  const { img, h1, p } = props.padel;

  return (
    <div>
      <img src={img} alt="" className="about-padel-banner" />
      <div className="about-padel-content">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default AboutPadelTemplate;
