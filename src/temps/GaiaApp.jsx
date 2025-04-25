import HomePage from '../pages/HomePage';
import { ProjectProvider } from '../contexts/ProjectContext';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ServicesPage from '../pages/ServicesPage';
import WorkPage from '../pages/WorkPage';
import ContactPage from '../pages/ContactPage';
import NavBar from "../components/NavBar";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFound"
import Footer from "../components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import PopupContextProvider from '../contexts/PopupContext';
import Popup from '../components/Popup';
import ChatbotLauncher from '../components/ChatbotLauncher';




const GaiaApp = () => {
    return (
         <>
            <PopupContextProvider>
                <div>
                    <Popup />
                </div>
            </PopupContextProvider>
            <header>
                <NavBar />
            </header>
            <ProjectProvider>
            <main>
                    <Routes>


                        {/* Home Page */}
                        <Route path="/" element={<HomePage />} />

                        {/* About Page */} 
                        <Route path="/about" element={<AboutPage />} />

                        {/* Work Page */}
                        <Route path="/work" element={<WorkPage />} />

                        {/* Services Page */}
                        <Route path="/services" element={<ServicesPage />} />

                        {/* Contact Page */}
                        <Route path="/contact" element={<ContactPage />} />

                        {/* Project Detail Page */}
                        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />

                        {/* 404 Not Found Page */ }
                        <Route path="*" element={<NotFound />} />
                </Routes>
                </main>
            </ProjectProvider>
            <ChatbotLauncher />
            <Footer />
        </>
           
    );
}
export default GaiaApp;