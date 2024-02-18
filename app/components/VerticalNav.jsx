import React, { useState } from "react";



const VerticalNav = ({ isNavOpen, toggleNavbar, li, numOfNotifications, avatar}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

 

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <nav className={`navbar-menu ${isNavOpen ? 'sideNavigation expanded' : 'sideNavigation collapsed'}`}>
      <div className="top">
        <div className="header"> 
          {/* Conditionally display the logo only when the navbar is expanded */}
          {isNavOpen && (
            <div className="left-container">
              <div className="logo"> 
                <img src={Logo} alt="Logo" style={{ display: "inline-block" }} />
              </div>
            </div>
          )}
          <div className="navButtonRep" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00033 1.16675C2.46056 1.16675 2.83366 1.53984 2.83366 2.00008V18.0001C2.83366 18.4603 2.46056 18.8334 2.00033 18.8334C1.54009 18.8334 1.16699 18.4603 1.16699 18.0001V2.00008C1.16699 1.53984 1.54009 1.16675 2.00033 1.16675ZM11.4423 4.40259C11.7723 4.72341 11.7798 5.25099 11.4589 5.58098L7.97277 9.16675H18.0003C18.4606 9.16675 18.8337 9.53984 18.8337 10.0001C18.8337 10.4603 18.4606 10.8334 18.0003 10.8334H7.97277L11.4589 14.4192C11.7798 14.7492 11.7723 15.2768 11.4423 15.5976C11.1123 15.9184 10.5848 15.911 10.2639 15.581L5.40283 10.581C5.08838 10.2575 5.08838 9.74262 5.40283 9.41918L10.2639 4.41918C10.5848 4.0892 11.1123 4.08176 11.4423 4.40259Z" fill="#00545C"/>
            </svg>
          </div>
        </div>
        <div className="navButton-list-top">
          <ul>
            {li.map((item, i) => (
              <div className="navButton" key={i} onClick={() => navigate(`/${item[0]}`)}>
                <div className="navbar-content">
                  <div className="left-container">
                    <img
                      src={item[1]}
                      alt={item[1]}
                      className="navButtonRep"
                    />
                    <li
                      
                      className="menu-title"
                      style={{ display: isNavOpen ? "inline-block" : "none" }}
                    >
                      
                      
                      {item[0]}
                      </li>
                  </div>
                  {isNavOpen && item[0] === "Notifications" && (
                      <div className="badge">
                        <div className="headline-6-fwl">
                          {numOfNotifications}
                        </div>
                      </div>
                  )}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
       
      <div className="navButton-list-bottom">
        <div className="navButton">
          <div className="navbar-content">
            {isNavOpen ? (
              <>
                <div className="left-container">
                  <div className="navButtonRep">
                    <div className="avatar"></div>
                  </div>
                  <div className="menu-title">
                    Shebaz Ishan
                  </div>
                </div>
               
              </>
            ) : (
              <div className="left-container">
                <div className="navButtonRep">
                  <div className="avatar" onClick={() => navigate(`/profile`)}></div>
                    <img src={avatar} alt="avatar" />
                </div>
              </div>
            )}
          </div>
        </div>
        {isPopupVisible && (
        <div className="context-menu">
          {/* Popup content goes here */}
          <p>This is the popup content!</p>
          
        </div>
      )}
      </div>
    </nav>
  );
};

export default VerticalNav;
