import React from "react";
import unternehmenImage from "../assets/images/home/unternehmen.webp";
import privaterHaushaltImage from "../assets/images/home/privater-haushalt.webp";
import eventVeranstalterImage from "../assets/images/home/event-veranstalter.webp";
import Image from "./../generic-components/Image";
import styled from "styled-components";
import { colors } from "./../theme";
import { Carousel } from "react-responsive-carousel";
import galleryImg1 from "../assets/images/home/gallery/1.webp";
import galleryImg2 from "../assets/images/home/gallery/2.webp";
import galleryImg3 from "../assets/images/home/gallery/3.webp";
import galleryImg4 from "../assets/images/home/gallery/4.webp";
import galleryImg5 from "../assets/images/home/gallery/5.webp";
import { getAltText } from "./../generic-components/Image";

const StyledHome = styled.div`
  & > p {
    margin-bottom: 40px;
  }

  .carousel {
    .thumbs {
      display: flex;
      justify-content: center;

      & > * {
        cursor: pointer;
      }
    }

    .control-dots .dot {
      background: ${colors.primaryRed};
      width: 14px;
      height: 14px;
      margin: 0 12px;
      background: red;
      box-shadow: 0 0 0 3px white;
    }
  }

  .angebote {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-left: -10px;
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

  &:focus,
  &:hover {
    border-bottom: 0;
    outline: ${colors.primaryRed} solid 1px;

    img {
      transform: scale(0.8) translateX(-20px);
    }

     p {
      padding-left: 10px;
      /*background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)), ${colors.primaryRed};*/
    }
  }

  img {
    transform: scale(0.7) translateX(-20px);
    transition: all 0.5s ease;
    max-width: unset;
  }

  p {
    transition: all 0.5s ease;
    background: ${colors.primaryRed};
    padding: 8px;
    color: white;
    margin-top: 0;
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

const Home = () => {
  const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
  ];

  return (
    <StyledHome>
      <h1>Home</h1>
      <Carousel showStatus={false}>
        {galleryImages.map(i => (
          <img key={i} src={i} alt={getAltText(i)} />
        ))}
      </Carousel>
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
