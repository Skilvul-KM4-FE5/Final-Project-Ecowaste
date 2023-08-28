import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Dropdown, NavLink } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#830000" }}>
      <Container>
        <Navbar.Brand href="/">
          <img src="https://i.ibb.co/Qm0XBTd/logo-tugs-skilvul.png" width="150" height="50" className="d-inline-block align-top" alt="Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/tentang">Tentang Kami</Nav.Link> */}
            <Nav.Link href="/pilah-sampah">Pilah Sampah</Nav.Link>
            <NavDropdown title="Blog" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/artikel">Artikel</NavDropdown.Item>
              <NavDropdown.Item href="/Berita">Berita</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Kontak Kami</Nav.Link>

            {isLoggedIn && (
              <Dropdown>
                <Dropdown.Toggle className="p-0 border-0 mt-1 bg-transparent">{data && <NavLink>{data.username}</NavLink>}</Dropdown.Toggle>

                <Dropdown.Menu variant="light">
                  {data && (
                    <>
                      <Nav.Link onClick={handleLogout}>logout</Nav.Link>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            )}
            {!isLoggedIn && <Nav.Link onClick={handleLogin}>Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
