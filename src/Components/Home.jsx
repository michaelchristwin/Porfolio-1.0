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
      <div data-aos="fade-up" className="shit p-3">
        <img src={Avatar} alt="" className="dp" />
      </div>
    </main>
  );
}

export default Home;
