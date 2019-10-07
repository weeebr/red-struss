import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import aluImage from "../../assets/images/angebote/Alu.webp";
import petImage from "../../assets/images/angebote/PET.webp";
import paketImage from "../../assets/images/angebote/Paket.webp";
import basicImage from "../../assets/images/angebote/Basic.webp";
import eventImage from "../../assets/images/angebote/Event.webp";
import apcImage from "../../assets/images/angebote/APC.webp";
import Image from "../../generic-components/Image";

const StyledAngebote = styled.div`
  margin-bottom: 80px;
  padding-top: 20px;

  .info {
    background: #cde1f1;
    padding: 20px 20px 10px 40px;
    position: relative;
    overflow: hidden;
    margin-bottom: 60px;
    transition: all 0.6s ease;

    &:hover {
      background: #bbd9f1;

      &::before {
        color: #88bee8;
      }
    }

    &::before {
      position: absolute;
      top: -45px;
      left: 0;
      content: "i";
      font-size: 98px;
      font-family: serif;
      color: #8abbe2;
      font-style: italic;
      transition: all 0.6s ease;
    }

    p {
      font-family: OpenSansItalic;
    }
  }

  h3 sup {
    margin-left: 6px;
  }

  h4 {
    font-weight: normal;
    font-family: OpenSans;
    background: #dedede;
    padding: 8px 16px;
    margin: 8px 0 8px 0;
    transition: all 0.6s ease;

    &:hover {
      background: #d0d0d0;
    }
  }

  .angebot {
    position: relative;
    margin-bottom: 60px;

    .content {
      display: flex;

      img {
        width: 168px;
        height: 168px;
        margin: 30px;
      }

      .text p {
        display: flex;
        flex-direction: column;
        font-family: OpenSansItalic;

        &:last-child {
          font-family: OpenSans;
        }
      }
    }

    .price {
      background-color: ${colors.primaryRed};
      position: absolute;
      left: 20px;
      top: 210px;
      max-width: 130px;
      text-align: center;
      font-size: 14px;
      padding: 8px 16px;
      color: white;
      transform: rotate(-6deg);
      z-index: 1;
    }
  }
`;

const images = {
  alu: aluImage,
  pet: petImage,
  paket: paketImage,
  basic: basicImage,
  event: eventImage,
  apc: apcImage,
};

const Angebot = ({ angebot }) => {
  const { titel, typ, subtitel, bild, text, preis } = angebot;
  return (
    <div className="angebot">
      <h3>
        {titel}
        <sup>{typ}</sup>
      </h3>
      <h4>{subtitel}</h4>

      <div className="content">
        <Image src={images[bild]} />

        <div className="text">
          {text.map(t => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>

      <p className="price">{preis}</p>
    </div>
  );
};

export default ({ data }) => {
  const { info, angebote } = data;

  return (
    <StyledAngebote>
      {info && (
        <>
          <div className="info">
            <p>{info}</p>
          </div>
        </>
      )}
      {angebote.map((a, idx) => (
        <Angebot key={idx} angebot={a} />
      ))}
    </StyledAngebote>
  );
};
