import React from 'react'
import './experience.css';
import Maths from '../../assets/pencil.jpg';
import Hackathon from '../../assets/hackathon.jpg';
import Med from '../../assets/medicine.jpg';


const Experience = () => {
  return (
    <section id='experience'>
        <span className="experienceTitle">My Experience</span>
        <span className="moreInfo">I have developed strong communication and teamwork skills from my extracurricular experiences below. </span>
        <div className="experiencesBars">
            
            <div className="experiencesBar">
                <img src={Med} alt="Med" className="projectBarImg" />
                <div className="skillText">
                    <h2>MedTech Society</h2>
                    <p>Created a medication price comparison app for GP surgeries. Presented complex software concepts to medical and non-technical professionals.</p>
                </div>

            </div>

            <div className="experiencesBar">
                <img src={Hackathon} alt="Hackathon" className="projectBarImg" />
                <div className="skillText">
                    <h2>Women in Stem Hackathon, 1st Place</h2>
                    <p>Designed and showcased innovative workshops to increase interest in tech for women. Workshops included robot dance competitions and arduino art installations.</p>
                </div>

            </div>

            <div className="experiencesBar">
                <img src={Maths} alt="Maths" className="projectBarImg" />
                <div className="skillText">
                    <h2>Mathematics Tutor</h2>
                    <p>Fine-tuned my communication skills with varied age groups.</p>
                </div>

            </div>

            
        </div>
    </section>
  );
}

export default Experience