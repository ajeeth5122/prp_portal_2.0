import React, { useState } from 'react'
import './Header.css'
import Logo from "../assets/RegistrationAssets/Prp_Logo.png";
import SearchIcon from '../assets/LandingAssets/SearchIconHeader.png'
import AIIcon from '../assets/LandingAssets/AIIcon.png'
import Faq from '../assets/LandingAssets/FAQicon.png'
import Notification from '../assets/LandingAssets/NotificationIcon.png'
import Downarrow from '../assets/LandingAssets/ProfileDropdown.png'
import MyProfileIcon from '../assets/LandingAssets/MyProfileIcon.png'
import Profile from '../assets/LandingAssets/ReviewProImg.png'
import SettingsIcon from '../assets/LandingAssets/SettingsIcon.png'
import ChangePasswordIcon from '../assets/LandingAssets/ChangePasswordIcon.png'
import HelpIcon from '../assets/LandingAssets/Help&FaqIcon.png'
import LogoutIcon from '../assets/LandingAssets/LogoutIcon.png'
import { useNavigate } from 'react-router-dom'
import LogoutModal from './LogoutModal';

const Header = ({isLoggedin}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };
  const handleLogoutConfirm = () => {
    setIsLogoutModalOpen(false);
    navigate('/');
  };

  return (

    <>
    {!isLoggedin ?(
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
    ):(
    <div className='Prp-Landing-AL-Header'>
      <div className='Prp-Registration-Header'>
        <div className='Prp-Registration-Header-Img-Cont'>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='Prp-Registration-Title-Wrapper'>
          <h4 className='Prp-Product-Header-Title-Text'>AI Education & Workforce Development Platform</h4>
          <p className='Prp-Product-Header-Slogan'> Connect<span className='Prp-Slogan-Seperator-Dot'></span>Discover <span className='Prp-Slogan-Seperator-Dot'></span> Succeed</p>
        </div>
      </div>
      <div className='Prp-AL-Header-Searchbar'>
        <img src={SearchIcon} alt="" width={15} />
        <input className='Prp-AL-Header-Searchbar-input' type="text" placeholder='Search Keyword, Location...,' />
      </div>
      <div className='Prp-AL-Nav-Container'>
        <img className='Prp-AL-Nav-Item' src={Notification} alt="" />
        <img className='Prp-AL-Nav-Item' src={AIIcon} alt="" />
        <img className='Prp-AL-Nav-Item' src={Faq} alt="" />
        <div onClick={toggleDropdown} className='Prp-AL-Profile-Wrapper' >
          <img className='Prp-AL-Nav-Item' src={Profile} alt="" />
          <img className='Prp-AL-Nav-Item' src={Downarrow} alt="" />
          {isDropdownOpen && (
            <div className='Prp-Profile-Dropdown'>
              <ul>
                <li>
                  <img src={MyProfileIcon} alt="My Profile" />
                  <span>My Profile</span>
                </li>
                <li>
                  <img src={SettingsIcon} alt="Settings" />
                  <span>Settings</span>
                </li>
                <li>
                  <img src={ChangePasswordIcon} alt="Change Password" />
                  <span>Change Password</span>
                </li>
                <li>
                  <img src={HelpIcon} alt="Help Center" />
                  <span>Help Center & FAQ</span>
                </li>
                <li onClick={() => { 
                      setIsDropdownOpen(false); 
                      setIsLogoutModalOpen(true); 
                    }}>
                  <img src={LogoutIcon} alt="Logout" />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    )}
    <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogoutConfirm} 
      />
    
  </>
  )


}

export default Header