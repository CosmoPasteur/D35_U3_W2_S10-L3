import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ height: "40px", width: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="text-white" href="#home">
                Home
              </NavLink>
              <NavLink className="text-white" href="#">
                TV Shows
              </NavLink>
              <NavLink className="text-white" href="#">
                Movies
              </NavLink>
              <NavLink className="text-white" href="#">
                Recently Added
              </NavLink>
              <NavLink className="text-white" href="#">
                My List
              </NavLink>
            </Nav>
            <div className="d-flex align-items-center">
              <IoSearch className="icons me-3 text-white" />
              {/* <i className="bi bi-search icons text-white"></i> */}
              <div id="kids" className="fw-bold text-white">
                KIDS
              </div>
              <IoNotificationsOutline className="icons mx-3 text-white" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
