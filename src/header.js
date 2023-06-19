import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './header.css';
const navbar = {backgroundColor: 'rgb(85 54 33)'};
function Header() {
    return (
        <Navbar collapseOnSelect expand="sm" style={navbar}>
          <Navbar.Brand href="#home">
           
            <img src="logo.png"/>           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mr-3">
              <Nav.Link className="linkText"  href="#features">Dashboard</Nav.Link>
              <Nav.Link className="linkText" href="#pricing">Events</Nav.Link>
              <Nav.Link className="linkText" href="#pricing">Help</Nav.Link>
              <Nav.Link className="linkText" href="#pricing">Logout</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            
             */}  </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    
}

export default Header;
