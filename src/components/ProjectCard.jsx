import { Link } from 'react-router-dom';
import style from '../Styles/Projects.module.css';

const ProjectCard = ({ id, photo, projectName, description }) => {
    return (
        <Link to={`/projects/${id}`} className={style["project-card"]}>
            <div className={style["project-card_image"]}>
                <img src={photo} alt={projectName} />
            </div>
            <div className={style["project-card_content"]}>
                <h2>{projectName}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;