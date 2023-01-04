import Arrow from "../imgs/arrow.gif";
import Avatar from "../imgs/avatar2.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

function MyLinks() {
  return (
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
          <a
            href="https://www.facebook.com/kelechukwu.christwin/"
            className="mx-1"
          >
            <FacebookIcon />
          </a>
          <a href="mailto:kelechukwuchristwin@gmail.com">
            <EmailIcon />
          </a>
        </div>
        <div className="mt-3">
          <a href="#about" className="link">
            <PersonIcon /> About
          </a>
          <p className="link">Toolkit</p>
          <p className="link">Experience</p>
          <p className="link">Hobbies</p>
        </div>
      </div>
      <div className="intro" data-aos="flip-right">
        <span className="d-block">Front End</span>
        <span className="d-block">Engineer</span>
        <img src={Arrow} className="arrow" alt="arrow" />
      </div>
    </div>
  );
}

export default MyLinks;
