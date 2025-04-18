import React, { createContext, useContext } from 'react';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.png';

const projects = [
    {
        id: 1,
        photo: project1Image,
        projectName: 'Examining Trends in Educational Attainment',
        description: 'In this project I put to the test my data visualization skills and assembled a Tableau dashboard examining trends in educational attainment as measured by the U.S. Census Bureau, primarily within the Puertorican population.',
        link: 'https://public.tableau.com/app/profile/gaializ.mejias.gonzalez/viz/AnExaminationofthePuertoRicanDiasporabyEducationalAttainmentOverview/StatesOverviewDashboard',
    },
    {
        id: 2,
        photo: project2Image,
        projectName: 'Realistic Landscape Digital Illustration',
        description: 'This digital illustration intends to recreate a real landscape from Pelicano Beach, Isabela, PR. I created it myself over the course of a week utilizing Krita, digital illustration software.',
        link: 'https://docs.google.com/presentation/d/1CNQar2ZlzSVfNp1Ps7eKJh9-csy-157_x1jCLVgy1aM/edit',
    },
    {
        id: 3,
        photo: project3Image,
        projectName: 'Wearable Fitness Tracker App Wireframe',
        description: 'Here is a screenshot of an interactive wireframe I created as part of a User Experience Design course. It is intended to be an innovative wearable fitness tracker application to gamify exercise and encourage users to view it as a more fun activity.',
        link: 'https://marvelapp.com/prototype/7biha50',
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