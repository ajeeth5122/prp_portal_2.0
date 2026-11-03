import React from 'react'
import './Landingpage.css'
import Header from './ResusableComponent/Header'
import HeroImage from './assets/LandingAssets/LandingIllstration.png'
import JobOppertunities from './assets/LandingAssets/JoboppCard.png'
import AIResumeIcon from './assets/LandingAssets/AiResumeIcon.png'
import TrainingIcon from './assets/LandingAssets/TrainingIcon.png'
import PlacementsAnalytic from './assets/LandingAssets/PlacementAnyIcon.png'
import UsersIcon from './assets/LandingAssets/UsersIcon.png'
import ReviewImg from './assets/LandingAssets/ReviewProImg.png'
import RatingStar from './assets/LandingAssets/RatingStar.png'
import GrokLogo from './assets/LandingAssets/GrokLogo.png'
import ClaudeLogo from './assets/LandingAssets/ClaudeLogo.png'
import DeepseekLogo from './assets/LandingAssets/DeepseekLogo.png'
import InfosysLogo from './assets/LandingAssets/InfosysLogo.png'
import OpenAiLogo from './assets/LandingAssets/OpenAiLogo.png'
import QwenLogo from './assets/LandingAssets/QwenLogo.png'
import WiproLogo from './assets/LandingAssets/WiproLogo.png'
import Footer from './ResusableComponent/Footer'

const LandingPage = () => {

  const features = [
  { icon: JobOppertunities, title: "Wide Job Opportunities", description: "Access to thousands of job openings from top companies" },
  { icon: AIResumeIcon, title: "AI Resume Matching", description: "Get matched with the right jobs using AI technology" },
  { icon: TrainingIcon, title: "Training & Skill Readiness", description: "Build in-demand skills with industry-relevant training programs" },
  { icon: PlacementsAnalytic, title: "Placement Analytics", description: "Track performance and make data-driven decisions" },
  { icon: UsersIcon, title: "For Every User", description: "Tailored benefits for job seekers, recruiters and training institutions" }
];
  const review = [
    { name: "Sarah Chen", 
      Role: "Product Designer", 
      Company: "Aura Systems", 
      review: 
      "ConnectHire transformed my job search. The AI matching felt intuitive,and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.",
      rating: 5 },
      { name: "Jhon Francis", 
      Role: "Recruitment Manager", 
      Company: "Vertex Solutions", 
      review: 
      "The community gave me the confidence to showcase my work and connect with amazing peoples.I got my first full-time offer within 6 months.The support and guidance here are unmatched.",
      rating: 4 },
      { name: "David Miller", 
      Role: "Talent Director", 
      Company: "Zenith Capital", 
      review: 
      "The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.",
      rating: 4 },
    
  ];
  const PartnerLogos =[
  {Logo: GrokLogo ,companyName:"GrokLogo"},
  {Logo: WiproLogo ,companyName:"Wipro"},
  {Logo: QwenLogo ,companyName:"Qwen"},
  {Logo: DeepseekLogo ,companyName:"Deepseek"},
  {Logo: InfosysLogo ,companyName:"Infosys"},
  {Logo: ClaudeLogo ,companyName:"Claude"},
  {Logo: OpenAiLogo ,companyName:"Open AI"},
    
  ] 

  return (
    <>
    <Header/>
    <div className='Prp-LandingPage-container'>
       <div className='Prp-LandingPage-Hero-container' >
        <div className='Prp-LandingPage-Hero-Title-Sec' >
          <h4 className='Prp-LandingPage-Hero-Title-Head'>BUILD YOUR FUTURE</h4>
          <p className='Prp-LandingPage-Hero-Title'>Connect. Learn. Get Placed.</p>
          <p  className='Prp-LandingPage-Hero-Desc'>The all-in-one platform that bridges the gap between talented individuals, top employers and training institutions.</p>
          <div className='Prp-LandingPage-Hero-Sec-Buttons'>
            <div className='Prp-LandingPage-Btn GetStarted'>Get Started</div>
            <div className='Prp-LandingPage-Btn Explore'>Explore Jobs</div>
          </div>

        </div>
        <div className='Prp-LandingPage-Hero-Image-Sec'>
          <img className='Prp-Hero-Sec-Illustration' src={HeroImage} alt="" />
        </div>
       </div>
       <div className='Prp-LandingPage-Cards-Container'>
        <h3 className='Prp-LandingPage-Cards-Feature'>WHY CHOOSE US</h3>
        <h3 className='Prp-LandingPage-Cards-Header'>Everything You Need for a Successful Career</h3>
        <div className='Prp-LandingPage-Cards-Section'>
          {features.map((feat, index)=>
          <div key={index} className='Prp-LandingPage-Card' >
            <div className='Prp-LandingPage-Card-Logo'>
              <img src={feat.icon} alt="Briefcase Icon" />
            </div>
            <h4 className='Prp-LandingPage-Card-Title'>{feat.title}</h4>
            <p className='Prp-LandingPage-Card-Desc'>{feat.description}</p>
          </div>
          )}
          
        </div>
       </div>
       <div style={{background:"none"}} className='Prp-LandingPage-Cards-Container'>
          <h3 className='Prp-LandingPage-Cards-Feature'>SUCCESS STORIES</h3>
          <h3 className='Prp-LandingPage-Cards-Header'>What Our Users Say</h3>
          <div className='Prp-LandingPage-ReviewCards-Section'>
            {review.map((rev,index)=>
            <div key={index} className='Prp-LandingPage-ReviewCard'>
              <div className='Prp-LandingPage-RC-Logo-sec'>
                <div className='Prp-LandingPage-ReviewCard-Logo'>
                <img src={ReviewImg} alt="" /> 
                </div>
                <div className='Prp-LandingPage-Review-User'>
                  <div className='Prp-LandingPage-Rating-Image'>
                    {[...Array(rev.rating)].map((_, i) => (
                  <img key={i} src={RatingStar} alt="" />
                  ))}
                  </div>
                  <h5 className='Prp-LandingPage-Review-Username' >{rev.name}</h5>
                  <p className='Prp-LandingPage-Review-UserProf'>{rev.Role} @ {rev.Company}</p>
                </div>
              </div>
              <p className='Prp-LandingPage-Review'>"{rev.review}"</p>
            </div>
            )}
          </div>
       </div>
       <div className='Prp-LandingPage-Partner-Container'>
        <h3 className='Prp-LandingPage-Partner-Title' >TRUSTED BY LEADING COMPANIES</h3>
        <h3 className='Prp-LandingPage-Partner-Solgan'>TOP COMPANIES HIRE HERE</h3>
        <div className='Prp-LandingPage-Partner-Logos-sec'>
          {PartnerLogos.map((logo)=>
          <div key={logo.companyName} className='Prp-LandingPage-Partner-Logo'>
            <img src={logo.Logo} alt={logo.companyName} />
          </div>
          )}
        </div>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage