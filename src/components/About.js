import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a dedicated web developer always so motivated to learn new skills and be able to apply them in various sectors as required.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
