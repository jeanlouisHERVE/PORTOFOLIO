import dashboardManagerGetReadii from '../../../src/assets/img/dashboardManager-getReadii.png'
import iconMobile from '../../../src/assets/mobile.png'
import iconGlobe from '../../../src/assets/globe.png'
import iconWriting from '../../../src/assets/writing.png'
import homeEshopZTM from '../../../src/assets/img/home-eshop600.png'
import homeGetReadii from '../../../src/assets/img/home-getReadii600.png'
import homeGreceAntique from '../../../src/assets/img/home-greceantique400.png';
import homePaulKichilov from '../../../src/assets/img/home-paulkichilov400.png';
import homePortfolio from '../../../src/assets/img/home-portfolio.png';
import homeStadium from '../../../src/assets/img/home-stadium600.png';
import profil from '../../../src/assets/img/profil500.png'
import shakeHands from '../../../src/assets/shake.svg';

const imgs = {
  profil,
  iconMobile,
  iconGlobe,
  iconWriting,
  shakeHands,
  homeEshopZTM,
  homeGetReadii,
  homeGreceAntique,
  homePaulKichilov,
  homePortfolio,
  homeStadium,
  dashboardManagerGetReadii,
};

const findImgByKey = (imgKey) => imgs[imgKey];

export default findImgByKey;
