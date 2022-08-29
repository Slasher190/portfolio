import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Sudhi Ranjan Gupta. I am a Full-Stack Developer,
          Data Analyst and Machine Learning Engineer (Fresher). Inshort 
          <b> Problem Solver 😊</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Slasher190" target="black">
          <BsGithub />
        </a>
        <a href="" target="black">
          <BsYoutube />
        </a>
        <a href="" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/sudhi-ranjan-gupta-6a557112b/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;