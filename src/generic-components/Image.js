import React from "react";

export const getAltText = icon => {
  const { src = icon } = icon;
  return src.substring(src.lastIndexOf("/") + 1, src.indexOf("."));
};

export default (img, props) => (
  <img src={img.src} alt={getAltText(img)} {...props} />
);
