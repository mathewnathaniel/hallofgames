import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar fluid rounded>

      <Navbar.Brand href="/">
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          GGI
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link as="span">
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link as="span">
          <Link to="/explore">Explore</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
  );
}
