import React from "react";
import styled from "styled-components";

const events = [
  {
    title: "Bieler Lauftagen 2019",
    description:
      "Bereits zum 60sten Mal haben 2019 die Bieler Lauftage mit dem legendären 100 km-Lauf stattgefunden. RED Struss hat dabei zum ersten Mal das Abfall- und Recyclingmanagement für das Start- und Zielgelände übernommen und dort bewiesen, dass eine Trennquote von 100 % nebst einem Platz, von dessen Boden man essen könnte, machbar ist. Zusätzlich konnten wir die Menge des Restmülls gegenüber dem Vorjahr um 57 % reduzieren.",
  },
  {
    title: "World Food Festival 2018",
    description:
      "Das WFF ist mit jährlich bis zu 24 verschiedenen Veranstaltungsorten eines der grössten Streetfood-Festivals in der Schweiz. Für diesen Kunden haben wir ein umfassendes Dienstleistungspaket wahrgenommen, vom Auf- und Abbau über den technischen Support während den Veranstaltungen bis hin zur Sauberkeit und Mülltrennung.",
  },
];

const StyledReferenzen = styled.div`
  margin-bottom: 60px;

  h3 {
    margin: 40px 0 20px 0;
  }
`;

const Event = ({ title, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>Eindrücke</h4>
      <div className="images-gallery">
        <img src="#" />
        <img src="#" />
        <img src="#" />
      </div>
    </>
  );
};

const ReferenzenPartner = () => {
  return (
    <StyledReferenzen>
      <h1>Referenzen & Partner</h1>
      <>
        {events.map(e => (
          <Event key={e.title} title={e.title} description={e.description} />
        ))}
      </>
    </StyledReferenzen>
  );
};

export default ReferenzenPartner;
