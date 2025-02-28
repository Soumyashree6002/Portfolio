import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import copyright_icon from '../../assets/copyright_icon.svg'
import facebook_logo from '../../assets/facebook_logo.jpg'
import instagram_logo from '../../assets/Instagram_logo.webp'
import twitter_logo from '../../assets/twitter_logo.png'
import linkedin_logo from '../../assets/linkedin_logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-center">
                <div className="footer-img">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-list">
                    <p>About</p>
                    <p>Projects</p>
                    <p>Connect with me</p>
                </div>
                <div className="footer-logos">
                    <img src={facebook_logo} alt="" />
                    <img src={instagram_logo} alt="" />
                    <img src={twitter_logo} alt="" />
                    <img src={linkedin_logo} alt="" />
                </div>
                <div className="footer-copyright">
                    <img src={copyright_icon} alt="" />
                    <p>soumyashree6002. All Rights Reserved</p>
                </div>
            </div>
            <div className="footer-right">
                <AnchorLink className='anchor-link'  href='#home'>Back-to-top</AnchorLink>
            </div>
        </div>
    )
}

export default Footer