import styled from 'styled-components';
import findImgByKey from '../../utils/img'

export const CardWorksMobileContainer = styled.div`
  width: 40%;
  height: 27%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  position: relative;
  border: black solid 1px;
  z-index: 1;

    &:hover {
      transform: scale(1.05);
    }
  
`;

export const BackgroundPicture = styled.img`
  width: 100%;
  height: auto;
  display: block; 

    &:hover {
      display: block;
      z-index: 10;
    }
`;

export const Title = styled.h1`
  font-size: 17px;
  align-self: center;
  margin-right: 5px; 
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px; 
  z-index: 1;
`;

export const Description = styled.p`
  text-align: justify;
  font-size: 12px;
  z-index: 1;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: auto;
  z-index: 1;
`;

export const Technology = styled.div`
  margin-right: 5px;
  z-index: 1;
`;



