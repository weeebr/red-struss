import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import { getImage } from "./ProfileImages";
import Image from "../../generic-components/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Hidden } from "@material-ui/core";

const StyledSlide = styled.div`
  padding: 20px;
  margin-right: 60px;

  &&& img {
    border-radius: 50%;
    border: 12px solid white;
    float: left;
    margin: 0px 30px 20px 10px;
    width: unset;
  }

  h3 {
    font-size: 22px;
    color: ${colors.primaryRed};
  }

  h4 {
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  h3,
  h4 {
    font-family: OpenSansLight;
    text-align: center;
  }
`;

const SlideItem = ({ member, idx, currentSlideIdx }) => {
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
    <StyledSlide>
      <Image src={getImage(name)} />
      <Hidden xsUp={idx !== currentSlideIdx}>
        <h3>{name}</h3>
        <h4>{funktion}</h4>
        <p>
          <strong>Teammitglied: seit {seit}</strong>
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
      </Hidden>
    </StyledSlide>
  );
};

export default SlideItem;
