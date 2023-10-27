import React from "react";
import "./AboutPadelTemplate.css";

function AboutPadelTemplate(props) {
  const { img, h1, p, marginTop } = props.padel;

  return (
    <div>
      <img src={img} alt="" className={`about-padel-banner ${marginTop}`} />
      <div className="about-padel-content">
        <h1>{h1}</h1>
        <div className="paragraph-container">
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPadelTemplate;
