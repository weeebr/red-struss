import React from "react";
import mitarbeiter from "../../assets/data/mitarbeiter";
import Slider from "./Slider";

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

shuffleArray(mitarbeiter);

const UnserTeam = () => {
  return (
    <>
      <h1>Unser Team</h1>
      <Slider mitarbeiter={mitarbeiter} />
    </>
  );
};

export default UnserTeam;
