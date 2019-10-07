import pascalWeber from "../../assets/images/team/pascal-weber.webp";
import masoudSaedavi from "../../assets/images/team/masoud-saedavi.webp";
import melissaPauli from "../../assets/images/team/melissa-pauli.webp";
import michelOesch from "../../assets/images/team/michel-oesch.webp";
import shannonSangiorgio from "../../assets/images/team/shannon-sangiorgio.webp";
import yanikStruss from "../../assets/images/team/yanik-struss.webp";
import jafarGhaffarnejad from "../../assets/images/team/jafar-ghaffarnejad.webp";
import fabianBracher from "../../assets/images/team/fabian-bracher.webp";

const images = {
  pascalWeber,
  masoudSaedavi,
  melissaPauli,
  michelOesch,
  shannonSangiorgio,
  yanikStruss,
  jafarGhaffarnejad,
  fabianBracher,
};

export const getImage = name => {
  if (name === "Melissa Sue Pauli") return images["melissaPauli"];

  const idxSpace = name.indexOf(" ");
  let key =
    name.substring(0, 1).toLowerCase() +
    name.substring(1, idxSpace) +
    name.substring(idxSpace + 1, idxSpace + 2).toUpperCase() +
    name.substring(idxSpace + 2);

  return images[key];
};
