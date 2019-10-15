import React from "react";
import styled from "styled-components";

const Event = ({ title, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

const StyledEvents = styled.div`
  .intro {
    margin-bottom: 60px;
  }

  h3 {
    margin-top: 40px;
  }
`;

const events = [
  {
    title: "Eindrücke von den Bieler Lauftagen 2019",
    description:
      "Bereits zum 60sten Mal haben 2019 die Bieler Lauftage mit dem legendären 100 km-Lauf stattgefunden. RED Struss hat dabei zum ersten Mal das Abfall- und Recyclingmanagement für das Start- und Zielgelände übernommen und dort bewiesen, dass eine Trennquote von 100 % nebst einem Platz, von dessen Boden man essen könnte, machbar ist. Zusätzlich konnten wir die Menge des Restmülls gegenüber dem Vorjahr um 57 % reduzieren.",
  },
  {
    title: "Eindrücke vom World Food Festival 2018",
    description:
      "Das WFF ist mit jährlich bis zu 24 verschiedenen Veranstaltungsorten eines der grössten Streetfood-Festivals in der Schweiz. Für diesen Kunden haben wir ein umfassendes Dienstleistungspaket wahrgenommen, vom Auf- und Abbau über den technischen Support während den Veranstaltungen bis hin zur Sauberkeit und Mülltrennung.",
  },
];

export default () => {
  return (
    <StyledEvents>
      <div className="intro">
        <p>
          Jede Veranstaltung ist einzigartig. Entsprechend gibt es auch keine
          universell ideale Lösung für das Abfallmanagement und Recycling.
          Leider wird diesem Thema deswegen noch viel zu häufig nicht die nötige
          Aufmerksamkeit geschenkt.
        </p>
        <p>
          Umso wichtiger wäre es aber, diese Fragen bereits frühzeitig in die
          Planung der Veranstaltung miteinzubeziehen. Denn durch clevere Ideen
          und ein entsprechendes Netzwerk lässt sich mit erstaunlich geringem
          Aufwand ein optimales und sauberes Ergebnis erzielen, welches Ihrem
          Image sowie demjenigen Ihrer Veranstaltung unschätzbare Dienste
          erweisen kann und sowohl Sie als auch Ihre Anspruchsgruppen rundum
          zufriedenstellt.
        </p>
        <p>
          Wir unterstützen Sie dabei gerne durch ein individuelles Konzept und
          gute Ideen, samt Vorbereitung und Umsetzung. Konzentrieren Sie sich in
          aller Ruhe auf die Kernsache Ihres Events und geben Sie das Thema
          Abfall und Recycling in gute Hände - wir haben noch nie einen Kunden
          enttäuscht.
        </p>
        <p>
          Unser generelles Konzept mit näheren Informationen finden Sie{" "}
          <a href="/">hier</a> zum Download.
        </p>
        <p>
          <a href="/contact">Kontaktieren Sie uns</a> für ein unverbindliches
          Kennenlernen.
        </p>
      </div>
      <>
        {events.map(e => (
          <Event key={e.title} title={e.title} description={e.description} />
        ))}
      </>
    </StyledEvents>
  );
};
