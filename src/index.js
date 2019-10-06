import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./page-components/Navigation";
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

const App = (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aktuell" component={Aktuell} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/angebote/:id" component={AngeboteDienstleistungen} />
        <Route path="/leitbild" component={LeitbildPhilosophie} />
        <Route path="/referenzen" component={ReferenzenPartner} />
        <Route path="/team" component={UnserTeam} />
        <Route path="/wissenswertes" component={Wissenswertes} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
