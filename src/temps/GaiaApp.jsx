import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectProvider } from '../contexts/ProjectContext';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';


const GaiaApp = () => {
    return (
        <ProjectProvider> 
            <Router>
                <Routes>
                    {/* Services Page */}
                    <Route path="/" element={<ServicesPage />} />

                    {/* Contact Page */}
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Project Detail Page */}
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />

                    {/* 404 Page */}
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Router>
        </ProjectProvider>
    );
}
export default GaiaApp;