import { Container, NavDropdown } from "react-bootstrap";
import { CiTextAlignLeft } from "react-icons/ci";
import { LuText } from "react-icons/lu";

const DropDown = () => {
  return (
    <Container fluid className="px-0">
      <div className="bg-dark text-white d-flex justify-content-between">
        <nav className="d-flex align-items-center ">
          <h2 className="mx-3">TvShow</h2>
          <NavDropdown id="nav-dropdown-dark-example" title="Dropdown" menuVariant="dark">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Anime</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">New Releases</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Preferite Movie</NavDropdown.Item>
          </NavDropdown>
        </nav>
        <div>
          <a href="#">
            <CiTextAlignLeft className="border align-items-center text-white" />
          </a>
          <a href="#">
            <LuText className="border icons mx-3 text-white" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default DropDown;
