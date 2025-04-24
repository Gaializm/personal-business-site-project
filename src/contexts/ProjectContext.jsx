import React, { createContext, useContext } from 'react';
import ServicePreview from '../components/servicePreview';
import project1Image from '../assets/placeholderProjectImage.jpg';
import project2Image from '../assets/placeholderProjectImage.jpg';
import project3Image from '../assets/placeholderProjectImage.jpg';

const projects = [
    {
        id: 1,
        photo: project1Image,
        projectName: 'Examining Trends in Educational Attainment',
        description: 'In this project I put to the test my data visualization skills and assembled a Tableau dashboard examining trends in educational attainment as measured by the U.S. Census Bureau, primarily within the Puertorican population.',
    },
    {
        id: 2,
        photo: project2Image,
        projectName: 'Realistic Landscape Digital Illustration',
        description: 'This digital illustration intends to recreate a real landscape from Pelicano Beach, Isabela, PR. I created it myself over the course of a week utilizing Krita, digital illustration software.',
    },
    {
        id: 3,
        photo: project3Image,
        projectName: 'Wearable Fitness Tracker App Wireframe',
        description: 'Here is a screenshot of an interactive wireframe I created as part of a User Experience Design course. It is intended to be an innovative wearable fitness tracker application to gamify exercise and encourage users to view it as a more fun activity.',
    },
];

const services = [
    {
        title: 'Graphic Design',
        content: (
            <>
                <p>Custom designs for web, print, and branding.</p>
                <ServicePreview projectId={2} />
            </>
        ),
    },
    {
        title: 'Data Visualization',
        content: (
            <>
                <p>Interactive dashboards and infographics.</p>
                <ServicePreview projectId={1} />
            </>
        ),
    },
];

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    return (
        <ProjectContext.Provider value={projects}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => useContext(ProjectContext);
export const serviceItems = services;