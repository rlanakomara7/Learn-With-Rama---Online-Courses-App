import "../styles/Contact.css";
import parse from "html-react-parser";

function Contact(props) {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="footer">
          {props.contactSection.map((item, index) => {
            return (
              <div className="footer-section" key={index}>
                {parse(item.content)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
