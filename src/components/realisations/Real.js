import React from "react";
import "./real.scss";


const Real = () => {
  return (
    <div className="realisations" id="realisations">
      {" "}
        <h2>nos realisations</h2>
        <h3 className="sous-title">NOS CHIFFRES AU 31/12/2021</h3>
      {" "}
      <div className="description">
        <div className="desc">
          <button className="affichage">
            {" "}
            1632 <br />
            Nombre de projets approuvés
          </button>
          <button className="affichage">
            {" "}
            1732 <br />
            Nombre de projets engagés
          </button>
          <button className="affichage">
            {" "}
            109 <br />
            MDT Sous gestion
          </button>
        </div>
        <div className="img">
          <img
            className="sous-desc"
            src="https://d4is.com/wp-content/uploads/2016/07/BI.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Real;