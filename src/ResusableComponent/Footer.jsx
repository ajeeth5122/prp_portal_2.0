import React from 'react'
import './Footer.css'
import Facebook from '../assets/LandingAssets/FacebookFooter.png'
import Xicon from '../assets/LandingAssets/XFooter.png'
import Insta from '../assets/LandingAssets/InstaFooter.png'
const Footer = () => {
  return (
    <div className='Prp-Footer-main-Container'>
    <div className='Prp-Footer-Container'>
        <div className='Prp-Footer-Nav-Container'>
            <h4 className='Prp-Footer-Navitems-Head'>COMPANY</h4>
            <ul>
            <li className='Prp-Footer-Navitem'>About us</li>
            <li className='Prp-Footer-Navitem'>Careers</li>
            <li className='Prp-Footer-Navitem'>Contact</li>
            </ul>
        </div>
        <div className='Prp-Footer-Nav-Container'>
            <h4 className='Prp-Footer-Navitems-Head'>PLATFORM</h4>
            <ul>
            <li className='Prp-Footer-Navitem'>Job Postings</li>
            <li className='Prp-Footer-Navitem'>AI Resume Matching</li>
            <li className='Prp-Footer-Navitem'>Training & skill Readiness</li>
            <li className='Prp-Footer-Navitem'>Placement Analytics</li>
            </ul>
        </div>
        <div className='Prp-Footer-Nav-Container'>
            <h4 className='Prp-Footer-Navitems-Head'>SUPPORT</h4>
            <ul>
            <li className='Prp-Footer-Navitem'>Help Center</li>
            <li className='Prp-Footer-Navitem'>FAQ</li>
            <li className='Prp-Footer-Navitem'>Raise Issue</li>
            <li className='Prp-Footer-Navitem'>Contact Support</li>
            </ul>
        </div>
        <div className='Prp-Footer-Nav-Container'>
            <h4 className='Prp-Footer-Navitems-Head'>LEGAL</h4>
            <ul>
            <li className='Prp-Footer-Navitem'>Privacy Policy</li>
            <li className='Prp-Footer-Navitem'>Terms & Conditions</li>
            <li className='Prp-Footer-Navitem'>Cookie Policy</li>
            </ul>
        </div>
    </div>
    <div className='Prp-Footer-Copyrights-Container'>
        <p>© 2026 Placement and Recruitment Platform.</p>
        <div className='Prp-Footer-SocialMedia-Container'>
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Xicon} alt="X Logo" />
            <img src={Insta} alt="Instagram Logo" />
        </div>
    </div>
    </div>
  )
}

export default Footer