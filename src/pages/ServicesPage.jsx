
import Wrapper from "../components/Wrapper";
import { serviceItems } from '../contexts/ProjectContext';
import Accordion from "../components/Accordion";
import Header from "../components/Header";
import wrapperStyle from "../Styles/Wrapper.module.css";

const ServicesPage = () => {
    return (

        <>
            <Header />

            <Wrapper className={wrapperStyle['full-page']}>

            <h1>Our Services</h1>

            <Accordion items={serviceItems} />

            </Wrapper>
        </>
    );
};
export default ServicesPage;