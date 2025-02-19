import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaDocker, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiJenkins, SiTableau, SiMysql, SiPostgresql, SiPowerbi } from 'react-icons/si';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skill"><FaHtml5 className="skill-icon"/><span>HTML</span></div>
        <div className="skill"><FaCss3Alt className="skill-icon"/><span>CSS</span></div>
        <div className="skill"><SiJavascript className="skill-icon"/><span>JavaScript</span></div>
        <div className="skill"><FaReact className="skill-icon"/><span>React</span></div>
        <div className="skill"><FaPython className="skill-icon"/><span>Python</span></div>
        <div className="skill"><SiMongodb className="skill-icon"/><span>MongoDB</span></div>
        <div className="skill"><SiJenkins className="skill-icon"/><span>Jenkins</span></div>
        <div className="skill"><SiTableau className="skill-icon"/><span>Tableau</span></div>
        <div className="skill"><SiMysql className="skill-icon"/><span>MySQL</span></div>
        <div className="skill"><SiPostgresql className="skill-icon"/><span>PostgreSQL</span></div>
        <div className="skill"><FaJava className="skill-icon"/><span>Java</span></div>
        <div className="skill"><FaDocker className="skill-icon"/><span>Docker</span></div>
        <div className="skill"><FaGithub className="skill-icon"/><span>GitHub</span></div>
        <div className="skill"><SiPowerbi className="skill-icon"/><span>Power BI</span></div>
      </div>
    </section>
  );
};

export default Skills;
