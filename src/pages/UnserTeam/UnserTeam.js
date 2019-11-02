import React from "react";
import Slider from "react-slick";
import mitarbeiter from "../../assets/data/mitarbeiter";
import Image from "../../generic-components/Image";
import { getImage } from "./ProfileImages";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "./../../theme/index";
import Profileinfo from "./ProfileInfo";

const SliderWrapper = styled.div`
  margin: 0 7%;

  .slick-slider {
    .slick-list {
      margin-bottom: 10px;
      position: relative;

      .slick-slide {
        transition: all 0.3s ease;
        position: relative;
        cursor: pointer;
        transform: translateY(50%);

        &.slick-current {
          transform-origin: top center;
          transform: scale(2);
          z-index: 2;
          margin: 0 2%;

          img {
            border: 5px solid ${colors.primaryRed};
          }
        }

        &:not(.slick-current) {
          div::before {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.5);
          }
        }

        img {
          border-radius: 50%;
          border: 15px solid ${colors.primaryRed};
        }
      }
    }

    .slick-prev {
      left: -7%;
    }

    .slick-next {
      right: -7%;
    }

    .slick-prev,
    .slick-next {
      top: calc(50% + 2px);

      &::before {
        color: black;
      }
    }
  }
`;

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

shuffleArray(mitarbeiter);

const UnserTeam = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

  return (
    <>
      <h1>Unser Team</h1>
      <SliderWrapper>
        <Slider
          arrows
          infinite
          slidesToShow={7}
          centerMode
          focusOnSelect
          centerPadding={40}
          afterChange={setCurrentSlideIdx}
        >
          {mitarbeiter.map((m, idx) => (
            <Image
              style={{
                transform:
                  currentSlideIdx > idx ? "skewX(30deg)" : "skewY(30deg)",
              }}
              key={`img-${idx}`}
              src={getImage(m.name)}
            />
          ))}
        </Slider>
      </SliderWrapper>
      {mitarbeiter.map((m, idx) => (
        <Profileinfo
          member={m}
          key={`hidden-${idx}`}
          idx={idx}
          currentSlideIdx={currentSlideIdx}
        />
      ))}
    </>
  );
};

export default UnserTeam;
