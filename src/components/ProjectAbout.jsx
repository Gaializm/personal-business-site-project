import { useParams } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext'; // Import the context hook
import style from '../Styles/ProjectAbout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectAbout = () => {
    const { projectId } = useParams(); // Get the project ID from the URL
    const projects = useProjects(); // Access project data from context
    const project = projects.find((p) => p.id === parseInt(projectId)); // Find the project

    if (!project) {
        return <div>Project not found</div>; // Handle case where project is not found
    }

    return (
        <div className={style["about"]}>
            <div className={style["about_content"]}>
                <h2>{project.projectName}</h2>
                <p>{project.description}</p>
                <button
                    onClick={() => window.open(project.link, "_blank")} // Opens the link in a new tab
                    className={style["project-link"]}
                >
                    View This Project &nbsp; <FontAwesomeIcon icon={faExternalLinkAlt} />
                </button>
            </div>
            <div className={style["about_image"]}>
                <img src={project.photo} alt={project.projectName} />
            </div>
        </div>
    );
};

export default ProjectAbout;