import React, { createContext, useContext } from 'react';
import ServicePreview from '../components/servicePreview';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/dino.png';
import project5Image from "../assets/movieposter.jpg";
import project6Image from "../assets/library.jpg";
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
    {
        id: 4,
        photo: project4Image,
        projectName: 'Custom Characters',
        description: 'I designed custom characters to be used in custom calendars for SDI Innovations. These characters were created using Adobe Photoshop and come as PNGs with transparent backgrounds.',
    },
    {
        id: 5,
        photo: project5Image,
        projectName: 'Outer Banks Poster',
        description: 'For this project, we were instructed to make a custom movie or TV show poster. I decided to do Outer Banks as I was watching the show at the time. I wanted to show most of the characters in the poster, but also wanted to focus on one of the main characters.',
    },
    {
        id: 6,
        photo: project6Image,
        projectName: 'Ronald Reagan Library Line Work & Color',
        description: 'In the project, I replicated an already existing image by tracing the lines using Adobe Illustrator and then coloring in with Adobe Photoshop.',
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
    {
        title: 'Web Design and Development',
        content: (
            <>
                <p>Custom and reactive website designs.</p>
                <ServicePreview projectId={4} />
            </>
        ),
    },
    {
        title: 'Custom Illustrations',
        content: (
            <>
                <p>Custom illustrations and drawings of your choice.</p>
                <ServicePreview projectId={2} />
            </>
        ),
    },
    {
        title: 'UX Design',
        content: (
            <>
                <p>Designing user experiences and interfaces, especially for apps and websites.</p>
                <ServicePreview projectId={5} />
            </>
        ),
    },
    {
        title: 'Digital Marketing',
        content: (
            <>
                <p>Includes SEO, email marketing, social media ads, and web analytics.</p>
                <ServicePreview projectId={6} />
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