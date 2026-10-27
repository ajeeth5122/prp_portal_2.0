import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './WelcomeRegistration.css';
import WelcomeIllustration from '../assets/RegistrationAssets/WelcomeRegistrationIllustration.png';
import UnifiedPlatformIcon from '../assets/RegistrationAssets/UnifiedPlatformIcon.png';
import DropdownArrow from '../assets/RegistrationAssets/DropdownArrow.png';
import CandidateRegistration from './CandidateRegistration';
import Logo from "../assets/RegistrationAssets/Prp_Logo.png";
import PlacementOfficerRegistration from './PlacementOfficerRegistration';
import RecruiterRegistration from './RecruiterRegistration';
import TrainingCoRegistration from './TrainingCoRegistration';

const WelcomeRegistration = () => {
    const { role } = useParams();
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState('');
    const Roles = ['Student', 'Recruiter', 'Placement Officer', 'Training Coordinator'];

    useEffect(() => {
        if (role) {
            const formattedRole = Roles.find(r => r.toLowerCase() === role.toLowerCase());
            if (formattedRole) {
                setSelectedRole(formattedRole);
            }
        } else {
            setSelectedRole('');
        }
    }, [role]);

    const handleRoleChange = (e) => {
        const chosenRole = e.target.value;
        setSelectedRole(chosenRole);
        if (chosenRole) {
            navigate(`/registration/${chosenRole.toLowerCase().replace(/\s+/g, '-')}`);
        } else {
            navigate('/register');
        }
    };

    return (
        <div className="PRP-Login-Page-Container">
            {!selectedRole && (
                <>
                    <section className="Prp-Login-Page-Left-container">
                        <div className="Prp-Login-Page-Left">
                            <div className='Prp-Registration-Header'>
                                <div className='Prp-Registration-Header-Img-Cont'>
                                    <img src={Logo} alt="Logo" />
                                </div>
                                <div className='Prp-Registration-Title-Wrapper'>
                                    <h4 className='Prp-Product-Header-Title-Text'>AI Education & Workforce Development Platform</h4>
                                    <p className='Prp-Product-Header-Slogan'> Connect<span className='Prp-Slogan-Seperator-Dot'></span>Discover <span className='Prp-Slogan-Seperator-Dot'></span> Succeed</p>
                                </div>
                            </div>
                            <div className='Prp-Product-HeroSec-Container'>
                                <h3 className='Prp-Product-HeroSec-Text'>Welcome to your career <br />collaborative workspace.</h3>
                                <p className='Prp-Product-HeroSec-sub-heading'>Join over 14,000+ ambitious students, corporate mentors, leading enterprises, and <br /> academic institutions shaping the future of workforce talent.</p>
                            </div>
                            <div className='Prp-Login-Illustration-container'>
                                <img className='Prp-Login-Illustration-img' src={WelcomeIllustration} alt="" />
                            </div>

                        </div>
                       
                            <div className='Prp-Product-Info-Container'>
                                <img className="Prp-Registration-Left-Footer-Img" src={UnifiedPlatformIcon} alt="" />
                                <div className="Prp-Registration-Hor-Seperator"></div>
                                <div className="Prp-Registration-Left-Footer-text">
                                    <p>Better training today,</p>
                                    <p>Brighter opportunities tomorrow.</p>
                                </div>
                                
                            </div>
                           
                        
                    </section>
                    <section className="Prp-registration-Page-Right">
                        <div className="Prp-Login-Page-form">
                            <div className="prp-WelcomeRegistration-Form-Header">
                                <h2>Your Journey Starts Here</h2>
                                <p>Select your account type below to begin your tailored registration</p>
                            </div>
                            <div className="prp-WelcomeRegistration-Role-Group">
                                <label htmlFor="prp-WelcomeRegistration-Role">SELECT YOUR ROLE <span>*</span></label>
                                <div className="prp-WelcomeRegistration-Select-Wrapper">
                                    <select
                                        id="prp-WelcomeRegistration-Role"
                                        value={selectedRole}
                                        onChange={handleRoleChange}
                                        required
                                    >
                                        <option value="" disabled>Select role</option>
                                        {Roles.map((r) => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                    <img className="prp-WelcomeRegistration-Select-Arrow" src={DropdownArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {selectedRole === 'Student' && (
                <CandidateRegistration />
            )}
            {selectedRole === 'Recruiter' && (
                <RecruiterRegistration />
            )}
            {selectedRole === 'Placement Officer' && (
                <PlacementOfficerRegistration />
            )}
            {selectedRole === 'Training Coordinator' && (
                <TrainingCoRegistration />
            )}
        </div>
    );
};

export default WelcomeRegistration;