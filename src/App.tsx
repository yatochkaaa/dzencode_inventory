import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";
import "./styles/styles.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavigationMenu />
      <Container  
        style={{ marginLeft: 200, padding: "60px 100px" }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        corporis facere, sed eius quibusdam veritatis est ab, exercitationem in
        sunt eligendi sit, neque deserunt velit necessitatibus praesentium ipsum
        tenetur illo.
      </Container>
    </BrowserRouter>
  );
};

export default App;
