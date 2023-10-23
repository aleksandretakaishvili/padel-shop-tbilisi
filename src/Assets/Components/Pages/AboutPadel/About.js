import React from "react";
import "./About.css";
import AboutPadelTemplate from "../../Blocks/AboutPadelTemplate/AboutPadelTemplate";
import aboutData from "../../../Data/aboutPadelData";

function AboutPadel() {
  const padelsData = aboutData.about;
  return (
    <main>
      {padelsData.map((padelData) => (
        <AboutPadelTemplate key={padelData.length} padel={padelData} />
      ))}
    </main>
  );
}

export default AboutPadel;
