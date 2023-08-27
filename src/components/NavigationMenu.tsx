import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GearFill } from "react-bootstrap-icons";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import avatar from "../images/avatar.png";
import { ROUTE, CATEGORY } from "../utils/consts";

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveLink = (route: ROUTE) =>
    location.pathname === route && "navigationMenu__link--active";

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
            className={`navigationMenu__link ${isActiveLink(ROUTE.ORDERS)}`}
          >
            {CATEGORY.ORDERS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.GROUPS)}
            className={`navigationMenu__link ${isActiveLink(ROUTE.GROUPS)}`}
          >
            {CATEGORY.GROUPS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.PRODUCTS)}
            className={`navigationMenu__link ${isActiveLink(ROUTE.PRODUCTS)}`}
          >
            {CATEGORY.PRODUCTS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.USERS)}
            className={`navigationMenu__link ${isActiveLink(ROUTE.USERS)}`}
          >
            {CATEGORY.USERS}
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate(ROUTE.SETTINGS)}
            className={`navigationMenu__link ${isActiveLink(ROUTE.SETTINGS)}`}
          >
            {CATEGORY.SETTINGS}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
