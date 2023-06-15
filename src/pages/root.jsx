import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Image,
    Row,
    Col,
  } from "react-bootstrap";
  import { Outlet } from "react-router-dom";
  
  function Root() {
    return (
      <>
        <Navbar style={{ backgroundColor: "#830000" }} expand="lg">
          <Container>
            <Row>
              <Col sm={8} md={4}>
                <Navbar.Brand href="#home">
                  <Image
                    src="https://i.ibb.co/Qm0XBTd/logo-tugs-skilvul.png"
                    alt="ecowaste logo"
                    width={150}
                    height={50}
                  />
                </Navbar.Brand>
              </Col>
              <Col sm={4} md={8}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">Tentang Kami</Nav.Link>
                    <Nav.Link href="#services">Pilah Sampah</Nav.Link>
                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/article">Artikel</NavDropdown.Item>
                      <NavDropdown.Item href="/news">Berita</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <div>
          <Outlet />
        </div>
      </>
    );
  }
  
  export default Root;