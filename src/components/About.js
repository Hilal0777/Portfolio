import React from 'react';
import "../styles/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import hilalImage from "../image/Hilal.jpeg"

const About = () => {
    const skills = [
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Express.js", icon: faNodeJs },
        { name: "MongoDB" },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "JavaScript", icon: faJs },
    ];

    return (
        <section id="about">
            <h2>About Me</h2>
            <p>
                I am a skilled and experienced web developer with a passion for building innovative and user-friendly applications. I have a strong understanding of the MERN stack and am proficient in a variety of programming languages and technologies, including JavaScript, React, Node.js, and MongoDB. I am also a highly motivated and results-oriented individual with a proven track record of success. I am confident that I can use my skills and experience to contribute to your team and help you achieve your goals.
            </p>
            <img src={hilalImage} alt="About Me" className="image-container" />
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <FontAwesomeIcon icon={skill.icon} />
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
