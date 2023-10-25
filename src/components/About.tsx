import React from "react";
import DrawingEvent from "./Layout/DrawingEvent";
import Gallery from "./Layout/Gallery";
import GardianCommets from "./Layout/GardianCommets";
import Teacher from "./Layout/Teacher";
import WelcomeKindergarten from "./Layout/WelcomeKindergarten";

const About = () => {
  return (
    <div>
      <WelcomeKindergarten />

      <DrawingEvent />

      <Teacher />

      <GardianCommets />

      <Gallery />
    </div>
  );
};

export default About;
