import React from "react";

import "../../assets/scss/style.scss";
import gifcontact from "../../assets/images/gif_contact.webp";
import instagramicon from "../../assets/images/ins.png";
import linkedInicon from "../../assets/images/linkedin.png";
import github from "../../assets/images/gh.png";
const Contact = () => {
  return (
    <div>
      <div className="gif-contact">
        <img src={gifcontact} alt="gifcontact" />
      </div>

      <div className="social-icons">
        <h2>Let's Talk</h2>
      </div>
    
    <div className="social-icons">
      <div  >
        <button className = "bk-logos">
          <a href="https://linkedin.com/in/virender-vishwakarma-952381176">
            <img src={linkedInicon} alt="linkedin-icon" className = "icon" />
          </a>
        </button>
      </div>

      <div >
        <button className = "bk-logos" > 
          <a href = "https://github.com/VirenV496">
          <img src={instagramicon} alt="instagram-icon" className = "icon"  />
          </a>
        </button>
      </div>

      <div>
        <button className = "bk-logos" >
          <a href = "https://github.com/VirenV496">
          <img 
            className = "icon" 
            src={github} alt="github-icon"
           />
          </a>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
