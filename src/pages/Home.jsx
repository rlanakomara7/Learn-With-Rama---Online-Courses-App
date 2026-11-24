import Footer from "../components/Footer";
import "../styles/Home.css";
import { homeSection } from "../data/HomeSection";
import parse from "html-react-parser";
import { courseSection } from "../data/CourseSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import Tutors from "../components/Tutors";
import { partnersList, partnersSection } from "../data/PartenersSection";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import { contactSection } from "../data/ContactSection";

function Home() {
  return (
    <>
      <div className="wrapper">
        {/* home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        {/* online course */}
        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>
        {/* tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        {/* partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
        {/* contact */}
        <Contact contactSection={contactSection} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
