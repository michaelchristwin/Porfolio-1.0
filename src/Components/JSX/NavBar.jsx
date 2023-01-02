import { Navbar, Container, Nav } from "react-bootstrap";
import "../CSS/styles.css";

function NavBar() {
  return (
    <main>
      <Navbar className="nav-bar" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <h4 className="typed">Hi, I'm Kelechukwu M. Christwin</h4>
          </Nav>
        </Container>
      </Navbar>
    </main>
  );
}

export default NavBar;
