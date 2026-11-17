import { createBrowserRouter,RouterProvider } from "react-router-dom";
import React from "react";
import LandingPage from "./LandingPage";
import ForgotPassword from "./component-Login/ForgotPassword";
import LoginPage from "./component-Login/LoginPage";
import ResetSuccessful from "./component-Login/ResetSuccessful";
import ResetPasswordPage from "./component-Login/ResetPassword";
import OtpVerfication from "./component-Login/OtpVerfication";
import WelcomeRegistration from "./component-Registration/WelcomeRegistration";
import CandidateWelcomeDashboard from "./component-Candidate/CandidateWelcomeDashboard";
import { DataProvider } from "./DataProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage/>
  },
  {
    path: "/Login",
    element:<LoginPage/>
  },
  {
    path: "/ForgotPassword?",
    element:<ForgotPassword/>
  },
   {
    path: "/OtpVerification",
    element:<OtpVerfication/>
  },
  {
    path:"/ResetPassword",
    element:<ResetPasswordPage/>
  },
    {
    path:"/ResetPassword/Successful",
    element:<ResetSuccessful/>
  },
  {
  path:'/Registration',
  element:<WelcomeRegistration/>
  },
  {
   path:"/Registration/:role",
   element:<WelcomeRegistration />
  },
  {
   path:"/StudentDashboard",
   element:<CandidateWelcomeDashboard />
  }
  
],
  {
    basename: "/prp_portal_2.0",
  }
)

  const App=()=>{
    return(
    <DataProvider>
    <RouterProvider router={router}/>
    </DataProvider>
    )
  }

  export default App;