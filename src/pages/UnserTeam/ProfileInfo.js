import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import { Hidden } from "@material-ui/core";

const StyledDiv = styled.div`
  h3 {
    font-size: 22px;
    color: ${colors.primaryRed};
  }

  h4 {
    font-size: 16px;
    text-transform: uppercase;
  }

  h3,
  h4,
  .since {
    font-family: OpenSansLight;
    text-align: center;
  }

  button {
    background: ${colors.primaryRed};
    padding: 12px 14px;
    margin-bottom: 40px;
    margin-top: 8px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

const Profileinfo = ({ member, idx, currentSlideIdx, slider }) => {
  const {
    name,
    seit,
    funktion,
    motivation,
    umweltschutz,
    recycling,
    einzigartig,
  } = member;

  const nextSlide = () => {
    slider.current.next();
  };
  const prevSlide = () => {
    slider.current.prev();
  };

  return (
    <Hidden key={`hidden-${idx}`} xsUp={idx !== currentSlideIdx}>
      <StyledDiv>
        <h3>{name}</h3>
        <h4>{funktion}</h4>
        <h5 className="since">
          <strong>Teammitglied: seit {seit}</strong>
        </h5>
        <div style={{ textAlign: "center" }}>
          <button onClick={prevSlide}>❮ Previous</button>
          <button onClick={nextSlide}>Next ❯</button>
        </div>
        <p style={{ marginTop: 20 }}>
          <strong>Darum arbeite ich für RED Struss: </strong>
          <br />
          {motivation}
        </p>
        <p>
          <strong>Mein Bezug zum Thema Umweltschutz: </strong>
          <br />
          {umweltschutz}
        </p>
        <p>
          <strong>So weit gehe ich beim Recycling: </strong>
          <br />
          {recycling}
        </p>
        <p>
          <strong>Das macht mich einzigartig: </strong>
          <br />
          {einzigartig}
        </p>
      </StyledDiv>
    </Hidden>
  );
};

export default Profileinfo;
