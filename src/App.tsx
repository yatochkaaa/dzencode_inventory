import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "./components/AppRouter";
import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";
import "./styles/styles.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavigationMenu />
      <Container style={{ marginLeft: 200, padding: "60px 100px" }}>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
};

export default App;
