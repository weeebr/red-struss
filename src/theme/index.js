import vertrauenIcon from "../assets/images/footer/icon-vertrauen.webp";
import bezahlungIcon from "../assets/images/footer/icon-bezahlung.webp";
import wertschaetzungIcon from "../assets/images/footer/icon-wertschaetzung.webp";
import umweltschutzIcon from "../assets/images/footer/icon-umweltschutz.webp";
import favIcon from "../assets/images/favicon.jpg";
import phoneIcon from "../assets/images/footer/phone.svg";
import emailIcon from "../assets/images/footer/email.svg";

export const colors = {
  primaryRed: "#e40035",
  textColor: "#30302F",
  footerBg: "#151515",
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
  h2: {
    fontFamily: "sans-serif",
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

export const getAltText = icon => {
  const { src } = icon;
  return src.substring(src.lastIndexOf("/") + 1, src.indexOf("."));
};
