import React from 'react'
import './projects.css';
import GamifiedCoursesWebsite from '../../assets/ui-design.png';
import RestaurantManager from '../../assets/website-design.png';
import PersonalPortfolioWebsite from '../../assets/port.jpg'


const Projects = () => {
  return (
    <section id='projects'>
        <span className="projectsTitle">My Projects</span>
        <span className="briefInfo">I am well-versed in java, python, javascript and SQL.</span>
        <div className="projectsBars">
            
            <div className="projectsBar">
                <img src={GamifiedCoursesWebsite} alt="GamifiedCoursesWebsite" className="projectBarImg" />
                <div className="skillBarText">
                    <h2>Interactive learning platform</h2>
                    <p>Incorporated gamification elements to encourage users  to use online courses. Built collaboratively using Scrum and Git for version control.</p>
                </div>

            </div>

        

            <div className="projectsBar">
                <img src={RestaurantManager} alt="RestaurantManager" className="projectBarImg" />
                <div className="skillBarText">
                    <h2>Restaurant Manager</h2>
                    <p>Designed and implemented a Restaurant Manager application using Java. </p>
                </div>

            </div>

            
            <div className="projectsBar">
                <img src={PersonalPortfolioWebsite} alt="PersonalPortfolioWebsite" className="projectBarImg" />
                <div className="skillBarText">
                    <h2>Personal Portfolio Website</h2>
                    <p>Developed a dynamic Personal Portfolio Website using React and JavaScript.</p>
                </div>

            </div>
            
            
        </div>
    </section>
  );
}

export default Projects