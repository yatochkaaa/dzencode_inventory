import React from "react";
import { useNavigate } from "react-router-dom";
import { GearFill } from "react-bootstrap-icons";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import avatar from "../images/avatar.png";
import { ROUTE, CATEGORY } from "../utils/consts";

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      bg="light"
      className="position-fixed left-0 z-1 shadow align-items-start"
      style={{ height: "100vh", width: 200, left: 0, top: 0, paddingTop: 124 }}
    >
      <Container className="d-flex flex-column">
        <div className="position-relative mb-5">
          <Image className="menu__image" alt="avatar" src={avatar} />
          <button
            onClick={() => navigate(ROUTE.SETTINGS)}
            className="menu__imageButton shadow"
          >
            <GearFill fill="#586c7c" />
          </button>
        </div>

        <Nav className="d-flex flex-column align-items-center text-uppercase fw-bold">
          <Nav.Link onClick={() => navigate(ROUTE.ORDERS)} className="nav-link">
            {CATEGORY.ORDERS}
          </Nav.Link>
          <Nav.Link onClick={() => navigate(ROUTE.GROUPS)} className="nav-link">
            {CATEGORY.GROUPS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.PRODUCTS)}
            className="nav-link"
          >
            {CATEGORY.PRODUCTS}
          </Nav.Link>
          <Nav.Link onClick={() => navigate(ROUTE.USERS)} className="nav-link">
            {CATEGORY.USERS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.SETTINGS)}
            className="nav-link"
          >
            {CATEGORY.SETTINGS}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
