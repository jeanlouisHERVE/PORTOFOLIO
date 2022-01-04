import './styles.scss';
import { workData } from '../../data.js';
import CardWorksMobile from '../CardWorksMobile';
import ReverseCard from '../ReverseCard';

const WorksMobileReverseCards = () => (

<div className="Cards--container">
  {
  workData.map((project)=>(
    <ReverseCard 
      key={project.id} 
      project={project}
      variant="click"
    />
  ))
 }
</div>

); 

export default WorksMobileReverseCards