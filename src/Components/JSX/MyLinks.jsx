import Arrow from "../imgs/arrow.gif";
import Avatar from "../imgs/avatar2.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LaptopIcon from "@mui/icons-material/Laptop";
import WorkIcon from "@mui/icons-material/Work";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Resume from "../imgs/resume.pdf";
import DownloadIcon from "@mui/icons-material/Download";

function MyLinks() {
  return (
    <div className="d-flex hola">
      <div
        data-aos="fade-up-right"
        className="shit pt-2 px-5 mt-3 d-flex flex-column text-left"
      >
        <img src={Avatar} alt="Profile Photo" className="dp mx-auto" />
        <div className="mt-2 links">
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
        <div className="mt-3 mx-auto">
          <a href="#about" className="link d-block">
            <PersonIcon /> About
          </a>
          <a className="link d-block" href="#skills">
            <LaptopIcon /> Skills
          </a>
          <a className="link d-block" href="#experience">
            <WorkIcon /> Experience
          </a>
          <p className="link d-block">
            <SportsEsportsIcon /> Hobbies
          </p>
        </div>
        <div>
          <a href={Resume} download className="resume">
            Download Resume <DownloadIcon />
          </a>
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
