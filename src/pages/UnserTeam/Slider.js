import React from "react";
import { SlickSlider } from "../../vendors";
import Profileinfo from "./ProfileInfo";
import Image from "../../generic-components/Image";
import { getImage } from "./ProfileImages";
import styled from "styled-components";
import { colors, device, breakpoint } from "../../theme";

const SliderWrapper = styled.div`
  margin: 0 7%;

  ${breakpoint(device.phone)} {
    margin: 0;
  }

  .slick-slider {
    .slick-list {
      position: relative;

      .slick-track {
        margin-bottom: 10px;

        ${breakpoint(device.phone)} {
          padding-bottom: 4%;
          margin: 0;
        }
      }

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

            ${breakpoint(device.phone)} {
              border: 3px solid ${colors.primaryRed};
            }
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
          border: 10px solid ${colors.primaryRed};

          ${breakpoint(device.phone)} {
            border: 5px solid ${colors.primaryRed};
          }
        }
      }
    }

    .slick-prev {
      left: -15%;
    }

    .slick-next {
      right: -15%;
    }

    .slick-prev,
    .slick-next {
      top: calc(50% - 1px);

      ${breakpoint(device.phone)} {
        top: 50%;
      }

      &::before {
        color: black;
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
          centerPadding={40}
          afterChange={setCurrentSlideIdx}
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
