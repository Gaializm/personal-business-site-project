import { useProjects } from '../contexts/ProjectContext';
import ProjectCard from './ProjectCard';
import style from '../Styles/ProjectGallery.module.css'; 

const ProjectGallery = () => {
    const projects = useProjects(); // Grab projects from context

    return (
        <div className={style.galleryContainer}>
            <div className={style.galleryGrid}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        photo={project.photo}
                        projectName={project.projectName}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;