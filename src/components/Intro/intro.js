import React from 'react'
import './intro.css'
import bg from '../../assets/subject.png' 


const intro = () => {
  return (
    <section id = "intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Shereen</span><br /> A Computer Science Student</span>
        <p className="introPara">I am a curious computer science student with a love for innovative and customer-centric technology.</p>
        

      </div>
      
      <img src={bg} alt="Profile" className="bg" />

    </section>
  )
}

export default intro