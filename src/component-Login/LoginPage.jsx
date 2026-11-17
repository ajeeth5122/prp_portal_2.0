import React, { useState } from 'react'
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import LoginIllustration from '../assets/LoginAssets/LoginIllustration.png'
import EmailIcon from '../assets/LoginAssets/EmailIcon.png'
import PasswordIcon from '../assets/LoginAssets/PasswordIcon.png'
import ShowPasswordIcon from '../assets/LoginAssets/ShowPasswordIcon.png'
import HidePasswordIcon from '../assets/LoginAssets/HidePasswordIcon.png'
import GoogleIcon from '../assets/LoginAssets/GoogleIcon.png'
import InfoIcon from '../assets/LoginAssets/InfoIcon.png'
import SignInArrow from '../assets/LoginAssets/SignInArrow.png'
import Upstock from '../assets/LoginAssets/Upstock.png'
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../DataProvider'

const LoginPage = () => {
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const{login}=useData()

    const Users= [
    {
        UserName:"Ajeeth",
        Role:"HR",
        Email:"Ajeethaj@gmail.com",
        password:"Ajeeth@12345"
    },
    {
        
        UserName:"HarshaVarthini",
        Role:"Student",
        Email:"Harsha@gmail.com",
        password:"Harsha@12345"
    },
    
]

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (error) setError("");
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;

    };

    const handleSignIn = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const matchedUser = Users.find(
                (u) => u.Email.toLowerCase() === formData.email.toLowerCase() && u.password === formData.password
            );

            if (matchedUser) {
                login(matchedUser)
                alert(`Logged in Successfully as ${matchedUser.UserName} (${matchedUser.Role})`);
                
                if (matchedUser.Role === "HR") {
                    navigate('/');
                } else if (matchedUser.Role === "Student") {
                    navigate('/StudentDashboard');
                } else {
                    navigate('/dashboard');
                }
            } else {
                setError({ general: 'Invalid email or password' });
                alert("Invalid email or password!");
            }
        }
    };

    return (
        <div className='PRP-Login-Page-Container'>
            <div className='Prp-Login-Page-Left-container'>
                <div className='Prp-Login-Page-Left'>

                    <div className='Prp-Product-HeroSec-Container'>
                        <h4 className='Prp-Product-HeroSec-welcome-Text'>AI Education & Workforce <br />Development Platform</h4>
                        <h3 className='Prp-Product-HeroSec-Text'>Connecting academic talent with career-defining corporate internships</h3>
                        <p className='Prp-Product-HeroSec-sub-heading'>The verified enterprise portal synchronizing university dean approvals, experiential learning hours, and Fortune 500 mentorship agreements</p>
                    </div>

                    <div className='Prp-Product-cards-wrapper'>
                        <div className='Prp-Product-cards-container'>
                            <h2 className='Prp-Product-cards-count'>14200+</h2>
                            <p className='Prp-Product-cards-title'>Active Interns</p>
                            <div className='Prp-Product-Image-Wrapper'>
                                <img src={Upstock} alt="stock up" />
                                <p className='Prp-Product-cards-sub-title'>+24% YoY</p>
                            </div>
                        </div>
                        <div className='Prp-Product-cards-container'>
                            <h2 className='Prp-Product-cards-count'>98.4%</h2>
                            <p className='Prp-Product-cards-title'>Credit Verfied</p>
                            <div className='Prp-Product-Image-Wrapper'>
                                <img src={Upstock} alt="stock up" />
                                <p className='Prp-Product-cards-sub-title'>Deans Approved</p>
                            </div>
                        </div>
                        <div className='Prp-Product-cards-container'>
                            <h2 className='Prp-Product-cards-count'>14200+</h2>
                            <p className='Prp-Product-cards-title'>Active Interns</p>
                            <div className='Prp-Product-Image-Wrapper'>
                                <img src={Upstock} alt="stock up" />
                                <p className='Prp-Product-cards-sub-title'>+24% YoY</p>
                            </div>
                        </div>
                    </div>
                    <div className='Prp-Login-Illustration-container'>
                        <img className='Prp-Login-Illustration-img' src={LoginIllustration} alt="" />
                    </div>
                </div>
                <div className='Prp-Product-Info-Container'>
                    <img src={InfoIcon} alt="" />
                    <p className='Prp-Product-Info-text'>Connecting students with the right opportunities to build successful careers.</p>
                </div>
            </div>
            <div className='Prp-Login-Page-Right'>
                <form onSubmit={handleSignIn} className='Prp-Login-Page-form'>
                    <div className='Prp-Login-Page-Form-Header'>
                        <p className='Prp-Login-Page-Form-Text'>Welcome Back</p>
                        <p className='Prp-Login-Page-Message'>Login to your EduHire account</p>
                    </div>
                    <div className='Prp-Login-Input-Container'>
                        <label htmlFor="email">Email Address</label>
                        <div className='Prp-Login-Input-Wrapper'>
                            <img className='Prp-Login-email-icon' src={EmailIcon} alt="" />
                            <input onChange={handleChange} className='Prp-Login-Input' id='email' name='email' value={formData.email} type="mail" placeholder='Enter Email address' />
                        </div>
                        {error.email && (<span className="error-msg">{error.email}</span>)}
                    </div>
                    <div className='Prp-Login-Input-Container'>
                        <div className='Prp-Login-forgot-Link-Wrappper'>
                            <label htmlFor="">Password</label>
                            <p onClick={() => navigate('/ForgotPassword')} className='Prp-Login-forgot-Text'>Forgot password ?</p>
                        </div>
                        <div className='Prp-Login-Input-Wrapper'>
                            <img className='Prp-Login-pwd-icon' src={PasswordIcon} alt="" />
                            <input onChange={handleChange} className='Prp-Login-Input' name='password' value={formData.password} autoComplete='current-password' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
                            <div className='Prp-Login-Input-Icon-Wrapper'>
                                <img onClick={() => setShowPassword(!showPassword)} className='Prp-Login-pwd-eye-icon' src={showPassword ? HidePasswordIcon : ShowPasswordIcon} alt="Showpasswords" />
                            </div>
                        </div>
                        {error.password && (<span className="error-msg">{error.password}</span>)}
                    </div>
                    <div className='Prp-Login-Checkbox-Container'>
                        <input name='rememberMe' onChange={handleChange} checked={formData.rememberMe} type="checkbox" />
                        <p className='Prp-Login-Checkbox-Text'>Keep me signed in</p>
                    </div>
                    <button type='Submit' className='Prp-Login-Button'>
                        <p>Sign in</p>
                        <img className='Prp-Login-Button-Icon' src={SignInArrow} alt="" />

                    </button>
                    <div className="Prp-ResetLink-Container">
                        <div className="Prp-resetLink-Seperator"></div>
                        <p className="Prp-ResetLink-text">Or Continue with</p>
                        <div className="Prp-resetLink-Seperator"></div>
                    </div>
                    <div className='Prp-Login-Social-Logins-Container'>
                        <div className='Prp-Login-Google-Button'>
                            <img className='Prp-Login-Google-icon' src={GoogleIcon} alt="Google" />
                            <p>Google</p>
                        </div>
                        <p className='Prp-Login-Account-Creation-Link'>Don't have an account? <Link onClick={() => { navigate('/Registration') }}>Create Account</Link></p>
                        <div className='Prp-Login-NavLinks'>
                            <Link>Help</Link>
                            <span className='Prp-Seperator-Dot-Black'></span>
                            <Link>Privacy</Link>
                            <span className='Prp-Seperator-Dot-Black'></span>
                            <Link>Terms</Link>
                        </div>
                    </div>
                </form>



            </div>
        </div>

    )
}

export default LoginPage