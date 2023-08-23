import React from "react";
import avatar from "../images/avatar.png";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";

const NavigationMenu: React.FC = () => {
  return (
    <Navbar
      bg="light"
      className="position-fixed left-0 shadow align-items-start"
      style={{ height: "100vh", width: 200, left: 0, top: 0, marginTop: 124 }}
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
          <div
            className="position-absolute d-flex justify-content-center align-items-center bottom-0 end-0 shadow"
            style={{
              width: 36,
              height: 36,
              background: "white",
              borderRadius: "50%",
            }}
          >
            <GearFill width={14} height={14} fill="grey" />
          </div>
        </div>

        <Nav className="d-flex flex-column align-items-center text-uppercase fw-bold">
          <Nav.Link href="/home" className="nav-link">
            Приход
          </Nav.Link>
          <Nav.Link href="/groups" className="nav-link">
            Группы
          </Nav.Link>
          <Nav.Link href="/products" className="nav-link">
            Продукты
          </Nav.Link>
          <Nav.Link href="/users" className="nav-link">
            Пользователи
          </Nav.Link>
          <Nav.Link href="/settings" className="nav-link">
            Настройки
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
