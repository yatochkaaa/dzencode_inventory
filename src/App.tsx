import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationMenu from "./components/NavigationMenu";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationMenu />
    </BrowserRouter>
  );
};

export default App;
