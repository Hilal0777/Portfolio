import React from 'react';
import "../styles/Project.css";

const projects = [
    {
        title: "Human Resource Management System (HRMS)",
        description:
            "The Human Resource Management System (HRMS) is a web-based application that helps businesses manage their employees.",
        link: "https://github.com/SeeBiz-Pakistan/hr-boto-admin-frontend/tree/Hilal_Ahmad",
    },
    {
        title: "Inventory Form",
        description: "I designed and developed an inventory form using React.js, Node.js, MongoDB, Express.js, CSS. The form collects information about products, including their name, price, quantity, and location. It is used to track inventory levels and to identify any potential shortages.",
        link: "https://github.com/Hilal0777/Inventory-Form",
    },

];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
