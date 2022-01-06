import './styles.scss';
import { workData } from '../../data.js';
import CardWorksMobile from '../CardWorksMobile';
import ReverseCard from '../ReverseCard';

const WorksMobile = () => (

<div className="Cards--container" id="works">
 {
  workData.map((project)=>(
    <CardWorksMobile key={project.id} project={project}/>
  ))
 }
  {/* <ReverseCard/> */}
</div>

); 

export default WorksMobile 