import pascalWeber from "../../assets/images/team/pascal-weber.jpg";
import masoudSaedavi from "../../assets/images/team/masoud-saedavi.jpg";
import melissaPauli from "../../assets/images/team/melissa-pauli.jpg";
import michelOesch from "../../assets/images/team/michel-oesch.jpg";
import shannonSangiorgio from "../../assets/images/team/shannon-sangiorgio.jpg";
import yanikStruss from "../../assets/images/team/yanik-struss.jpg";
import jafarGhaffarnejad from "../../assets/images/team/jafar-ghaffarnejad.jpg";
import fabianBracher from "../../assets/images/team/fabian-bracher.jpg";
import fabianKunz from "../../assets/images/team/fabian-kunz.jpg";
import gerhardSchweingruber from "../../assets/images/team/gerhard-schweingruber.jpg";

const images = {
  pascalWeber,
  masoudSaedavi,
  melissaPauli,
  michelOesch,
  shannonSangiorgio,
  yanikStruss,
  jafarGhaffarnejad,
  fabianBracher,
  fabianKunz,
  gerhardSchweingruber,
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
