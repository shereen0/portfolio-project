import React from 'react'
import './projects.css';
import GamifiedCoursesWebsite from '../../assets/ui-design.png';
import EventsManagerAndroidApplication from '../../assets/app-design.png';
import RestaurantManager from '../../assets/website-design.png';
import PersonalPortfolioWebsite from '../../assets/port.jpg'


const Projects = () => {
  return (
    <section id='projects'>
        <span className="projectsTitle">My Projects</span>
        <span className="briefInfo">I have a strong foundational knowledge of Java, Python, React, SQL etc...</span>
        <div className="projectsBars">
            
            <div className="projectsBar">
                <img src={GamifiedCoursesWebsite} alt="GamifiedCoursesWebsite" className="projectBarImg" />
                <div className="skillBarText">
                    <h2>Gamified Courses Website</h2>
                    <p>Interactive learning platform with gamification elements. Built collaboratively using Scrum and Git for version control.</p>
                </div>

            </div>

            <div className="projectsBar">
                <img src={EventsManagerAndroidApplication} alt="EventsManagerAndroidApplication" className="projectBarImg" />
                <div className="skillBarText">
                    <h2>Events Manager Android Application</h2>
                    <p>Built an Events Manager Android Application in Java, enabling users to efficiently create, manage, and track events with an intuitive mobile interface.</p>
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