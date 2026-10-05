import { useState } from "react";
import "./ForgotPassword.css";
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import MainIllustration from "../assets/LoginAssets/ForgetPasswordIllustration.png";
import EmailIcon from "../assets/LoginAssets/EmailIcon.png";
import GoogleIcon from "../assets/LoginAssets/GoogleIcon.png";
import ArrowRight from "../assets/LoginAssets/SignInArrow.png";
import ShieldIcon from "../assets/LoginAssets/TrustedIcon.png";
import { Link, useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess(false);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();

    if (!value) {
      setError("Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess(true);
    navigate('/ResetPasswordLinkSent')
  };

  return (
    <div className="PRP-Login-Page-Container">
       <div className='Prp-Login-Page-Left-container'>
      <div className="Prp-Login-Page-Left">
        <div className='Prp-Product-Header-Container'>
          <div className='Prp-ProductLogo-img-container'><img className='Prp-ProductLogo-img' src={ProductLogo} alt="ProductLogo" /></div>
          <div>
            <h4 className='Prp-Product-Title'>Placement & Recruitment Platform</h4>
            <p className='Prp-Product-SubTitle'>Connect <span className='Prp-Seperator-Dot-white'></span> Discover <span className='Prp-Seperator-Dot-white'></span> Succeed</p>
          </div>
        </div>

        {/* <div className="Prp-ForgotPassword-content">
          <h1 className="Prp-ForgotPassword-heading">
            Forgot Your Password?
            <br />
            Get Back to Your Account.
          </h1>
          <p className='Prp-Product-HeroSec-sub-heading'>
            Don't worry if you've forgotten your password. We'll help you
            securely reset it and <br /> get you back to your Eduhire account.
          </p>
        </div> */}
        <div className='Prp-Product-HeroSec-Container'>
                    <h3 className='Prp-Product-HeroSec-Text'>Forgot Your Password?<br /> Get Back to Your Account.</h3>
                    <p className='Prp-Product-HeroSec-sub-heading'>Discover jobs, build your skills, and take the next step in your  <br />career journey with EduHire.</p>
                </div>

        {/* <div className='Prp-Login-Illustration-container' > */}
        <img className="Prp-ForgotPassword-illustration" src={MainIllustration} alt="Forgot password illustration"/>
        {/* </div> */}
        </div>
        <div className='Prp-Product-Info-Container'>
          <div className="prp-Product-Info-Image-container">
          <img src={ShieldIcon} alt="" />
          </div>
          <div>
            <p className="Prp-ForgotPassword-quoteMain">
              "A unified platform that simplifies training, placements, and
              recruitment management."
            </p>
            <p className="Prp-ForgotPassword-quoteAuthor">
              Dr. Elena Vance — Dean of Experiential Education, Northeastern
              Consortium
            </p>
          </div>
        </div>
      </div>

      <div className='Prp-Login-Page-Right'>
        <form onSubmit={handleSubmit} className='Prp-Login-Page-form'>
          <div className='Prp-Login-Page-Form-Header'>
            <p className='Prp-Login-Page-Form-Text'>Forgot Password ?</p>
            <p className='Prp-Login-Page-Message'>Enter your registered ID or email to receive <br /> password reset links.</p>
          </div>
          <div className='Prp-Login-Input-Container'>
            <label htmlFor="">Email Address</label>
            <div className='Prp-Login-Input-Wrapper'>
              <img className='Prp-Login-email-icon' src={EmailIcon} alt="" />
              <input className='Prp-Login-Input' type="mail" placeholder='Enter Email address' value={email} onChange={handleChange} />
            </div>
            {error && (
              <p className="Prp-ForgotPassword-error" role="alert">
                {error}
              </p>
            )}
            {success && (
              <p className="Prp-ForgotPassword-success" role="status">
                Reset link sent! Please check your email.
              </p>
            )}

          </div>
          <button className="Prp-Login-Button" type="submit">
            Send Reset Link
            <img className="Prp-ForgotPassword-arrowIcon" src={ArrowRight} alt="" />
          </button>

          {<div className="Prp-ResetLink-Container">
                      <div className="Prp-resetLink-Seperator"></div>
                        <p className="Prp-ResetLink-text">Back to Login</p>
                      <div className="Prp-resetLink-Seperator"></div>
                    </div>}
          <div className='Prp-Login-Social-Logins-Container'>
            <div className='Prp-Login-Google-Button'>
              <img className='Prp-Login-Google-icon' src={GoogleIcon} alt="Google" />
              <p>Google</p>
            </div>
            <p className='Prp-Login-Account-Creation-Link'>Don't have an account? <Link>Create Account</Link></p>
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
  );
};

export default ForgotPassword;