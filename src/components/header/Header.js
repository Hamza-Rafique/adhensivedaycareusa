import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-color">
      <Container>
        <div className="brand navbar-brand">Adhensive Day Care</div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
          
            <Nav.Link href="#deets">03056168840</Nav.Link>
            
            <NavDropdown title={ <i class="fas fa-book-open-reader"></i>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Create Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Bookings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">My Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
