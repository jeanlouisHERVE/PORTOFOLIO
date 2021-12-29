import './styles.scss';
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import findImgByKey from '../../utils/img';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "iconMobile",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "iconGlobe",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "iconWriting",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div 
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
        <div key={d.id} className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={findImgByKey(d.icon)} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p> 
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
                <img 
                  src={d.img}
                  alt=""
                />
            </div>
          </div>
        </div>
        ))}
      </div>
      <IoIosArrowBack style={{height: '50px', width:'50px', position: 'absolute', left:'100px', cursor:'pointer'}} onClick={() => handleClick("left")}/>
      <IoIosArrowForward style={{height: '50px', width:'50px', position: 'absolute', right:'100px', cursor:'pointer'}} onClick={() => handleClick()}/>
    </div>
  )
}
