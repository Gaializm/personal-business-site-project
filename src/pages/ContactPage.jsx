import Wrapper from "../components/Wrapper";
import Accordion from "../components/Accordion";
import Header from "../components/Header";
import wrapperStyle from "../Styles/Wrapper.module.css";
import ContactForm from "../components/ContactForm";

const ServicesPage = () => {

    const faqItems = [
        {
            title: "How can I contact you?",
            content: <p>You can reach us through the contact form on this page or by emailing us directly at contact@ctrlaltcreate.com.</p>,
        },
        {
            title: "Do you offer custom work?",
            content: <p>Yes! We offer personalized design and development services. Reach out and tell us what you need — we’d love to hear about your project.</p>,
        },
        {
            title: "What is your typical turnaround time?",
            content: <p>Turnaround times vary depending on the project size, but we aim to respond to all inquiries within 2–3 business days.</p>,
        },
        {
            title: "Can I see samples of your work?",
            content: <p>Absolutely! Visit our Work Samples or Services page to explore examples of what we’ve created.</p>,
        },
    ];

    return (

        <>
            <Header />

            <Wrapper className={wrapperStyle['full-page']}>

                <h1>Contact Us</h1>

                <ContactForm />

                <Accordion items={faqItems} />

            </Wrapper>
        </>
    );
};
export default ServicesPage;