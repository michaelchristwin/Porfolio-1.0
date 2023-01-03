import NavBar from "./JSX/NavBar";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CSS/styles.css";
import Avatar from "./imgs/avatar2.jpg";

function Home() {
  AOS.init();
  return (
    <main>
      <NavBar />
      <div className="d-flex hola">
        <div
          data-aos="fade-up"
          className="shit pt-2 px-5 mt-3 d-flex flex-column text-center"
        >
          <img src={Avatar} alt="Profile Photo" className="dp mx-auto" />
          <div className="mt-2 links bg-white">
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
          <p>About</p>
          <p>Toolkit</p>
          <p>Experience</p>
          <p>Hobbies</p>
        </div>
        <div className="container-fluid intro" data-aos="flip-right">
          <span className="d-block">Front End</span>
          <span className="d-block">Engineer</span>
          <img
            src="https://media.giphy.com/media/deKZM8D0orxwQ18qtB/giphy.gif"
            className="arrow"
            alt="arrow"
          />
        </div>
      </div>
      <div className="bg-white content">
        <h1>Juice WRLD</h1>
      </div>
    </main>
  );
}

export default Home;
