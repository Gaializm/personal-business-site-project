import { Link } from 'react-router-dom';
import style from '../Styles/ProjectCard.module.css';

const ProjectCard = ({ id, photo, projectName, description }) => {
    return (
        <Link to={`/projects/${id}`} className={style["project-card"]} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className={style["project-card_image"]}>
                <img src={photo} alt={projectName} />
            </div>
            <div className={style["project-card_content"]}>
                <h2 className={style["project-title"]}>{projectName}</h2>
                <p className={style["project-description"]}>{description}</p>
                <span className={style["see-more"]}>See more →</span>
            </div>
        </Link>
    );
};

export default ProjectCard;