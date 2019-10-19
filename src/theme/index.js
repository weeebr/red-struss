import aufrichtigIcon from "../assets/images/footer/icon-aufrichtig.svg";
import fairIcon from "../assets/images/footer/icon-fair.svg";
import gemeinsamIcon from "../assets/images/footer/icon-gemeinsam.svg";
import wertschaetzungIcon from "../assets/images/footer/icon-wertschaetzung.svg";
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
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

export const muiFontRecommendations = {
  sm: {
    h1: "56px",
    h2: "38px",
    h3: "32px",
    h4: "25px",
    h5: "20px",
    h6: "18px",
  },
  md: {
    h1: "76px",
    h2: "48px",
    h3: "38px",
    h4: "31px",
    h5: "21px",
    h6: "20px",
  },
  lg: {
    h1: "88px",
    h2: "56px",
    h3: "42px",
    h4: "31px",
    h5: "24px",
    h6: "20px",
  },
  xl: {
    h1: "96px",
    h2: "60px",
    h3: "46px",
    h4: "34px",
    h5: "24px",
    h6: "20px",
  },
};

export const breakpoint = device => `@media (max-width:${device.mobile})`;

export const icons = {
  aufrichtig: aufrichtigIcon,
  fair: fairIcon,
  gemeinsam: gemeinsamIcon,
  wertschaetzung: wertschaetzungIcon,
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

export const zIndex = {
  overContent: 2,
  overNavOverlay: 3,
};

export const pageFullWidth = 297 + 922; // nav + content
