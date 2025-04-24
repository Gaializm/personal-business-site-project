import { Link } from 'react-router-dom';
import style from '../Styles/servicePreview.module.css';
import { useProjects } from '../contexts/ProjectContext';

const ServicePreview = ({ projectId }) => {
    const projects = useProjects();
    const project = projects.find((p) => p.id === projectId);

    if (!project) return null;

    return (
        <Link to={`/projects/${project.id}`} className={style.card}>
            <img src={project.photo} alt={project.projectName} className={style.image} />
            <div className={style.overlay}>
                <span className={style.text}>See example</span>
            </div>
        </Link>
    );
};

export default ServicePreview;