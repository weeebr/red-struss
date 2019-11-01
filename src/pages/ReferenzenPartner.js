import React from "react";
import styled from "styled-components";

const events = [
  {
    title: "Bieler Lauftage 2019",
    description:
      "Bereits zum 60sten Mal haben 2019 die Bieler Lauftage mit dem legendären 100 km-Lauf stattgefunden. RED Struss hat dabei zum ersten Mal das Abfall- und Recyclingmanagement für das Start- und Zielgelände übernommen und dort bewiesen, dass eine Trennquote von 100 % nebst einem Platz, von dessen Boden man essen könnte, machbar ist. Zusätzlich konnten wir die Menge des Restmülls gegenüber dem Vorjahr um 57 % reduzieren.",
  },
  {
    title: "World Food Festival 2018",
    description:
      "Das WFF ist mit jährlich bis zu 24 verschiedenen Veranstaltungsorten eines der grössten Streetfood-Festivals in der Schweiz. Für diesen Kunden haben wir ein umfassendes Dienstleistungspaket wahrgenommen, vom Auf- und Abbau über den technischen Support während den Veranstaltungen bis hin zur Sauberkeit und Mülltrennung.",
  },
  {
    title: "Basler Herbstmesse 2019",
    description: "Mit rund 1 Million Besuchenden zählt die Herbstmesse zu den grössten Veranstaltungen in der Nordwestschweiz. Obwohl die Stadt Basel sehr erfahren in der Beseitigung solcher enormer Abfallmengen ist, so wurde die Trennung bisher leider nirgends berücksichtigt. Die Organisatoren wollten dies 2019 ändern und lancierten einen Pilotversuch auf dem Kasernenareal mit Trenninseln. Gemeinsam mit unserem Partner Schwendimann AG haben wir diesen Versuch ausgeführt, begleitet und ausgewertet."
  }
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
        <img src="#" alt="" />
        <img src="#" alt="" />
        <img src="#" alt="" />
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
