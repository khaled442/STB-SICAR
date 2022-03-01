import React from 'react';
import './navBar.scss';

const NavBar = ({ openMenu, setOpenMenu }) => {
  return (

    <div className="header">
      <a href='#funds' className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </a>
      <div className="icons">
        <a href='#intro'>Nous Connaitre</a>
        <a href='#contact'>Nos Fonds</a>
        <a href='#responsabilité'>Responsabilité Sociale</a>
        <a href='#realisations'>Nos Realisations</a>
        <a href='#contact'>Actualités</a>
        <a href='#contact'>Contact</a>
        <a href='#intro'>Lexique</a>
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={() => setOpenMenu(!openMenu)}
        ></div>    
      </div>
    </div>
  )
}

export default NavBar