import React, { useState } from 'react'
import ArrowRightDark from '../assets/DashboardAssets/RightArrowDark.png'
import DarkRightArrow from '../assets/DashboardAssets/DarkRightArrow.png'
import ApplicationIC from '../assets/DashboardAssets/CDAppIcon.png'
import InterviewIC from '../assets/DashboardAssets/CDInterviewIcon.png'
import OffersIC from '../assets/DashboardAssets/CDOffersIcon.png'
import SavedJobIC from '../assets/DashboardAssets/CDSavedJobsIcon.png'
import IdeaIcon from '../assets/DashboardAssets/IdeaIndicator.png'
import Profile from '../assets/DashboardAssets/ProfileDemo.png'
import wave from '../assets/DashboardAssets/Handwave.png'
import ArrowRight from '../assets/DashboardAssets/ArrowRight.png'
import Stockup from '../assets/DashboardAssets/StockUpArrow.png'
import Sparkles from '../assets/DashboardAssets/Sparkles.png'
import locationPin from '../assets/DashboardAssets/locationPin.png'
import DonutChart from '../ResusableComponent/DonutChart'
import CompleteProfile from '../assets/DashboardAssets/CompleteProfile.png'
import TrainingProg from '../assets/DashboardAssets/TrainingProg.png'
import PrepInterview from '../assets/DashboardAssets/PrepInterview.png'
import ApplyJobs from '../assets/DashboardAssets/ApplyJobs.png'
import Calender from '../assets/DashboardAssets/Calender.png'
import LearningLogo from '../assets/DashboardAssets/LearningLogo.png'
import CalendarModal from '../ResusableComponent/CalenderModal'
import FigmaLogo from'../assets/DashboardAssets/FigmaLogo.png'
import ReactLogo from'../assets/DashboardAssets/ReactLogo.png'
import ProfileLogo from '../assets/DashboardAssets/Profile.png'
import TargetLogo from '../assets/DashboardAssets/TargetLogo.png'
import ViewAllArrow from '../assets/DashboardAssets/RightArrowBlue.png'
import { useData } from '../DataProvider'


const CandidateDashboard = () => {
  const{user}=useData();
  const currentUser= user?.UserName || "User";
  const chartData = [
    { name: "Applied", value: 8, color: "#CEE0FD" },
    { name: "Shortlisted", value: 2, color: "#C3E6D5" },
    { name: "Interview", value: 3, color: "#FCE7C2" },
    { name: "Rejected", value: 1, color: "#FCD0CD" }
  ];

  const totalApplications = chartData.reduce((total, item) => total + item.value, 0);

  const candidateCards = [
    {
      id: "applications",
      title: "Application",
      count: 12,
      growth: "+2 this month",
      icon: ApplicationIC,
      background: '#CEE0FD'
    },
    {
      id: "interviews",
      title: "Interviews scheduled",
      count: 2,
      growth: "+1 this month",
      icon: InterviewIC,
      background: '#FCE7C2'
    },
    {
      id: "offers",
      title: "Offers Received",
      count: 2,
      growth: "+2 this month",
      icon: OffersIC,
      background: '#C3E6D5'
    },
    {
      id: "saved-jobs",
      title: "Saved Jobs",
      count: 8,
      growth: "+2 this month",
      icon: SavedJobIC,
      background: '#FCD0CD'
    },
  ];

  const RecommendedJobs = [
    { id: 1, title: "Software Engineer", company: "TechNova Solutions", location: "Bangalore", match: "92%", readiness: "80%" },
    { id: 2, title: "UI/UX Designer", company: "Aura Labs", location: "Bangalore", match: "82%", readiness: "76%" },
    { id: 3, title: "Frontend Developer", company: "GoNext Technologies", location: "Bangalore", match: "80%", readiness: "69%" },
  ];

  
  const getLogo = (job) => RecommendedJobs.find(l => l.company === job.company)?.Logo || job.Logo || job.company.charAt(0).toUpperCase();

  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));
  const [selectedDate, setSelectedDate] = useState(16);
  const [showList, setShowList] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);

  const interviews = [
    {
      id: 1,
      time: "10:30 AM",
      title: "UI/UX Designer Interview",
      company: "ABC Technologies",
      date: 16,
      month: 9,
      year: 2025,
      type: "Technical Interview",
      location: "Online",
    },
    {
      id: 2,
      time: "02:30 PM",
      title: "HR Interview",
      company: "ABC Technologies",
      date: 16,
      month: 9,
      year: 2025,
      type: "HR Round",
      location: "ABC Technologies Office",
    },
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const changeMonth = (direction) => {
    setCurrentDate(new Date(year, month + direction, 1));
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(day);
    }
  };

  const filteredInterviews = interviews.filter(
    (interview) =>
      interview.date === selectedDate &&
      interview.month === month &&
      interview.year === year
  );

  const Courses=[
    {Logo:FigmaLogo,Title:'UI/UX Design Fundamentals', Type:"Online", completion:"78%" },
    {Logo:ReactLogo,Title:'React Js', Type:"Online", completion:"48%" },
    {Logo:ProfileLogo,Title:'ProfileManagement', Type:"Online", completion:"62%" }
    
  ]

  const WhatsNext=[
    {title:"Complete your Profile", desc:"Increase Your Visibility", Logo:CompleteProfile},
    {title:"Apply for More Jobs", desc:"Open Your Opportunities", Logo:ApplyJobs},
    {title:"Prepare for Interviews", desc:"Boost your Confidence", Logo:PrepInterview},
    {title:"Explore training programmers", desc:"Build in demand-skills", Logo:TrainingProg}
  ]

  return (
    <>
      <div className='Prp-Candidate-Welcome-Container'>
        <div className='Prp-Candidate-Greet-Container'>
          <div>
            <img className='Prp-Candidate-Profile-image' src={Profile} alt="" />
          </div>
          <div className='Prp-Candidate-Greetdesc-Wrapper'>
            <div className='Prp-Candidate-Wave-Wrapper'>
              <h4 className='Prp-Candidate-Greet-Text'>Good Morning, {user? user.UserName : "User"}</h4>
              <img className='Prp-Candidate-wave-icon' src={wave} alt="Greeticon" width={25} />
            </div>
            <p className='Prp-Candidate-desc-Text'>Your journey to a better future is in progress!</p>
          </div>
        </div>
        <div className='Prp-Candidate-Seperator'></div>
        <div className='Prp-Candidate-Prof-Comp-Container'>
          <h4 className='Prp-Candidate-Prof-Comp-Text'>Profile Completeness</h4>
          <div className='Prp-Candidate-Prof-Comp-Bar-Wrapper'>
            <h4 className='Prp-Candidate-Prof-Comp-Count'>78%</h4>
            <div className='Prp-Candidate-Prof-Comp-Bar'>
              <div className='Prp-Candidate-Prof-Comp-Status'></div>
            </div>
            <img src={ArrowRight} width={15} alt="RightArrow Icon" />
          </div>
          <div className='Prp-Candidate-Prof-Footer'>
            <img className='Prp-Candidate-footer-icon' src={IdeaIcon} alt="" />
            <p className='Prp-Candidate-Prof-Footer-Text'>Complete your profile to improve your job matches.</p>
          </div>
        </div>
      </div>

      <div className="Prp-Candidate-Dashboard-Cards-Container">
        {candidateCards.map((card) =>
          <div key={card.id} className='Prp-Candidate-Dashboard-Card'>
            <div style={{ background: card.background }} className='Prp-Candidate-Dashboard-Card-Logo'>
              <img src={card.icon} alt="Application Icon" />
            </div>
            <h4 className='Prp-Candidate-Dashboard-Card-Title'>{card.title}</h4>
            <div className='Prp-Candidate-Dashboard-Count-wrapper'>
              <p className='Prp-Candidate-Dashboard-Card-Count'>{card.count}</p>
              <img src={ArrowRightDark} width={8} alt="" />
            </div>
            <div className='Prp-Candidate-Dashboard-Count-wrapper'>
              <img src={Stockup} alt="" width={20} />
              <p className='Prp-Candidate-Dashboard-Stat-Count'>{card.growth}</p>
            </div>
          </div>
        )}
      </div>

      <div className="Prp-Ai-Recommended-Jobs-Container">
        <div className="Prp-Ai-Recommended-Jobs-Header">
          <div className="Prp-Ai-Recommended-Jobs-Heading">
            <img className="Prp-Ai-Recommended-Jobs-Sparkle" src={Sparkles} alt="sparkles" />
            <h2 className="Prp-Ai-Recommended-Jobs-Title">AI Recommended Jobs</h2>
          </div>
          <button className="Prp-Ai-Recommended-Jobs-View-All">
            View All
            <img className="Prp-Ai-Recommended-Jobs-Arrow" src={DarkRightArrow} alt="arrowRight" />
          </button>
        </div>

        <p className="Prp-Ai-Recommended-Jobs-Subtitle">
          Based on your profile, skills and career goals, Improve React and
        </p>

        <div className="Prp-Ai-Recommended-Jobs-List">
          {RecommendedJobs.map((job) => (
            <div key={job.id} className="Prp-Ai-Recommended-Jobs-Card">
              <div className="Prp-Ai-Recommended-Jobs-Initial">
                {getLogo(job).includes('/') || getLogo(job).includes('.') ? (
                  <img className="Prp-Ai-Recommended-Jobs-Img" src={getLogo(job)} alt={job.company} />
                ) : (
                  <p className="Prp-Ai-Recommended-Jobs-Font">{getLogo(job)}</p>
                )}
              </div>

              <div className="Prp-Ai-Recommended-Jobs-Details">
                <h3 className="Prp-Ai-Recommended-Jobs-Job-Title">{job.title}</h3>
                <p className="Prp-Ai-Recommended-Jobs-Company">{job.company}</p>
                <div className="Prp-Ai-Recommended-Jobs-Location-Row">
                  <img className="Prp-Ai-Recommended-Jobs-Pin" src={locationPin} alt="locationPin" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="Prp-Ai-Recommended-Jobs-Stat">
                <span className="Prp-Ai-Recommended-Jobs-Badge">{job.match}</span>
                <span className="Prp-Ai-Recommended-Jobs-Stat-Label">Job Match</span>
              </div>

              <div className="Prp-Ai-Recommended-Jobs-Stat">
                <span className="Prp-Ai-Recommended-Jobs-Badge">{job.readiness}</span>
                <span className="Prp-Ai-Recommended-Jobs-Stat-Label">Readiness</span>
              </div>

              <button className="Prp-Ai-Recommended-Jobs-View-Job">
                View Job
                <img className="Prp-Ai-Recommended-Jobs-Arrow" src={DarkRightArrow} alt="arrowRight" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="Prp-Course-App-Wrapper">
        <div className='Prp-Cont-Learn-Container'>
          <div className='Prp-Cont-Learn-header'>
            <div className='Prp-Cont-Learn-header-Wrapper'>
            <img className='Prp-Cont-Learn-Logo' src={LearningLogo} alt="Book Logo" />
            <h5 className='Prp-Cont-Learn-Header-Title'>Continue Learning</h5>
            </div>
            <div className='Prp-Cont-Learn-Header-Viewall'>
              <p className='Prp-Cont-Learn-viewall-Title'>View All</p>
              <img className='Prp-Cont-Learn-viewall-Arrow' src={ViewAllArrow} alt="" />
            </div>
            
          </div>
          {Courses.map((course)=>
          <div key={course.Title} className='Prp-Cont-Learn-Course-List' >
            
            <div className='Prp-Cont-Learn-CourseLogo-Container' >
              <img className='Prp-Cont-Learn-CourseLogo' src={course.Logo} alt="FigmaLogo" />
            </div>
            <div className='Prp-Cont-Learn-Course-Details' >
            <h4 className='Prp-Cont-Learn-Course-title' >{course.Title}</h4>
            <p className='Prp-Cont-Learn-Course-Type'>{course.Type}</p>
            <div className='Prp-Cont-Learn-Statusbar-wrapper'>
              <div className='Prp-Cont-Learn-Statusbar-Cont'>
                <div style={{width:course.completion}} className='Prp-Cont-Learn-Statusbar'></div>
              </div>
              <p className='Prp-Cont-Learn-Course-Count'>{course.completion}</p>
            </div>
            </div>
          </div>
          )}
        </div>
        <DonutChart data={chartData} value={totalApplications} />
      </div>
      
      <div className="Interview-Schedule-Container">
      <div className="Interview-Schedule-Header">
        <img
          src={Calender}
          alt="Calendar"
          className="Interview-Schedule-Calendar-Image"
        />
        <h2>Interview Schedule</h2>
      </div>

      <div className="Interview-Schedule-Content">
        <CalendarModal
          currentDate={currentDate}
          selectedDate={selectedDate}
          onMonthChange={changeMonth}
          onDateClick={handleDateClick}
        />

        <div className="Interview-Schedule-Details">
          <button
            className={`Interview-Schedule-List-Button ${
              showList ? "Interview-Schedule-List-Active" : ""
            }`}
            onClick={() => setShowList(!showList)}
          >
            List
          </button>

          <h3>{showList ? "All Scheduled Interviews" : "Today’s Selection"}</h3>

          <div className="Interview-Schedule-Interview-List">
            {(showList ? interviews : filteredInterviews).map((interview) => (
              <div
                className="Interview-Schedule-Interview-Card"
                key={interview.id}
              >
                <div className="Interview-Schedule-Time">{interview.time}</div>

                <div className="Interview-Schedule-Interview-Info">
                  <h4>{interview.title}</h4>
                  <p>{interview.company}</p>
                </div>

                <button
                  className="Interview-Schedule-View-Button"
                  onClick={() => setSelectedInterview(interview)}
                >
                  View Details
                  <img
                    src={ViewAllArrow}
                    alt="Arrow"
                    className="Interview-Schedule-Arrow-Image"
                  />
                </button>
              </div>
            ))}

            {(showList ? interviews : filteredInterviews).length === 0 && (
              <div className="Interview-Schedule-Empty">
                No interviews scheduled for this date.
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedInterview && (
        <div
          className="Interview-Schedule-Modal-Overlay"
          onClick={() => setSelectedInterview(null)}
        >
          <div
            className="Interview-Schedule-Modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="Interview-Schedule-Modal-Close"
              onClick={() => setSelectedInterview(null)}
            >
              ×
            </button>

            <h2>{selectedInterview.title}</h2>

            <p>
              <strong>Company:</strong> {selectedInterview.company}
            </p>

            <p>
              <strong>Time:</strong> {selectedInterview.time}
            </p>

            <p>
              <strong>Date:</strong> {selectedInterview.date}{" "}
              {currentDate.toLocaleString("en-US", { month: "long" })} {year}
            </p>

            <p>
              <strong>Interview Type:</strong> {selectedInterview.type}
            </p>

            <p>
              <strong>Location:</strong> {selectedInterview.location}
            </p>
          </div>
        </div>
      )}
    </div>
    <div className='Prp-Candidate-Whatsnxt-Container'>
      <div className='Prp-Candidate-Whatsnxt-Header'>

          <img className='Prp-Candidate-Whatsnxt-Logo' src={TargetLogo} alt="Bullseye Logo" />
       
        <div className='Prp-Candidate-Whatsnxt-Title-Wrapper'>
          <h4 className='Prp-Candidate-Whatsnxt-Header-Title'>What's Next</h4>
          <p className='Prp-Candidate-Whatsnxt-Desc'>Complete these action to improve your profile and get  better opportunities.</p>
        </div>
      </div>
      <div className='Prp-Candidate-Whatsnxt-cards-Container'>
        {WhatsNext.map((next)=>
        <div key={next.title} className='Prp-Candidate-Whatsnxt-card'>
          <div className='Prp-Candidate-Whatsnxt-card-Logo-Cont'>
            <img className='Prp-Candidate-Whatsnxt-card-Logo' src={next.Logo} alt={next.Logo} />
          </div>
          <div className='Prp-Candidate-Whatsnxt-Title-Wrapper' >
          <h4 className='Prp-Candidate-Whatsnxt-Title'>{next.title}</h4>
          <p className='Prp-Candidate-Whatsnxt-Desc'>{next.desc}</p>
        </div>
        <img className='Prp-Candidate-Whatsnxt-Arrow' src={ArrowRightDark} alt="" />
        </div>
        )}
      </div>
    </div>
    
    </>
  )
}

export default CandidateDashboard