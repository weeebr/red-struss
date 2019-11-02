import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { colors } from "../../theme";
import mitarbeiter from "../../assets/data/mitarbeiter";
import SlideItem from "./SlideItem";

const StyledCarousel = styled(Carousel)`
  .carousel {
    display: flex;
    .slide {
      background: transparent;
      height: 100%;

      &:not(.selected) {
        height: 0;
      }
    }
  }

  && .control-dots {
    padding: 0;
    display: inline-flex;
    margin: 0;
    position: static;
    width: 305px;
    position: absolute;
    right: -120px;
    transform: rotate(90deg);
    top: 280px;
    bottom: unset;

    .dot {
      background: ${colors.primaryRed};
      width: 14px;
      height: 14px;
      margin: 0 12px;
      background: red;
      box-shadow: 0 0 0 3px white;
    }
  }
`;

const UnserTeam = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  return (
    <>
      <h1>Unser Team</h1>
      <StyledCarousel
        showArrows={false}
        showIndicators
        showStatus={false}
        showThumbs={false}
        stopOnHover
        onChange={setCurrentSlideIdx}
      >
        {shuffleArray(mitarbeiter).map((m, idx) => (
          <SlideItem
            currentSlideIdx={currentSlideIdx}
            idx={idx}
            key={m}
            member={m}
          />
        ))}
      </StyledCarousel>
    </>
  );
};

export default UnserTeam;
