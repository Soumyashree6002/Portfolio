import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I'm passionate about leveraging data-driven insights to tackle real-world challenges.</p>
                        <p>I actively engage in competitive programming, which helps me build logical thinking and problem-solving skills.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML and CSS</p><hr style={{width: "75%"}} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width: "50%"}} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{width: "80%"}} /></div>
                        <div className="about-skill"><p>C and C++</p><hr style={{width: "80%"}} /></div>
                        <div className="about-skill"><p>Data Analysis</p><hr style={{width: "60%"}} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About