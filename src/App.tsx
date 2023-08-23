import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavigationMenu />
    </BrowserRouter>
  );
};

export default App;
