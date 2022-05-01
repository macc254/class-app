import React from "react";
import {  MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <MDBFooter   style={{backgroundColor: "#18183D"}} className="font-small pt-4 mt-4 footer-copyright text-center py-3">
          &copy; {new Date().getFullYear()} <a href="https://moringaschool.com/"> Moringa School. All rights reserved.</a>
   
    <a href="https://www.youtube.com/MoringaSchoolVideos/videos" rel="noreferrer" target="_blank" 
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="https://www.facebook.com/moringaschool/" rel="noreferrer" target="_blank" 
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://twitter.com/moringaschool"rel="noreferrer" target="_blank" 
      className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
    
      <a href="https://www.linkedin.com/school/moringa-school/" rel="noreferrer" target="_blank"
        className="instagram social">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
    </MDBFooter>
  );
}

export default FooterPage;