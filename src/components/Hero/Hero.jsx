import React from 'react'
import './Hero.css'
import my_photo from '../../assets/my_photo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={my_photo} alt="" />
            <h1><span>I'm Soumyashree Nayak,</span> a developer and data enthusiast</h1>
            <p>I am a second year undergraduate of the Department of Chemical Engineering at Indian Institute of Technology, Kharagpur</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero