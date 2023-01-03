import NavBar from "./JSX/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CSS/styles.css";
import Avatar from "./imgs/avatar2.jpg";

function Home() {
  AOS.init();
  return (
    <main>
      <NavBar />
      <div
        data-aos="fade-up"
        className="shit pt-3 px-5 mt-3 d-flex flex-column text-center"
      >
        <img src={Avatar} alt="Profile Photo" className="dp mx-auto" />
        <p className="mt-2">Front End Engineer</p>
        <p>About</p>
        <p>Toolkit</p>
        <p>Experience</p>
        <p>Hobbies</p>
      </div>
    </main>
  );
}

export default Home;
