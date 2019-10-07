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
  NotFound,
} from "./pages";
import { Helmet } from "react-helmet";
import GlobalStyle from "./GlobalStyle";

// icon: type/png
// shortcut icon: ICO

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

        <div
          className="content"
          style={{
            marginRight: isNavigationOpen ? "-345px " : "20px",
            marginTop: isNavigationOpen ? 159 : 0,
          }}
        >
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
        </div>
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
