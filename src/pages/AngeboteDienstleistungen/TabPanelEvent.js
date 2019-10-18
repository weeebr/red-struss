import React from "react";
import styled from "styled-components";

const StyledEvents = styled.div`
  .intro {
    margin-bottom: 60px;
  }
`;

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
    </StyledEvents>
  );
};
