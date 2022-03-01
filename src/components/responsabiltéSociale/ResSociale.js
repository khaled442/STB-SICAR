import React from "react";
import "./resp.scss";

// import ResPart2 from "./ResPart2";

const ResSociale = () => {
  return (
    <div id="responsabilité">
      <h2>RESPONSABILITÉ SOCIALE</h2>
      <div className="Icons">
        <div>
            {" "}
            <i className="fa-solid fa-pen-to-square"></i>
          <h3>Notre politique interne</h3>
        </div>
        <div>
          <i className="fa-solid fa-building-columns"></i>
          <h3 >nos participations</h3>
        </div>
      </div>

      <div id="politique">
        <div className="left">
          <img src="/assets/img3.jpg" width="750rem" alt="" />
        </div>
        <div className="right">
          <div className="top">
            <i className="fa-solid fa-pen-to-square"></i>
            <h1> Notre politique interne </h1>
          </div>
          <p>
            Nous permettons à nos collaborateurs de grandir au sein de STB
            SICAR, aussi bien professionnellement que personnellement. Nous
            veillons à l’égalité entre tous et à l’accomplissement de chacun.
          </p>
        </div>
      </div>

      <h2 className="title">EN BREF</h2>
      <div className="cercles">
        <button  className="cercle1">
          Renforcer nos engagements pour l’égalité femmes-hommes
        </button>
        <button className="cercle2">
          Accompagner nos collaborateurs pour faire évoluer leurs compétences
        </button>
        <button className="cercle3">
          Offrir à nos collaborateurs une qualité de vie au travail optimale
        </button>
      </div>
      
      {/* <h2 className="nospart">Nos Participations</h2> */}
      <div id="politique" className="politique2">
        <div className="left"> 
        <img src="/assets/img3.jpg" width="750rem" alt="" />
        </div>
        <div className="right" id="right2">
        <div className="top">
            <i className="fa-solid fa-pen-to-square"></i>
            <h1>Nos Participations</h1>
          </div>
        <p>
          Nous sommes conscients de la nécessité de prendre en considération les
          critères environnementaux, sociaux et de qualité de gouvernance (ESG)
          dans la politique d’investissement. Ainsi, nous avons établi une
          charte ESG. Nous sommes également très attachés à la qualité de
          l’approche et à la politique mise en œuvre par nos participations en
          ce qui concerne le respect de l’environnement et la gestion des
          ressources humaines. Pour ce faire, un questionnaire a été envoyé aux
          sociétés financées. Il s’appuie sur un socle commun comprenant des
          indicateurs quantitatifs portant sur les 3 grands thèmes ESG
          prioritaires de la STB SICAR.
        </p>
        </div>
      </div>

      {/* <div className="cercles-2">
        <p className="cercle1-2">Gouvernance</p>
        <p className="cercle2-2">Volet social</p>
        <p className="cercle3-2">Environnement</p>
      </div> */}

      {/* <ResPart2 /> */}
    </div>
  );
};

export default ResSociale;