import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#830000" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://i.ibb.co/Qm0XBTd/logo-tugs-skilvul.png"
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Tentang Kami</Nav.Link>
            <Nav.Link href="/pilah-sampah">Pilah Sampah</Nav.Link>
            <NavDropdown title="Blog" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/artikel">Artikel</NavDropdown.Item>
              <NavDropdown.Item href="/Berita">Berita</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#kontak">Kontak Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
