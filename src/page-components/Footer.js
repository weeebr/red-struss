import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { colors, icons, pageFullWidth } from "../theme";
import Image from "./../generic-components/Image";
import bgImage from "../assets/images/bg-dark.jpg";
import { breakpoint, device } from "./../theme/index";

const StyledFooter = styled.footer`
  background: linear-gradient(
      -10deg,
      rgba(80, 80, 80, 0.7),
      rgba(40, 40, 40, 0.7)
    ),
    linear-gradient(0, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${bgImage});
  color: white;
  padding-bottom: 120px;

  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
    letter-spacing: 2px;
    transition: all 0.6s ease;
    font-weight: normal;

    ${breakpoint(device.phone)} {
      margin: 20px 0;
    }

    &:hover {
      color: ${colors.primaryRed};
    }
  }

  .wieso-wir {
    padding: 60px 20px 60px 40px;

    ${breakpoint(device.phone)} {
      padding: 5%;
    }

    .footer-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-left: -10px;

      ${breakpoint(device.phone)} {
        margin-left: 0;
      }
    }
  }

  .contact {
    padding: 80px 20px 20px 20px;
    color: white;
    min-height: 180px;
    width: 100%;
    max-width: ${pageFullWidth}px;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 960px) {
      width: calc(100% - 40px);
    }

    ${breakpoint(device.phone)} {
      width: 100%;
    }

    p {
      margin: 0 0 15px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      line-height: 2;

      ${breakpoint(device.phone)} {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &.company {
        font-family: OpenSansBold;
      }

      a,
      span {
        display: block;
        float: left;

        &.divider {
          display: inline;
        }
      }

      ${breakpoint(device.phone)} {
        a,
        span {
          display: block;
          float: left;
          margin: 3% 0;

          &.divider {
            display: none;
          }
        }
      }

      img {
        position: relative;
        top: 5px;
        margin: 0 4px;
        display: inline;
      }
    }
  }
`;

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
            icon={icons.aufrichtig}
          />

          <FooterCard
            header="Weil Sie bei uns nie zu viel bezahlen."
            text="Als unser Kunde können Sie auf die Preisgestaltung aktiv Einfluss nehmen. Wir möchten, dass Sie es sich leisten können."
            icon={icons.fair}
          />
          <FooterCard
            header="Weil wir gemeinsam mehr erreichen."
            text="Es ist höchste Zeit, dass sich in unserer Gesellschaft einiges verändert. Besser noch heute als morgen. Und dazu brauchen wir Sie, denn alleine schaffen wir das nicht."
            icon={icons.gemeinsam}
          />
        </div>
      </div>
      <div className="contact">
        <h2>Kontakt</h2>
        <p className="company">Recycling- und Eventdienstleistungen Struss</p>
        <p>
          <span>Gundeldingerrain 10, 4053 Basel</span>
          <span className="divider">&nbsp;|&nbsp;</span>
          <a href="tel:+41774478765">
            <Image src={icons.phone} />
            &nbsp;077 447 87 65
          </a>
          <span className="divider">&nbsp;|&nbsp;</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@red-struss.com"
          >
            <Image src={icons.email} />
            &nbsp;info@red-struss.com
          </a>
        </p>
      </div>
    </StyledFooter>
  );
};

const Card = styled.div`
  padding: 30px;
  max-width: 230px;
  min-height: 180px;
  background: #0c0c0c;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 20px 10px 0 10px;
  transition: all 0.3s ease;

  ${breakpoint(device.phone)} {
    max-width: 100%;
    margin: 20px 0 0 0;
    padding-bottom: 6%;
  }

  &:hover {
    background: #070707;
  }

  h3 {
    color: ${colors.primaryRed};
    margin-bottom: 10px;
    font-weight: normal;
  }

  p {
    color: ${lighten(0.3, colors.textColor)};
    margin-bottom: 20px;
  }

  .filler {
    flex-grow: 1;
  }

  .img-wrapper {
    justify-self: flex-end;

    img {
      max-height: 60px;
    }
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

export default Footer;
