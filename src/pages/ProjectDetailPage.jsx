import ProjectAbout from '../components/ProjectAbout';
import style from "../styles/pageStyle.module.css";

const ProjectDetail = () => {
    return (
        <>
            <div className={style.pageContainer}>
                <ProjectAbout />
            </div>
        </>

    );
};

export default ProjectDetail;