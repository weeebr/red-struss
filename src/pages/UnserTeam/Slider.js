import React from "react";
import { SlickSlider } from "../../vendors";
import Profileinfo from "./ProfileInfo";
import Image from "../../generic-components/Image";
import { getImage } from "./ProfileImages";
import styled from "styled-components";
import { colors, device, breakpoint } from "../../theme";

const SliderWrapper = styled.div`
  margin: 0;

  .slick-slider {
    .slick-list {
      position: relative;

      .slick-track {
        margin-bottom: 10px;
        display: flex;
      }

      .slick-slide {
        transition: all 0.3s ease;
        position: relative;
        cursor: pointer;
        transform: scale(0.7);

        &.slick-current {
          margin: 0 15px;
          transform: scale(1);
          transform-origin: center;
          z-index: 2;

          img {
            border: 4px solid ${colors.primaryRed};

            ${breakpoint(device.phone)} {
              border: 5px solid ${colors.primaryRed};
            }
          }
        }

        &:not(.slick-current) {
          & > div::before {
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
          border: 5px solid ${colors.primaryRed};

          ${breakpoint(device.phone)} {
            border: 6px solid ${colors.primaryRed};
          }
        }
      }
    }
  }
`;

const Slider = React.forwardRef(({ mitarbeiter }, ref) => {
  let slider = React.createRef(null);

  const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

  const getClass = idx =>
    idx === currentSlideIdx
      ? "current"
      : idx < currentSlideIdx
      ? "prev"
      : "next";

  return (
    <>
      <SliderWrapper currentSlideIdx={currentSlideIdx}>
        <SlickSlider
          ref={slider}
          infinite
          slidesToShow={7 - 2} // - 2 because we scaled the sizes of inactive slides down
          speed={200}
          centerMode
          arrows={false}
          focusOnSelect
          beforeChange={(i, idx) => setCurrentSlideIdx(idx)}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5 - 2, // - 2 because we scaled the sizes of inactive slides down
              },
            },
          ]}
        >
          {mitarbeiter.map((m, idx) => (
            <Image
              className={getClass(idx)}
              key={`img-${idx}`}
              src={getImage(m.name)}
            />
          ))}
        </SlickSlider>
      </SliderWrapper>
      {mitarbeiter.map((m, idx) => (
        <Profileinfo
          member={m}
          key={`hidden-${idx}`}
          idx={idx}
          slider={slider}
          currentSlideIdx={currentSlideIdx}
        />
      ))}
    </>
  );
});
export default Slider;
