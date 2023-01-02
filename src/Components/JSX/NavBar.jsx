import { Navbar, Container, Nav } from "react-bootstrap";
function NavBar() {
  return (
    <main>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kelechukwu M. Christwin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </main>
  );
}

export default NavBar;
