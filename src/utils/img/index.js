import dashboardManagerGetReadii from '../../../src/assets/img/dashboardManager-getReadii.png';
import iconMobile from '../../../src/assets/mobile.png';
import iconGlobe from '../../../src/assets/globe.png';
import iconWriting from '../../../src/assets/writing.png';
import homeYourPlaces from '../../assets/img/place-YourPlaces700.png';
import homeEshopZTM from '../../../src/assets/img/home-eshop600.png';
import homeGetReadii from '../../../src/assets/img/home-getReadii600.png';
import homeGreceAntique from '../../../src/assets/img/home-greceantique400.png';
import homePaulKichilov from '../../../src/assets/img/home-paulkichilov400.png';
import homePortfolio from '../../../src/assets/img/home-portfolio.png';
import homeStadium from '../../../src/assets/img/home-stadium600.png';
import profil from '../../../src/assets/img/profil500.png';
import shakeHands from '../../../src/assets/shake.svg';
import arrowDown from '../../../src/assets/down.png';
import oclock from '../../../src/assets/img/Oclock.png';
import lacapsule from '../../../src/assets/img/Lacapsule.png';
import udemy from '../../../src/assets/img/Udemy.png';

const imgs = {
  profil,
  iconMobile,
  iconGlobe,
  iconWriting,
  shakeHands,
  homeYourPlaces,
  homeEshopZTM,
  homeGetReadii,
  homeGreceAntique,
  homePaulKichilov,
  homePortfolio,
  homeStadium,
  dashboardManagerGetReadii,
  arrowDown,
  oclock,
  lacapsule,
  udemy
};

const findImgByKey = (imgKey) => imgs[imgKey];

export default findImgByKey;
