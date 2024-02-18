import React from 'react'

const FeedbackCard = ({errorType, text}) => {
  return (
    <div className="feedback-card">
        <div className="content">
            <div className="headline-6-fwl">
                COMPLETNESS
            </div>
            <div>
                
                <div className="body-4-fwm">
                    {text}
                </div>
            </div>
            <div className="buttonRow">
                <button className="approveButton">
                    <div className="buttonContent">
                        <div className="body-4-fwm">
                            Approve
                        </div>
                    </div>
                </button>
                <button className="ignoreButton">
                    <div className="buttonContent">
                        <div className="body-4-fwm">
                            Ignore
                        </div>
                    </div>
                </button>
            </div>

        </div>
    </div>
  )
}

export default FeedbackCard