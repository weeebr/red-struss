import React from "react";
import { getAltText } from "./../theme/index";

export const Image = img => <img src={img.src} alt={getAltText(img)} />;
