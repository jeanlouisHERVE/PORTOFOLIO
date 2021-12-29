import "./styles.scss";
import findImgByKey from '../../utils/img';
import ContactForm from '../ContactForm';

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={findImgByKey('shakeHands')} alt="" />
      </div>
      <div className="right">
        <ContactForm />
      </div>
    </div>
  );
}