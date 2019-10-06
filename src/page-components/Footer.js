import React from "react";

const FooterCard = ({header, text}) => {
  return (
    <>
      <h3>{header}</h3>
      <p>{text}</p>
    </>
  );
};



const Footer = () => {
  return (
    <>
      <h2>Wieso wir?</h2>
      <FooterCard 
        header="Weil wir Sie als Menschen wertschätzen." 
        text="Ihre Zufriedenheit - sei dies als Kunde, Auftraggeber, Partner oder Mitarbeiter - liegt uns sehr am Herzen." 
      />
      <FooterCard 
        header="Weil unser Engagement aufrichtig ist." 
        text="Was wir tun, das tun wir mit Leidenschaft und Überzeugung. So können Sie sicher sein, dass wir uns stets fair und ehrlich verhalten." 
      />
      <FooterCard 
        header="Weil Sie bei uns nie zu viel bezahlen."
        text="Als unser Kunde können Sie auf die Preisgestaltung aktiv Einfluss nehmen. Wir möchten, dass Sie es sich leisten können." 
      />
      <FooterCard 
        header="Weil wir gemeinsam mehr erreichen."
        text="Es ist höchste Zeit, dass sich in unserer Gesellschaft einiges verändert. Besser noch heute als morgen. Und dazu brauchen wir Sie, denn alleine schaffen wir das nicht." 
      />
    </>
  );
};

export default Footer