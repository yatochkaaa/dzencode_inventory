import React from "react";
import { useNavigate } from "react-router-dom";
import { GearFill } from "react-bootstrap-icons";
import { Container, Nav, Navbar, Image, Button } from "react-bootstrap";
import avatar from "../images/avatar.png";
import { ROUTE } from "../utils/consts";

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
          <Image
            width={100}
            height={100}
            alt="avatar"
            src={avatar}
            roundedCircle
          />
          <Button
            onClick={() => navigate(ROUTE.SETTINGS)}
            className="position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center border-0 shadow"
            style={{
              width: 36,
              height: 36,
              background: "white",
              borderRadius: "50%",
            }}
          >
            <GearFill fill="grey" />
          </Button>
        </div>

        <Nav className="d-flex flex-column align-items-center text-uppercase fw-bold">
          <Nav.Link href={ROUTE.ORDERS} className="nav-link">
            Приход
          </Nav.Link>
          <Nav.Link href={ROUTE.GROUPS} className="nav-link">
            Группы
          </Nav.Link>
          <Nav.Link href={ROUTE.PRODUCTS} className="nav-link">
            Продукты
          </Nav.Link>
          <Nav.Link href={ROUTE.USERS} className="nav-link">
            Пользователи
          </Nav.Link>
          <Nav.Link href={ROUTE.SETTINGS} className="nav-link">
            Настройки
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
