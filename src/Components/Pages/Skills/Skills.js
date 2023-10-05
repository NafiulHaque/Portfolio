import React from 'react';
import './Skills.css'; // Import your CSS file for styling

const Skills = () => {
    const skillsList = [
        { skill: 'JavaScript', percentage: 90 },
        { skill: 'React.js', percentage: 85 },
        { skill: 'HTML5', percentage: 95 },
        { skill: 'CSS3', percentage: 90 },
        { skill: 'Node.js', percentage: 80 },
        { skill: 'Express.js', percentage: 75 },
        { skill: 'MongoDB', percentage: 80 },
        { skill: 'Responsive Web Design', percentage: 85 },
        { skill: 'Git', percentage: 90 },
        { skill: 'UI/UX Design', percentage: 75 },
        // Add more skills here
    ];

    return (
        <section id="skills" className="skills-container">
            {/* <h2 className="section-title">Skills</h2> */}
            <div className="skills-chart">
                {skillsList.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-name">{skill.skill}</div>
                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${skill.percentage}%` }}
                            >
                                <span className="progress-text">{skill.percentage}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
