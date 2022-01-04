import './styles.scss';
import findImgByKey from '../../utils/img';
import cn from "classnames";
import { useState } from 'react';

const ReverseCard = ({project, variant}) => {
  const [showBack, setShowBack] = useState(false); 

  function handleClick() { 
    if (variant === "click") { 
      setShowBack(!showBack); 
    } 
  } 

  return (
    <div
      className="flip-card-outer"
      onClick={handleClick} 
    >
      <div
        className={showBack ? "flip-card-inner showBack" : "flip-card-inner"}
      >
        <div className="cardFront">
          <div className="card-body ">
            <img src={findImgByKey(project.img)}/>
          </div>
        </div>
        <div className="cardBack">
          <div className="card-body " >
            <p className="card-text">{project.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReverseCard;