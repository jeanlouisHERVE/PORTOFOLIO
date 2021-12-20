import "./styles.scss";
import ContactForm from '../ContactForm';

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <ContactForm />
      </div>
    </div>
  );
}