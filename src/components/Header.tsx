import React from "react";
import { Col, Container, Form, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";
import TopMenu from "./TopMenu";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" className="header shadow z-2">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={4} lg={3}>
            <Navbar.Brand
              className="header__brand"
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
          </Col>

          <Col xs={6} lg={3}>
            <Form.Control type="text" placeholder="Поиск" className="h-50" />
          </Col>

          <Col xs={2} lg={6}>
            <TopMenu />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
