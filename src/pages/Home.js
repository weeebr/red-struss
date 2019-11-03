import React from "react";
import unternehmenImage from "../assets/images/home/unternehmen.webp";
import privaterHaushaltImage from "../assets/images/home/privater-haushalt.webp";
import eventVeranstalterImage from "../assets/images/home/event-veranstalter.webp";
import Image from "./../generic-components/Image";
import styled from "styled-components";
import { colors } from "./../theme";
import { SlickSlider } from "../vendors";
import galleryImg1 from "../assets/images/home/gallery/1.webp";
import galleryImg2 from "../assets/images/home/gallery/2.webp";
import galleryImg3 from "../assets/images/home/gallery/3.webp";
import galleryImg4 from "../assets/images/home/gallery/4.webp";
import galleryImg5 from "../assets/images/home/gallery/5.webp";
import { getAltText } from "./../generic-components/Image";
import { breakpoint, device } from "./../theme/index";
import { Hidden } from "@material-ui/core";

const StyledHome = styled.div`
  & > p:not(.slider-text) {
    padding: 40px 0;
    margin: 0;
  }

  .slick-slider {
    margin-bottom: 140px;

    ${breakpoint(device.phone)} {
      margin-bottom: 14%;
    }

    .slick-dots[style] {
      height: 0;
      position: static;
      display: flex !important;
      justify-content: center;

      li {
        width: 100px;
        position: static;
        margin-top: 8px;

        ${breakpoint(device.phone)} {
          width: 20%;
          margin: 0;

          &:not(:last-child) {
            margin-right: 8px;
          }
        }

        .img-wrapper {
          border: 3px solid ${colors.primaryRed};
          position: relative;

          &::before {
            background: black;
            transition: all 0.7s ease;
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 100%;
          }
        }

        &.slick-active {
          .img-wrapper::before {
            opacity: 0;
          }

          p {
            display: block;
          }
        }

        &:not(.slick-active) {
          .img-wrapper::before {
            opacity: 0.8;
          }
        }
      }
    }
  }

  .slider-text {
    position: absolute;
    bottom: 10%;
    left: 25%;
    width: 50%;
    padding: 20px;
    box-shadow: 0 0 14px #b3b3b3;
    background: white;

    ${breakpoint(device.tablet)} {
      bottom: 5%;
      left: 5%;
      width: 90%;
    }

    ${breakpoint(device.phone)} {
      left: 0;
      position: relative;
      width: 100%;
    }
  }

  .angebote {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-left: -10px;

    ${breakpoint(device.phone)} {
      margin-bottom: 0;
    }
  }
`;

const StyledAngebot = styled.a`
  text-align: center;
  height: 271px;
  box-shadow: 0 0 2px 0px #d2d2d2, 0 0 4px 2px #d2d2d2;
  margin-bottom: 20px;
  padding: 10px;
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  background: white;

  ${breakpoint(device.phone)} {
    margin-right: 0;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 15%;
    padding: 0 20px 20px 20px;
  }

  &:focus,
  &:hover {
    border-bottom: 0;
    outline: ${colors.primaryRed} solid 1px;

    img {
      transform: scale(0.8) translateX(-20px);

      ${breakpoint(device.phone)} {
        transform: scale(0.8);
      }
    }

     p {
      padding-left: 10px;
      /*background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)), ${
        colors.primaryRed
      };*/
    }
  }

  img {
    transform: scale(0.7) translateX(-20px);

    ${breakpoint(device.phone)} {
      transform: scale(0.7);
    }

    transition: all 0.5s ease;
    max-width: unset;
  }

  p {
    transition: all 0.5s ease;
    background: ${colors.primaryRed};
    padding: 8px;
    color: white;
    margin-top: 0;
    white-space: nowrap;
  }
`;

const Angebot = ({ id, img, text }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <StyledAngebot
      href={`/angebote/${id}`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      isHovered={isHovered}
    >
      <Image src={img} />
      <p>
        {isHovered ? "→" : "..."} {text}
      </p>
    </StyledAngebot>
  );
};

const SliderWrapper = styled.div`
  position: relative;
`;

const Home = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

  const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
  ];

  const texts = [
    "Nachhaltigkeit und Recycling sind vielgehörte Begriffe. Doch sie sind ganz konkrete und wichtige Ansätze zum Schutz und Erhalt unserer Umwelt.",
    "Und das fängt bereits im Kleinen an: In unseren Haushälten, in unserem täglichen Leben.",
    "Unser erklärtes Ziel ist die Verbesserung der Rücklaufquote von rezyklierbaren Materialien. Wir leisten unseren Beitrag zu einem sinnvollen und funktionierenden Wertstoffkreislauf.",
    "",
    "",
  ];

  const customPaging = i => {
    return (
      <div>
        <div className="img-wrapper">
          <img
            key={`thumb-${galleryImages[i]}`}
            src={galleryImages[i]}
            alt={getAltText(galleryImages[i])}
          />
        </div>
      </div>
    );
  };

  return (
    <StyledHome>
      <h1>Home</h1>
      <SliderWrapper>
        <SlickSlider
          arrows={false}
          dots
          infinite
          slidesToShow={1}
          centerMode
          focusOnSelect
          autoplay
          autoplaySpeed={4500}
          centerPadding={0}
          afterChange={setCurrentSlideIdx}
          customPaging={customPaging}
        >
          {galleryImages.map(i => (
            <img key={i} src={i} alt={getAltText(i)} />
          ))}
        </SlickSlider>
        {galleryImages.map((i, idx) => (
          <Hidden xsUp={idx !== currentSlideIdx} key={idx}>
            {texts[idx].length > 0 ? (
              <p className="slider-text" key={idx}>
                {texts[idx]}
              </p>
            ) : null}
          </Hidden>
        ))}
      </SliderWrapper>
      <p>Entdecken Sie die passende Dienstleistung für Sie als ...</p>
      <div className="angebote">
        <Angebot id={0} img={unternehmenImage} text="Unternehmen" />
        <Angebot id={1} img={privaterHaushaltImage} text="privater Haushalt" />
        <Angebot
          id={2}
          img={eventVeranstalterImage}
          text="Event-Veranstalter"
        />
      </div>
    </StyledHome>
  );
};

export default Home;
