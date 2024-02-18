"use client"
import React, { useState } from 'react'
import "./globals.scss";

import FormComponent from "./components/FormComponent"
import FeedbackCard from "./components/FeedbackCard"
import FilledBox from './components/FilledBox';
import { TextField } from '@mui/material';

const getScoreClass = (score) => {
  switch (score) {
    case 'Platinum':
      return 'score-platinum';
    case 'Gold':
      return 'score-gold';
    case 'Silver':
      return 'score-silver';
    case 'Bronze':
      return 'score-bronze';
    default:
      return ''; // Default case if none of the above
  }
};

const getLowClass = (score) => {
  switch (score) {
    case 'Platinum':
      return 'high'
    case 'Gold':
      return 'high';
    case 'Silver':
      return 'low';
    case 'Bronze':
      return 'low';
    default:
      return ''; // Default case if none of the above
  }
};




const statusLabels = [
  { label: 'Completeness', score: '88%', color: '#0F8800' }, // Red
  { label: 'Code + Plan Design', score: '28%', color: '#53009B' }, // Green
  { label: 'Price Benchmarking', score: '39%', color: '#0065AD' } // Blue
];

// import GeneralInformation from '../CMS_Form/GeneralInformation'
// import ClaimsInformation from '../CMS_Form/ClaimsInformation'
// import CodeRevenueInformation from '../CMS_Form/CodeRevenueInformation'

// import GeneralInformation from '../ADADental_Form/GeneralInformation'
// import CodeRevenueInformation from '../ADADental_Form/CodeRevenueInformation'

const ubData = {'Provider': ['']}

const Home = () => {
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const [description, setDescription] = useState("")
  const [improvements, setImprovements] = useState([])
  const [score, setScore] = useState("")

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [showSubmit, setShowSubmit] = useState(false);
  const toggleSubmit = () => {
    setShowSubmit(!showSubmit);
  };

  const [fillForm, setFillForm] = useState(false)

  const toggleForm = () => { 
    setFillForm(!fillForm)
  }

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };



 


  return (

   
      <div className="frame-content-main">
        <div className="frame-main">
          <div className="frame-title">
            <div className="title-top">
              <div className="title-frame">
                <div className="form-text">
                  Claim Form Title
                </div>
                
                
                </div>
            </div>
          </div>
          <div className="frame-body">
            <div className="provider-block">
              <div className="provider-title">
                Billing Specifications
              </div>
              <FormComponent onSubmit={async (prompt) => {
                setIsLoading(true);
                const response = await fetch("/api/chatgpt", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    prompt,
                  }),
                });
    
                setIsLoading(false);
                const result = await response.json();
                console.log(result.choices[0].message.content)
                const output = JSON.parse(result.choices[0].message.content)
                setDescription(output.description)
                setImprovements(output.improvements)
                setScore(output.score)
                
              }}
              
            
              
              
              button='true' />
              
            </div>
            
            
          
          
            <div className="provider-block">
              <div className="provider-title">
                Feedback
              </div>

              <FilledBox textFill = {description}/>
            </div>
            
            </div>
          
        </div>
        {!fillForm && (
        <div className="feedback-panel">
          {improvements.map((improvement, index) => (
    <FeedbackCard key={index} text={improvement} />
  ))}
        </div> )
}
        <div className="scoring-panel">
          <div className="field-collapse">    
              <div className="headline-6-fwl">
              <button onClick={toggleForm} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.86225 11.8047C2.6019 11.5444 2.6019 11.1223 2.86225 10.8619L6.12418 7.6L2.86225 4.33807C2.60191 4.07772 2.60191 3.65561 2.86225 3.39526C3.1226 3.13491 3.54471 3.13491 3.80506 3.39526L7.5384 7.1286C7.66342 7.25362 7.73366 7.42319 7.73366 7.6C7.73366 7.77681 7.66342 7.94638 7.5384 8.0714L3.80506 11.8047C3.54471 12.0651 3.1226 12.0651 2.86225 11.8047ZM8.46225 11.8047C8.20191 11.5444 8.20191 11.1223 8.46225 10.8619L11.7242 7.6L8.46226 4.33807C8.20191 4.07772 8.20191 3.65561 8.46226 3.39526C8.7226 3.13491 9.14471 3.13491 9.40506 3.39526L13.1384 7.1286C13.3987 7.38894 13.3987 7.81105 13.1384 8.0714L9.40506 11.8047C9.14471 12.0651 8.7226 12.0651 8.46225 11.8047Z" fill="#69737E"/>
                </svg>
              </button>
                  24 Issues Found
                </div>
          </div>
          <div className="score-section">
              <div className="score-section-content">
              <div className={`score ${getScoreClass(score)}`}>
  {score}
</div>
                
              </div>
            </div>
            <div className="patient-data">
              <div className="patient-data-content">
                <div className="patient-data-card">
                  <div className="left-container">
                    <div className="id">
                      #1216
                    </div>
                    <div className="name">
                      Ronit Jain
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08785 4.83882C3.31565 4.61102 3.685 4.61102 3.9128 4.83882L7.00033 7.92634L10.0878 4.83882C10.3157 4.61102 10.685 4.61102 10.9128 4.83882C11.1406 5.06663 11.1406 5.43598 10.9128 5.66378L7.4128 9.16378C7.185 9.39159 6.81565 9.39159 6.58785 9.16378L3.08785 5.66378C2.86004 5.43598 2.86004 5.06663 3.08785 4.83882Z" fill="#69737E"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="status-section">
                <div className="status-content">
                  <div className="status-section-content">
                    <div className="headline-6-fwl">
                      STATUS
                    </div>
                    <div className="frame-376">
                      <div className="headline-6-fwl">
                        Awaiting
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bar-section">
              <div className="bar-content">
                <div className="bar-template">
                  <div className="bar-top">
                    <div className="score-factor">
                      {statusLabels[0].label}
                    </div>
                    <div className="headline-6-fwl">
                      {statusLabels[0].score}
                    </div>
                    
                  </div>
                  <div className="bar">
                    <div className="bar-fill-green">

                    </div>
                  </div>
                </div>
                <div className="bar-template">
                  <div className="bar-top">
                    <div className="score-factor">
                    {statusLabels[1].label}
                    </div>
                    <div className="headline-6-fwl">
                    {statusLabels[1].score}
                    </div>
                    
                  </div>
                  <div className="bar">
                    <div className="bar-fill-purple">

                    </div>
                  </div>
                </div>
                <div className="bar-template">
                  <div className="bar-top">
                    <div className="score-factor">
                      {statusLabels[2].label}
                    </div>
                    <div className="headline-6-fwl">
                      {statusLabels[2].score}
                    </div>
                    
                  </div>
                  <div className="bar">
                    <div className="bar-fill-blue">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
 
  )
}

export default Home