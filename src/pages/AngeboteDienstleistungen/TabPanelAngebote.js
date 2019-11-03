import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import aluImage from "../../assets/images/angebote/Alu.jpg";
import petImage from "../../assets/images/angebote/PET.jpg";
import paketImage from "../../assets/images/angebote/Paket.jpg";
import basicImage from "../../assets/images/angebote/Basic.jpg";
import eventImage from "../../assets/images/angebote/Event.jpg";
import apcImage from "../../assets/images/angebote/APC.jpg";
import Image from "../../generic-components/Image";
import { breakpoint, device } from "./../../theme/index";

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
      top: -20px;
      left: 0;
      content: "i";
      font-size: 98px;
      font-family: Times, TimesNewRoman, "Times New Roman";
      color: #8abbe2;
      font-style: italic;
      transition: all 0.6s ease;
      line-height: 1;
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
    background: rgba(60, 60, 60, 0.12);
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

      ${breakpoint(device.phone)} {
        flex-direction: column;
      }

      img {
        min-width: 168px;
        height: 168px;
        margin: 30px;

        ${breakpoint(device.phone)} {
          object-fit: contain;
          margin: 30px auto;
        }
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
      left: 40px;
      top: 270px;
      max-width: 150px;
      text-align: center;
      font-size: 13px;
      padding: 8px 16px;
      color: white;
      transform: rotate(-6deg);
      z-index: 1;

      ${breakpoint(device.phone)} {
        left: 25%;
        top: 290px;
      }
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
