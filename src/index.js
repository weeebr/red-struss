import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./page-components/Header";
import Navigation from "./page-components/Navigation";
import Footer from "./page-components/Footer";
import {
  Aktuell,
  AngeboteDienstleistungen,
  Home,
  Kontakt,
  LeitbildPhilosophie,
  ReferenzenPartner,
  UnserTeam,
  Wissenswertes,
  NotFound
} from "./pages";
import { Helmet } from "react-helmet";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

// icon: type/png
// shortcut icon: ICO

const PagesWrapper = styled.div``;

const Pages = () => {
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  return (
    <>
      <Header isNavigationOpen={isNavigationOpen} />
      <div>
        <Navigation
          isOpen={isNavigationOpen}
          setNavigationOpen={setNavigationOpen}
        />

        <PagesWrapper className="content" isNavigationOpen={isNavigationOpen}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aktuell" component={Aktuell} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/angebote/:id?" component={AngeboteDienstleistungen} />
            <Route path="/leitbild" component={LeitbildPhilosophie} />
            <Route path="/referenzen" component={ReferenzenPartner} />
            <Route path="/team" component={UnserTeam} />
            <Route path="/wissenswertes" component={Wissenswertes} />
            <Route component={NotFound} />
          </Switch>
        </PagesWrapper>
      </div>
    </>
  );
};

const App = (
  <Router>
    <GlobalStyle />
    <Helmet>
      <title>RED Struss</title>
    </Helmet>

    <Pages />

    <Footer />
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
