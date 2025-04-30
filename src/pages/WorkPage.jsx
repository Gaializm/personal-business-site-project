import ProjectGallery from '../components/ProjectGallery';
import style from "../styles/pageStyle.module.css";

const WorkPage = () => {
    return (

        <>
            <div className={style.pageContainer}>
                <div>
                    <h1>Our Work</h1>
                </div>
                <div>
                    <ProjectGallery />
                </div>

            </div>

        </>
    );
};
export default WorkPage;