import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { colors, breakpoints, icons } from "../theme";
import { Image } from "./../generic-components/Image";
import bgImage from "../assets/images/bg-dark.jpg";

const Card = styled.div`
  margin-top: 20px;
  padding: 20px;
  max-width: 200px;
  min-height: 180px;
  background: ${lighten(0.05, colors.footerBg)};
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 1075px) {
    flex-basis: 44%;
    max-width: unset;

    &&:nth-child(even) {
      margin-right: unset;
    }
  }

  @media (max-width: 890px) {
    &&& {
      flex-basis: 100%;
      margin-right: unset;
    }
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  h3 {
    color: ${colors.primaryRed};
    margin-bottom: 10px;
  }

  p {
    color: ${lighten(0.15, colors.textColor)};
    margin-bottom: 20px;
    text-align: left;
  }

  .filler {
    flex-grow: 1;
  }

  .img-wrapper {
    justify-self: flex-end;
  }
`;

const FooterCard = ({ header, text, icon }) => {
  return (
    <Card>
      <h3>{header}</h3>
      <p>{text}</p>
      <div className="filler"></div>
      <div className="img-wrapper">
        <Image src={icon} />
      </div>
    </Card>
  );
};

const StyledFooter = styled.footer`
  background: linear-gradient(rgba(11, 11, 11, 0.8), rgba(11, 11, 11, 0.8)),
    url(${bgImage});
  color: white;

  .wieso-wir {
    padding: 20px 20px 60px 20px;
    padding-top: 20px;
    background: ${colors.footerBg};

    .footer-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .contact {
    padding: 60px 20px 20px 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    min-height: 300px;

    img {
      position: relative;
      top: 5px;
      margin: 0 4px;
    }
  }
`;
console.log(breakpoints.tablet);

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wieso-wir">
        <h2>Wieso wir?</h2>
        <div className="footer-cards">
          <FooterCard
            header="Weil wir Sie als Menschen wertschätzen."
            text="Ihre Zufriedenheit - sei dies als Kunde, Auftraggeber, Partner oder Mitarbeiter - liegt uns sehr am Herzen."
            icon={icons.wertschaetzung}
          />
          <FooterCard
            header="Weil unser Engagement aufrichtig ist."
            text="Was wir tun, das tun wir mit Leidenschaft und Überzeugung. So können Sie sicher sein, dass wir uns stets fair und ehrlich verhalten."
            icon={icons.umweltschutz}
          />

          <FooterCard
            header="Weil Sie bei uns nie zu viel bezahlen."
            text="Als unser Kunde können Sie auf die Preisgestaltung aktiv Einfluss nehmen. Wir möchten, dass Sie es sich leisten können."
            icon={icons.bezahlung}
          />
          <FooterCard
            header="Weil wir gemeinsam mehr erreichen."
            text="Es ist höchste Zeit, dass sich in unserer Gesellschaft einiges verändert. Besser noch heute als morgen. Und dazu brauchen wir Sie, denn alleine schaffen wir das nicht."
            icon={icons.vertrauen}
          />
        </div>
      </div>
      <div className="contact">
        <h2>Kontakt</h2>
        <p>
          <strong>RED Struss - Recycling & Eventdienstleistungen</strong>
          &nbsp;|&nbsp;
          <a href="tel:+41">
            <Image src={icons.phone} />
            +41
          </a>
          &nbsp;|&nbsp;
          <a href="mailto:info@red-struss.com">
            <Image src={icons.email} />
            info@red-struss.com
          </a>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
