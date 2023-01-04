import NavBar from "./JSX/NavBar";
import ProgressBar from "react-bootstrap/ProgressBar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CSS/styles.css";
import MyLinks from "./JSX/MyLinks";

function Home() {
  AOS.init();
  return (
    <main>
      <NavBar />
      <MyLinks />
      <div className="bg-light content p-5 border">
        <div
          className="p-3 bg-white snip text-center shadow border"
          id="about"
          data-aos="zoom-in-up"
        >
          <h1 className="text-danger">About</h1>
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
        <hr />
        <div className="snip p-3 shadow mt-5 ">
          <h1 className="text-danger text-center">Skills</h1>
          <div className="text-left">
            <p>CSS</p>
            <ProgressBar variant="success" now={70} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
