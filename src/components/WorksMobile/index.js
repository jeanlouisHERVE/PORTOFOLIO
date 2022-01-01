import './styles.scss';
import { workData } from '../../data.js';
import CardWorksMobile from '../CardWorksMobile';

const WorksMobile = () => (

<div className="Cards--container">
 {
  workData.map((project)=>(
    <CardWorksMobile key={project.id} project={project}/>
  ))
 }

</div>

); 

export default WorksMobile 