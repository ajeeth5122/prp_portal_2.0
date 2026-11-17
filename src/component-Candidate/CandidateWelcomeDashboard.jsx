import React, { useState } from 'react'
import './CandidateDashboard.css'
import CandidateDashboard from './CandidateDashboard'
import Footer from '../ResusableComponent/Footer';
import Header from '../ResusableComponent/Header';

const CandidateWelcomeDashboard = () => {
  const [activetab, setActivetab] = useState('Dashboard');

  const sidebaritems = ['Dashboard', 'Job Search', 'Application Center', 'Interview Schedule', 'AssessmentCenter', 'My Offers',
    'Training Program', 'AI Career Assistant', 'Resume Manager', 'My Profile', 'Notification Center', 'Help center & FAQ', 'Account Settings']

  return (
    <>
      <Header isLoggedin={true}/>
      <div className='Prp-Candidate-Dashboard-Container'>
        <div className='Prp-Candidate-Dashboard-Sidebar'>
          {sidebaritems.map((item) =>
            <div key={item} onClick={() => setActivetab(item)} 
            className={activetab===item ? 'Prp-Candidate-Dashboard-Sidebar-Navitem-Active' : 'Prp-Candidate-Dashboard-Sidebar-Navitem'}>
              <p className='Prp-Candidate-Sidebar-Title'>{item}</p>
            </div>
          )}
        </div>
        <div className='Prp-Candidate-Dashboard-Mainsec'>
          {activetab === 'Dashboard' && (<CandidateDashboard/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CandidateWelcomeDashboard