import React from "react";
import mitarbeiter from "../assets/data/mitarbeiter";

const TeamMember = ({ member }) => {
  const {
    name,
    seit,
    funktion,
    motivation,
    umweltschutz,
    recycling,
    einzigartig,
  } = member;

  return (
    <>
      <p>
        <strong>Ich heisse...</strong>
        {name}
      </p>
      <p>
        <strong>Ich bin Teammitglied seit...</strong>
        {seit}
      </p>
      <p>
        <strong>Bei RED Struss kümmere ich mich um...</strong>
        {funktion}
      </p>
      <p>
        <strong>Darum arbeite ich für RED Struss:</strong>
        {motivation}
      </p>
      <p>
        <strong>Mein Bezug zum Thema Umweltschutz:</strong>
        {umweltschutz}
      </p>
      <p>
        <strong>So weit gehe ich beim Recycling:</strong>
        {recycling}
      </p>
      <p>
        <strong>Das macht mich einzigartig:</strong>
        {einzigartig}
      </p>
    </>
  );
};

const UnserTeam = () => {
  return (
    <>
      <h1>Unser Team</h1>
      {mitarbeiter.map(m => (
        <TeamMember key={m} member={m} />
      ))}
    </>
  );
};

export default UnserTeam;
