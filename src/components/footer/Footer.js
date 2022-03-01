import React from "react";
import "./footer.scss";


//while down in the footer an we want to scroll directly at the top of the page 
const scrollToTop = (e) =>{
  e.preventDefault();
  window.scroll(0,0)
}


const Footer = () => {
  return (
    <div className="footbar">
      <div className="foot_text">
        <a href="#!" className="footer_logo" onClick={scrollToTop}>
          <img src="/assets/logo.png" alt='logo'/>
        </a>
        <div className="cols">
          <h2>STB SICAR</h2>
          <ul>
            <li>
              <a href="#!">à propos de nous</a>
            </li>
            <li>
              <a href="#!">clients</a>
            </li>
            <li>
              <a href="#!">temoignages</a>
            </li>
          </ul>
        </div>
        <div className="cols">
          <h2>services</h2>
          <ul>
            <li>
              <a href="#!">investissement</a>
            </li>
            <li>
              <a href="#!">consultation</a>
            </li>
            <li>
              <a href="#!">developpement</a>
            </li>
          </ul>
        </div>
        <div className="cols">
          <h2>Reseaux</h2>
          <ul className="share">
            <li>
              <i className="fab fa-facebook-f"></i>
              <a href="#!">facebook</a>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
              <a href="#!">instagram</a>
            </li>
            <li>
              <i className="fab fa-youtube"></i>
              <a href="#!">youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="webmaster">
        <p>
          &copy;HackathonTeam {new Date().getFullYear()} | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
};

export default Footer;
