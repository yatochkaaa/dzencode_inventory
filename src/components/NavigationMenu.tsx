import React from "react";
import { useNavigate } from "react-router-dom";
import { GearFill } from "react-bootstrap-icons";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import avatar from "../images/avatar.png";
import { ROUTE, CATEGORY } from "../utils/consts";

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" className="navigationMenu shadow">
      <Container className="d-flex flex-column">
        <div className="navigationMenu__imageContainer">
          <Image className="navigationMenu__image" alt="avatar" src={avatar} />
          <button
            onClick={() => navigate(ROUTE.SETTINGS)}
            className="navigationMenu__imageButton shadow"
          >
            <GearFill fill="#586c7c" />
          </button>
        </div>

        <Nav className="navigationMenu__nav flex-column">
          <Nav.Link
            onClick={() => navigate(ROUTE.ORDERS)}
            className="navigationMenu__link"
          >
            {CATEGORY.ORDERS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.GROUPS)}
            className="navigationMenu__link"
          >
            {CATEGORY.GROUPS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.PRODUCTS)}
            className="navigationMenu__link"
          >
            {CATEGORY.PRODUCTS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.USERS)}
            className="navigationMenu__link"
          >
            {CATEGORY.USERS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.SETTINGS)}
            className="navigationMenu__link"
          >
            {CATEGORY.SETTINGS}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
