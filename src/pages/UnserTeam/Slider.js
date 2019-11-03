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
      padding-left: 8%;

      .slick-track {
        margin-bottom: 10px;
        display: flex;
      }

      .slick-slide {
        transition: all 0.3s ease;
        position: relative;
        cursor: pointer;
        transform: translate(0, 45%);
        display: flex;

        & > div {
          flex-basis: 100%;
          text-align: center;
        }

        &.slick-current {
          margin: 0;
          flex-basis: 8%;
          transform: translateY(0);
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

  return (
    <>
      <SliderWrapper>
        <SlickSlider
          ref={slider}
          infinite
          slidesToShow={7}
          centerMode
          arrows={false}
          focusOnSelect
          beforeChange={(i, idx) => setCurrentSlideIdx(idx)}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
              },
            },
          ]}
        >
          {mitarbeiter.map((m, idx) => (
            <Image key={`img-${idx}`} src={getImage(m.name)} />
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
