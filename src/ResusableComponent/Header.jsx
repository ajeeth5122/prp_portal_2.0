import React, { useState } from 'react'
import './Header.css'
import Logo from "../assets/RegistrationAssets/Prp_Logo.png";
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home')
  return (
    <div className='Prp-Landing-Header'>
      <div className='Prp-Registration-Header'>
        <div className='Prp-Registration-Header-Img-Cont'>
          <img src={Logo} alt="Logo" />
        </div>
        <h4 className='Prp-Header-Logo'>Placement & Recruitement Platform</h4>
      </div>
      <div className='Prp-Header-Navbar'>
        <p onClick={() => { setActiveTab('Home') }}
          className={activeTab === 'Home' ? 'Prp-Header-Nav-Items Prp-Nav-Active' : 'Prp-Header-Nav-Items'}>Home</p>
        <p onClick={() => { setActiveTab('Features') }}
          className={activeTab === 'Features' ? 'Prp-Header-Nav-Items Prp-Nav-Active' : 'Prp-Header-Nav-Items'}>Features</p>
        <p onClick={() => { setActiveTab('For Recruiters/Employers') }}
          className={activeTab === 'For Recruiters/Employers' ? 'Prp-Header-Nav-Items Prp-Nav-Active' : 'Prp-Header-Nav-Items'}>For Recruiters/Employers</p>
        <p onClick={() => { setActiveTab('For Training Institutions') }}
          className={activeTab === 'For Training Institutions' ? 'Prp-Header-Nav-Items Prp-Nav-Active' : 'Prp-Header-Nav-Items'}>For Training Institutions</p>
        <p onClick={() => { setActiveTab('Success Stories') }}
          className={activeTab === 'Success Stories' ? 'Prp-Header-Nav-Items Prp-Nav-Active' : 'Prp-Header-Nav-Items'}>Success Stories</p>
      </div>
      <div className='Prp-Landing-Button'>
        <button onClick={() => navigate('/Registration')} className='Prp-Header-Register-Button'>Register</button>
        <button onClick={() => navigate('/Login')} className='Prp-Landingpage-Login-Button'>Login</button>
      </div>
    </div>
  )
}

export default Header