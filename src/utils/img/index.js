import iconMobile from '../../../src/assets/mobile.png'
import iconGlobe from '../../../src/assets/globe.png'
import iconWriting from '../../../src/assets/writing.png'
import homeGreceAntique from '../../../src/assets/img/home-greceantique.png';
import homePaulKichilov from '../../../src/assets/img/home-paulkichilov.png';
import homeStadium from '../../../src/assets/img/home-stadium.png';
import avatarJl from '../../../src/assets/Jean-Louis.svg';
import shakeHands from '../../../src/assets/shake.svg';

const imgs = {
  avatarJl,
  iconMobile,
  iconGlobe,
  iconWriting,
  shakeHands,
  homeGreceAntique,
  homePaulKichilov,
  homeStadium,
};

const findImgByKey = (imgKey) => imgs[imgKey];

export default findImgByKey;
