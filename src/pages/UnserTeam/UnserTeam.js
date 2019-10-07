import React from "react";
import mitarbeiter from "../../assets/data/mitarbeiter";
import styled from "styled-components";
import { typography } from "../../theme/index";
import { getImage } from "./ProfileImages";
import Image from "../../generic-components/Image";

const StyledTeamMember = styled.div`
  background: rgb(230, 230, 230);
  padding: 20px;
  margin-bottom: 40px;

  img {
    border-radius: 50%;
    border: 12px solid white;
  }
`;

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
    <StyledTeamMember>
      <h3 style={typography.titel}>{name}</h3>
      <Image src={getImage(name)} />
      <p>
        <strong>Teammitglied: seit {seit}</strong>
      </p>
      <p>
        <strong>Funktion: {funktion}</strong>
      </p>
      <p style={{ marginTop: 20 }}>
        <strong>Darum arbeite ich für RED Struss: </strong>
        {motivation}
      </p>
      <p>
        <strong>Mein Bezug zum Thema Umweltschutz: </strong>
        {umweltschutz}
      </p>
      <p>
        <strong>So weit gehe ich beim Recycling: </strong>
        {recycling}
      </p>
      <p>
        <strong>Das macht mich einzigartig: </strong>
        {einzigartig}
      </p>
    </StyledTeamMember>
  );
};

const UnserTeam = () => {
  return (
    <>
      <h1>Unser Team</h1>
      {mitarbeiter.map((m, idx) => (
        <TeamMember key={idx} member={m} />
      ))}
    </>
  );
};

export default UnserTeam;
