"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
import VerticalNav from "./components/VerticalNav";

const inter = Inter({ subsets: ["latin"] });



const Layout = ({ children }) => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleChatbotToggle = () => {
    setChatbotOpen(!isChatbotOpen);
  };
  return (
    <html>
      <body>
        <div className="full-dashboard">
            <VerticalNav isNavOpen={isNavOpen} toggleNavbar={toggleNav} 
              li={[
                  ["Dashboard"],
                  ["Patient"],
                  ["Claims"],
                  ["Notifications"],
              ]} numOfNotifications={3}
              />  
            
            <div className={`${isNavOpen ? 'content-main expanded' : 'content-main collapsed'}`}>{children}
              
                
            </div>
        </div>
     </body>
    </html>
  );
};

export default Layout;

