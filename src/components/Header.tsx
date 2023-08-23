import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";
import TopMenu from "./TopMenu";

const Header: React.FC = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand
          className="d-flex align-items-center text-uppercase text-success fw-bold"
          href="./"
        >
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top me-2"
          />
          Inventory
        </Navbar.Brand>

        <div className="ml-auto">
          <TopMenu />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
