import './styles.scss';

export default function Training() {
  const trainings = [
    {
      id: 1,
      yearStart: "2021",
      yearEnd: "2021",
      organism: "La Capsule",
      title: "Fullstack web & mobile",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myfrenchstartup.com%2Ffr%2Fstartup-france%2F165823%2Fla_capsule&psig=AOvVaw22LFKC4Z_GbP9H9W3SbC9z&ust=1644402062147000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjAmZrx7_UCFQAAAAAdAAAAABAD",
      desc: "Apprenez à coder en Web & mobile en 10 semaines.",
      link: "https://www.lacapsule.academy/",
      gitHub: "",
      percentage: 100
    },
    {
      id: 2,
      yearStart: "2021",
      yearEnd: "2021",
      organism: "O'Clock",
      title: "Formateur développeur Web",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lacuisineduweb.com%2Fannuaire%2Foclock&psig=AOvVaw2mvVWNjWY2zRGGnDWUDAyD&ust=1644402110437000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCtpbPx7_UCFQAAAAAdAAAAABAO",
      desc: "Un programme permettant de se spécialiser sur les technologies appréciées des recruteurs, un cursus débouchant sur un Titre professionnel reconnu par l’Etat et un coaching intensif jusqu’à la signature de votre premier contrat de développeur web.",
      link: "https://oclock.io/formations/developpeur-web",
      gitHub: "",
      percentage: 100
    },
    {
      id: 3,
      yearStart: "2021",
      yearEnd: "",
      organism: "Udemy",
      title: "Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FUdemy&psig=AOvVaw06vrkf5YousR2QqAheQmVF&ust=1644402142791000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDqwL_x7_UCFQAAAAAdAAAAABAD",
      desc: "Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase.",
      link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
      gitHub: "https://github.com/jeanlouisHERVE/E-COMMERCE-PROJECT",
      percentage: 52
    },
    {
      id: 4,
      yearStart: "2022",
      yearEnd: "",
      organism: "Udemy",
      title: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FUdemy&psig=AOvVaw06vrkf5YousR2QqAheQmVF&ust=1644402142791000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDqwL_x7_UCFQAAAAAdAAAAABAD",
      desc: "Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.",
      link: "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/",
      gitHub:"https://github.com/jeanlouisHERVE/YOURPLACES-PROJECT-BACKEND",
      percentage: 76 
    },
    {
      id: 5,
      yearStart: "2022",
      yearEnd: "2022",
      organism: "Udemy",
      title: "TypeScript En Partant De Zéro",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FUdemy&psig=AOvVaw06vrkf5YousR2QqAheQmVF&ust=1644402142791000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDqwL_x7_UCFQAAAAAdAAAAABAD",
      desc: "Élargissez votre palette de compétences.",
      link: "https://www.udemy.com/course/typescript-de-a-a-z/",
      gitHub:"",
      percentage: 100
    },
  ];
  return (
    <div className="trainings" id="trainings">
      <h1>Formations</h1>
      <div className="trainings--container">
        {trainings.map((training) => (
            <div className='trainings--content'>
                <div className='trainings--leftside'>

                </div>
                <div className='trainings--middleside'>

                </div>
                <div className='trainings--rightside'>

                </div>

            </div>
          ))}
      </div>
    </div>
  );
}