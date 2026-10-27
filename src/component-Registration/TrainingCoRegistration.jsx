import { useState } from "react";
import DropdownArrow from '../assets/RegistrationAssets/DropdownArrow.png'
import TcIllustration from "../assets/RegistrationAssets/TCIllustrationReg.png";
import User from "../assets/RegistrationAssets/TCRegFooter.png";
import Logo from "../assets/RegistrationAssets/Prp_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import OtpModal from "../ResusableComponent/OtpModal";

const TrainingCoRegistration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        role: "Training Coordinator",
        fullName: "",
        email: "",
        mobile: "",
        University: "",
        gender: "Select gender",
        EmpId: "",
        password: "",
        confirmPassword: "",
        terms: false,
        isEmailVerified: false,
        isMobileVerified: false,
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [otpType, setOtpType] = useState("");

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        if (name === "Bio" && value.length > maxBioLength) return;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
            ...(name === "email" && { isEmailVerified: false }),
            ...(name === "mobile" && { isMobileVerified: false }),
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleOpenOtpModal = (type) => {
        if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setErrors((prev) => ({ ...prev, email: "Enter a valid email before verifying." }));
            return;
        }
        if (type === "mobile" && !/^[6-9]\d{9}$/.test(formData.mobile)) {
            setErrors((prev) => ({ ...prev, mobile: "Enter a valid 10-digit mobile number before verifying." }));
            return;
        }
        setOtpType(type);
        setIsOtpModalOpen(true);
    };

    const handleVerifySuccess = () => {
        setFormData((prev) => ({
            ...prev,
            ...(otpType === "email" && { isEmailVerified: true }),
            ...(otpType === "mobile" && { isMobileVerified: true }),
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.role) {
            newErrors.role = "Please select your role.";
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }

        if (!formData.University.trim()) {
            newErrors.University = "University Name is required.";
        }

        if (!formData.gender || formData.gender === 'Select gender') {
            newErrors.gender = "Please select your gender.";
        }

        if (!formData.EmpId) {
            newErrors.EmpId = "Please Enter a Employer Id.";
        }
        if (!formData.password) {
            newErrors.password = "Please Create your Password.";
        }
        else if (formData.password.length < 8) {
            newErrors.password = "Password must contain at least 8 characters.";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (!formData.terms) {
            newErrors.terms = "Please accept the terms and conditions.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidMobileRegex = /^[6-9]\d{9}$/.test(formData.mobile);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        alert("Registration form validated successfully!");
        console.log("Candidate registration submitted", {
            ...formData,
            password: "[hidden]",
            confirmPassword: "[hidden]",
        });
        navigate('/Login')
    };
    return (
        <>
            <div className="Prp-Login-Page-Left-container">
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
                        <h3 className='Prp-Product-HeroSec-Text'>Manage Training. <br />Build Better Careers. </h3>
                        <p className='Prp-Product-HeroSec-sub-heading'>Coordinate training programs, track student progress and <br /> work closely with placement teams - all in one platform..</p>
                    </div>
                    <div className='Prp-Login-Illustration-container'>
                        <img className='Prp-Login-Illustration-img' src={TcIllustration} alt="" />
                    </div>


                </div>
                <div className='Prp-Product-Info-Container'>
                    <img className="Prp-Registration-Left-Footer-Img" src={User} alt="" />
                    <div className="Prp-Registration-Hor-Seperator"></div>
                    <div className="Prp-Registration-Left-Footer-text">
                        <p>Better training today,</p>
                        <p className='Prp-Registration-Left-Footer-Secondary'>Brighter opportunities tomorrow.</p>
                    </div>
                </div>
            </div>

            <div className="Prp-registration-Page-Right">
                <form onSubmit={handleSubmit} noValidate className='Prp-Login-Page-form'>
                    <div onClick={()=>navigate(-1)} className="Prp-Reg-Back-Btn">
                    <p>Back to Selection</p>
                    </div>
                    <div className="prp-WelcomeRegistration-Form-Header">
                        <h2>Your Journey Starts Here</h2>
                        <p>Join our ecosystem of professional employers.</p>
                    </div>

                    <div className="prp-WelcomeRegistration-Role-Group">
                        <label htmlFor="role">Registering as</label>
                        <div className="prp-WelcomeRegistration-Select-Wrapper">
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                disabled
                            >
                                <option value="">Candidate</option>
                                <option value="Recruiter">Recruiter</option>
                                <option value="Placement Officer">Placement Officer</option>
                                <option value="Training Coordinator">Training Coordinator</option>
                            </select>
                            {/* <img className="prp-WelcomeRegistration-Select-Arrow" src={DropdownArrow} alt="" /> */}
                        </div>
                        {errors.role && (
                            <span className="Prp-Candidate-Error">
                                {errors.role}
                            </span>
                        )}
                    </div>
                    <div className="Prp-Registration-Field-Wrapper">
                        <div className="Prp-Registration-Field">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                autoComplete="name"
                            />

                            {errors.fullName && (
                                <span className="Prp-Candidate-Error">
                                    {errors.fullName}
                                </span>
                            )}
                        </div>

                        <div className="Prp-Registration-Field">
                            <label htmlFor="email">Email Address</label>
                            <div className="Prp-Candidate-Password-Wrapper">
                                <input
                                    id="email"
                                    className="Prp-Registration-PasswordInput"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                                {isValidEmailRegex && (
                                    <button
                                        type="button"
                                        className="Prp-Registration-Verify-Btn"
                                        style={{ backgroundColor: formData.isEmailVerified ? "#109D58" : "#132A56", color: "#fff" }}
                                        onClick={() => handleOpenOtpModal("email")}
                                        disabled={formData.isEmailVerified}
                                    >
                                        {formData.isEmailVerified ? "Verified" : "Verify"}
                                    </button>)}
                            </div>
                            {errors.email && (
                                <span className="Prp-Candidate-Error">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="Prp-Registration-Field-Wrapper">
                        <div className="Prp-Registration-Field">
                            <label htmlFor="mobile">Mobile Number</label>
                            <div className="Prp-Candidate-Password-Wrapper">
                                <input
                                    id="mobile"
                                    className="Prp-Registration-PasswordInput"
                                    name="mobile"
                                    type="tel"
                                    placeholder="1234567890"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    maxLength={10}
                                    inputMode="numeric"
                                    autoComplete="tel"
                                />
                                {isValidMobileRegex && (
                                    <button
                                        type="button"
                                        className="Prp-Registration-Verify-Btn"
                                        style={{ backgroundColor: formData.isMobileVerified ? "#109D58" : "#132A56", color: "#fff" }}
                                        onClick={() => handleOpenOtpModal("mobile")}
                                        disabled={formData.isMobileVerified}
                                    >
                                        {formData.isMobileVerified ? "Verified" : "Verify"}
                                    </button>
                                )}
                            </div>
                            {errors.mobile && (
                                <span className="Prp-Candidate-Error">
                                    {errors.mobile}
                                </span>
                            )}
                        </div>

                        <div className="Prp-Registration-Field">
                            <label htmlFor="University">University / Institution Name</label>
                            <input
                                id="University"
                                name="University"
                                type="text"
                                placeholder="Search/ Type University Name"
                                value={formData.University}
                                onChange={handleChange}
                            />

                            {errors.University && (
                                <span className="Prp-Candidate-Error">
                                    {errors.University}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="Prp-Registration-Field-Wrapper">
                        <div className="Prp-Registration-Field">
                            <label htmlFor="gender">Gender</label>
                            <div className="prp-WelcomeRegistration-Select-Wrapper">
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer not to say">
                                        Prefer not to say
                                    </option>
                                </select>
                                <img className="prp-WelcomeRegistration-Select-Arrow" src={DropdownArrow} alt="" />
                            </div>
                            {errors.gender && (
                                <span className="Prp-Candidate-Error">
                                    {errors.gender}
                                </span>
                            )}
                        </div>


                        <div className="Prp-Registration-Field">
                            <label htmlFor="EmpId">Employer Id / Staff Id</label>
                            <input
                                id="EmpId"
                                name="EmpId"
                                type="text"
                                value={formData.EmpId}
                                onChange={handleChange}
                                placeholder="EMP-2024-001"
                            />

                            {errors.EmpId && (
                                <span className="Prp-Candidate-Error">
                                    {errors.EmpId}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="Prp-Registration-Field-Wrapper">
                        <div className="Prp-Registration-Field">
                            <label htmlFor="password">Password</label>

                            <div className="Prp-Candidate-Password-Wrapper">
                                <input
                                    className="Prp-Registration-PasswordInput"
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />

                                <span
                                    type="button"
                                    className="Prp-Candidate-Password-Toggle"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                            </div>

                            {errors.password && (
                                <span className="Prp-Candidate-Error">
                                    {errors.password}
                                </span>
                            )}
                        </div>


                        <div className="Prp-Registration-Field">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="Prp-Candidate-Password-Wrapper">
                                <input
                                    className="Prp-Registration-PasswordInput"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />

                                <span
                                    type="button"
                                    className="Prp-Candidate-Password-Toggle"
                                    onClick={() =>
                                        setShowConfirmPassword((prev) => !prev)
                                    }
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </span>
                            </div>

                            {errors.confirmPassword && (
                                <span className="Prp-Candidate-Error">
                                    {errors.confirmPassword}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className='Prp-Login-Checkbox-Container'>
                        <input name='terms' onChange={handleChange} checked={formData.terms} type="checkbox" />
                        <p className='Prp-Login-Checkbox-Text'>I agree to the <Link className="Prp-Reg-Terms-Text"> Terms of service</Link> and <Link className="Prp-Reg-Terms-Text">privacy policy</Link> regarding my administrative access. </p>
                    </div>
                    {errors.terms && (<span className="Prp-Candidate-Error">{errors.terms}</span>)}

                    <button type='Submit' className='Prp-Register-Button'> Complete Registration</button>

                    <p className="Prp-Registration-Login-Text">
                        Already have an account? <Link onClick={() => { navigate('/Login') }}>Login</Link>
                    </p>

                </form>
            </div>
            <OtpModal
                isOpen={isOtpModalOpen}
                onClose={() => setIsOtpModalOpen(false)}
                onVerifySuccess={handleVerifySuccess}
                targetValue={otpType === "email" ? formData.email : formData.mobile}
                type={otpType}
            />
        </>
    )
}

export default TrainingCoRegistration