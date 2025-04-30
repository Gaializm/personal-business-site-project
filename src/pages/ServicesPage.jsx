
import { serviceItems } from '../contexts/ProjectContext';

import Accordion from "../components/Accordion";
import style from "../styles/pageStyle.module.css";

const ServicesPage = () => {
    return (

        <>

        <div className={style.pageContainer}>

            <div>
                <h1>Our Services</h1>
            </div>
            <div>
                <Accordion items={serviceItems} />
                </div>
        </div>


        </>
    );
};
export default ServicesPage;