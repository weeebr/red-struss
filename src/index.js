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
import { createGlobalStyle } from "styled-components";
import bgImage from "./assets/images/bg.jpg";
import { Helmet } from "react-helmet";
import { icons, colors } from "./theme";

const GlobalStyle = createGlobalStyle`
  html, body, p, h1, h2, h3, h4, h5 {   
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    
  }

  a {
    text-decoration: none;
    color: ${colors.primaryRed};

    &:focus, &:hover {
      border-bottom: 2px dashed ${colors.primaryRed};
    }
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${bgImage});

    & > div {
      flex: 1 0 auto;
      display: flex;

      .content {
        margin: 20px 20px 80px 0;
        background: white;
        padding: 20px;
        width: 100%;
        box-shadow: 0 0 14px #e0dfdf;
      }
    }
  }
  
`;

// icon: type/png
// shortcut icon: ICO
console.log(icons.favicon);
const App = (
  <Router>
    <GlobalStyle />
    <Helmet>
      <title>RED Struss</title>
    </Helmet>
    <Header />
    <div>
      <Navigation />
      <div className="content">
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

    <Footer />
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
