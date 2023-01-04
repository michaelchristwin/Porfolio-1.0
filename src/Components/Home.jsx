import NavBar from "./JSX/NavBar";
import ProgressBar from "react-bootstrap/ProgressBar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CSS/styles.css";
import MyLinks from "./JSX/MyLinks";
import Bio from "./imgs/bio.jpg";

function Home() {
  AOS.init();
  return (
    <main>
      <NavBar />
      <MyLinks />
      <div className="content p-5 d-flex justify-content-between">
        <div
          className="p-3 bg-white snip text-center shadow border"
          id="about"
          data-aos="zoom-in-up"
        >
          <h1 className="text-danger">About</h1>
          <img src={Bio} alt="bio" className="bio" />
          <hr />
          <aside>
            "Kelechukwu Christwin is a 17 year old front end developer with 2
            years of experience in coding. He has worked as a Junior End
            Developer for Switch Electric Ltd, an energy-as-a-service startup
            company in Nigeria. Kelechukwu is highly interested in AI,
            cryptocurrencies, and the Internet of Things, and is passionate
            about programming. In his free time, Kelechukwu enjoys listening to
            music, taking photographs, and playing video games."
          </aside>
        </div>

        <div
          className="snip p-3 pb-5 shadow bg-white"
          id="skills"
          data-aos="zoom-in-up"
        >
          <h1 className="text-danger text-center">Skills</h1>
          <div className="text-left">
            <div>
              <span className="tool">HTML/CSS</span>
              <ProgressBar variant="primary" now={89} className="icon" />
            </div>
            <div className="mt-2">
              <span className="tool">JavaScript</span>
              <ProgressBar variant="primary" now={85} className="icon" />
            </div>
            <div className="mt-2">
              <span className="tool">Bootstrap</span>
              <ProgressBar variant="primary" now={90} className="icon" />
            </div>
            <div className="mt-2">
              <span className="tool">Mongo DB</span>
              <ProgressBar variant="primary" now={90} className="icon" />
            </div>
            <div className="mt2"></div>
            <span className="tool">Express</span>
            <ProgressBar variant="primary" now={90} className="icon" />
            <div className="mt2"></div>
            <span className="tool">React</span>
            <ProgressBar variant="primary" now={88} className="icon" />
            <div className="mt2"></div>
            <span className="tool">Node JS</span>
            <ProgressBar variant="primary" now={90} className="icon" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
