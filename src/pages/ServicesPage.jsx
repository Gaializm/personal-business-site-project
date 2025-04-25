
import { serviceItems } from '../contexts/ProjectContext';
import ProjectGallery from '../components/ProjectGallery';
import Accordion from "../components/Accordion";

const ServicesPage = () => {
    return (

        <>

        <div>
            <h1>Our Services</h1>
        </div>
        <div>
            <Accordion items={serviceItems} />
        </div>


        </>
    );
};
export default ServicesPage;