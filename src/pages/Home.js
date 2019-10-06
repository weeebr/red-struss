import React from "react";
import unternehmenImage from "../assets/images/home/KMU_Recycling_Standard.webp";
import privaterHaushaltImage from "../assets/images/home/Privat_Recycling_Basic.webp";
import eventVeranstalterImage from "../assets/images/home/Privat_Recycling_Event.webp";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Entdecken Sie die passende Dienstleistung für Sie als ...</p>
      <img src={unternehmenImage} alt="Unternehmen" />
      <img src={privaterHaushaltImage} alt="privater Haushalt" />
      <img src={eventVeranstalterImage} alt="Event-Veranstalter" />
    </>
  );
};

export default Home;
