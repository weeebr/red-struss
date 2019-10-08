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

const Page = ({ title, ...other }) => {
  React.useEffect(() => {
    document.title = "RED Struss - " + title;
  }, [title]);

  return <Route {...other} />;
};

const Pages = () => {
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  return (
    <>
      <Header
        onClick={console.log.bind(console)}
        isNavigationOpen={isNavigationOpen}
      />
      <div>
        <Navigation
          isOpen={isNavigationOpen}
          setNavigationOpen={setNavigationOpen}
        />

        <div className="content" isNavigationOpen={isNavigationOpen}>
          <Switch>
            <Page title="Home" exact path="/" component={Home} />
            <Page title="Aktuell" path="/aktuell" component={Aktuell} />
            <Page title="Kontakt" path="/kontakt" component={Kontakt} />
            <Page
              title="Angebote & Dienstleistungen"
              path="/angebote/:id?"
              component={AngeboteDienstleistungen}
            />
            <Page
              title="Leitbild & Philosophie"
              path="/leitbild"
              component={LeitbildPhilosophie}
            />
            <Page
              title="Referenzen & Partner"
              path="/referenzen"
              component={ReferenzenPartner}
            />
            <Page title="UnserTeam" path="/team" component={UnserTeam} />
            <Page
              title="Wissenswertes"
              path="/wissenswertes"
              component={Wissenswertes}
            />
            <Page component={NotFound} />
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
