import { Navbar, Container, Nav } from "react-bootstrap";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
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
        <div className="me-2 links">
          <a href="https://twitter.com/mikechristwin" className="mx-1">
            <TwitterIcon />
          </a>
          <a href="https://github.com/michaelchristwin" className="mx-1">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-christwin-b8b980253/"
            className="mx-1"
          >
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com/kelechukwu.christwin/">
            <FacebookIcon />
          </a>
        </div>
      </Navbar>
    </main>
  );
}

export default NavBar;
