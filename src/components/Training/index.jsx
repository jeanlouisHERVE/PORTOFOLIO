import './styles.scss';
import { Progress } from 'reactstrap';
import findImgByKey from '../../utils/img';
import { IconContext } from "react-icons";
import { Tooltip } from '@mui/material';
import { FaGithub, FaChalkboardTeacher } from 'react-icons/fa'

export default function Training() {
  const trainings = [
    {
      id: 1,
      yearStart: "2021",
      yearEnd: "2021",
      organism: "La Capsule",
      title: "Fullstack web & mobile",
      img: "lacapsule",
      desc: "Apprenez à coder en Web & mobile en 10 semaines.",
      course: "https://www.lacapsule.academy/",
      github: "",
      technologies: "",
      percentage: 100
    },
    {
      id: 2,
      yearStart: "2021",
      yearEnd: "2021",
      organism: "O'Clock",
      title: "Formateur développeur Web",
      img: "oclock",
      desc: "Un programme permettant de se spécialiser sur les technologies appréciées des recruteurs, un cursus débouchant sur un Titre professionnel reconnu par l’Etat et un coaching intensif jusqu’à la signature de votre premier contrat de développeur web.",
      course: "https://oclock.io/formations/developpeur-web",
      github: "",
      technologies: "",
      percentage: 100
    },
    {
      id: 3,
      yearStart: "2021",
      yearEnd: "",
      organism: "udemy",
      title: "Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)",
      img: "udemy",
      desc: "Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase.",
      course: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
      github: "https://github.com/jeanlouisHERVE/E-COMMERCE-PROJECT",
      technologies: "",
      percentage: 52
    },
    {
      id: 4,
      yearStart: "2022",
      yearEnd: "",
      organism: "udemy",
      title: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      img: "udemy",
      desc: "Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.",
      course: "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/",
      github:"https://github.com/jeanlouisHERVE/YOURPLACES-PROJECT-BACKEND",
      technologies: "",
      percentage: 76 
    },
    {
      id: 5,
      yearStart: "2022",
      yearEnd: "2022",
      organism: "udemy",
      title: "TypeScript En Partant De Zéro",
      img: "udemy",
      desc: "Élargissez votre palette de compétences.",
      course: "https://www.udemy.com/course/typescript-de-a-a-z/",
      github:"",
      technologies: "",
      percentage: 100
    },
  ];
  return (
    <div className="trainings" id="trainings">
      <h1>Formations</h1>
      <div className="trainings--container">
        {trainings.map((training) => (
            <div key={training.id} className='trainings--content'>
                <div className='trainings--picture'>
                  <img src={findImgByKey(training.img)} alt=""/>
                </div>
                <div className="trainings--links">
                  {training.github && <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><Tooltip title="Github" placement="bottom"><a href={training.github} target="_blank" rel="noreferre"><FaGithub style={{ marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></Tooltip></IconContext.Provider></>}
                  {training.course && training.course ? <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><Tooltip title="Cours" placement="bottom"><a href={training.course} target="_blank" rel="noreferre"><FaChalkboardTeacher style={{ marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></Tooltip></IconContext.Provider></> : null}
                </div>
                <div className='trainings--middleside'>
                  <p>{training.yearStart}-{training.yearEnd}</p>
                  <h1>{training.title}</h1>
                  <p>{training.desc}</p>
                  <div className="trainings--progressbar">
                    <Progress animated value={training.percentage} style={{height:'22px', width:'100%'}}/>
                    <p>{Math.round(training.percentage)}% Complete</p>
                  </div>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
}