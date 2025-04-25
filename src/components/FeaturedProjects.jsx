import { useProjects } from '../contexts/ProjectContext';
import ProjectCard from './ProjectCard';
import style from '../Styles/FeaturedProjects.module.css'; 

const FeaturedProjects = () => {
    const projects = useProjects();

    // Randomize and select two projects
    const getRandomProjects = (arr, count) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const featured = getRandomProjects(projects, 2);

    return (
        <div className={style.featuredContainer}>
            <h2 className={style.featuredTitle}>Featured Projects</h2>
            <div className={style.featuredGrid}>
                {featured.map((project) => (
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

export default FeaturedProjects;