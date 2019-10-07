import vertrauenIcon from "../assets/images/footer/icon-vertrauen.webp";
import bezahlungIcon from "../assets/images/footer/icon-bezahlung.webp";
import wertschaetzungIcon from "../assets/images/footer/icon-wertschaetzung.webp";
import umweltschutzIcon from "../assets/images/footer/icon-umweltschutz.webp";
import favIcon from "../assets/images/favicon.jpg";
import phoneIcon from "../assets/images/footer/phone.svg";
import emailIcon from "../assets/images/footer/email.svg";
import { lighten } from "polished";

export const colors = {
  primaryRed: "#e70036",
  primaryAnthracite: "#3c3c3c",
  textColor: lighten(0.1, "#000"), // 90% black
  footerBg: lighten(0.1, "#000"),
};

export const device = {
  mobile: "767px",
  tablet: "991px",
};

export const breakpoints = {
  mobile: `@media (max-width:${device.mobile})`,
  tablet: `@media (max-width:${device.tablet})`,
};

export const icons = {
  vertrauen: vertrauenIcon,
  bezahlung: bezahlungIcon,
  wertschaetzung: wertschaetzungIcon,
  umweltschutz: umweltschutzIcon,
  favicon: favIcon,
  phone: phoneIcon,
  email: emailIcon,
};

export const typography = {
  h1: {
    textTransform: "uppercase",
    fontFamily: "OpenSansLight",
    fontSize: "28px",
    fontWeight: 300,
  },
  h3: {
    textTransform: "uppercase",
    fontFamily: "OpenSansLight",
    fontSize: "18px",
    fontWeight: 300,
  },

  hauptTitel: {
    fontSize: "25px",
    fontFamily: "OpenSansBold",
    color: lighten(0.1, "#000"),
    marginBottom: "20px",
  },
  rubrikTitel: {
    fontSize: "25px",
    fontFamily: "OpenSans",
  },
  titel: {
    fontSize: "20px",
    fontFamily: "OpenSansBold, Calibri, sans-serif",
  },
  subTitel: {
    fontSize: "18px",
    fontFamily: "OpenSans",
    textTransform: "uppercase",
  },
  leadText: {
    fontFamily: "OpenSans",
    borderTop: "1px solid currentColor",
    borderBottom: "1px solid currentColor",
    padding: "8px 0",
  },
  zitat: {
    fontSize: "18px",
    fontStyle: "italic",
    textAlign: "center",
  },
};

export const getString = stylings => {
  let result = "";
  for (let [key, value] of Object.entries(stylings)) {
    key = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    result += `${key}: ${value}\n`;
  }

  return result;
};

export const pageFullWidth = 277 + 780; // nav + content
