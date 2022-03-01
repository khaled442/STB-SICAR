import React from "react";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="introduction" id="intro">
      <div id="presentation">
        <div className="presentation">
        <h2>STB SICAR</h2>
          <p>
            La{" "}
            <strong>
              <i>STB SICAR</i>
            </strong>{" "}
            , filiale de la{" "}
            <strong>
              <i>STB BANK</i>
            </strong>{" "}
            , a été créé le 23 mars 1998. C'est une société d’investissement à
            capital risque qui a pour objectif la participation, pour son propre
            compte ou pour le compte de bailleurs de fonds au renforcement des
            opportunités d’investissement et des fonds propres des entreprises.
            Elle permet de procurer aux entreprises les fonds nécessaires à leur
            développement et à leur croissance avec obligation.
          </p>
        </div>

        <div className="chiffreCles">
          <h2>Nos chiffres clés</h2>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col">
              <span>23 ans D’expérience</span>
            </div>
            <div className="chiffreCles-col">
              <span>128MDT Sous gestion</span>
            </div>
          </div>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col2">
              <span>300 Investissements en portefeuille</span>
            </div>
            <div className="chiffreCles-col">
              <span>58 Fonds gérés</span>
            </div>
          </div>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col3">
              <span> 91 Sorties intégrales réalisées</span>
            </div>

            <div className="chiffreCles-col">
              <span>24 Régions</span>
            </div>
          </div>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col1">
              <span>1750 emplois créés durant les 5 dernières années</span>
            </div>
          </div>
        </div>

        <h2> Principes d’investissement </h2>
        <div className="principeInvestissement">
          <div className="invest">
            <div className="left">
              <img src="/assets/investment.png" alt="investment" />
            </div>
            <div className="right">
              <div className="circle">
                <button>Investir dans des projets viables</button>
              </div>
              <div className="circle">
                <button>Investir dans l'equity ou quasi equity</button>
              </div>
              <div className="circle">
                <button>Investir minoritairement</button>
              </div>
              <div className="circle">
                <button>Investir en respect des ratios reglementaires</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mode-intervention" id="mode-intervention">
          <h2> Modes d’intervention</h2>
          <div className="action-mode-intervention">
            <div className="col-mode-intervention">
              <span> Les Actions Ordinaires (A.O) en sortie libre </span>
            </div>
            <div className="col-mode-intervention">
              <span> Les Obligations Convertibles en Actions (O.C.A) </span>
            </div>
            <div className="col-mode-intervention">
              <span>
                {" "}
                Les avances sous forme de Compte Courant Associé (C.C.A){" "}
              </span>
            </div>
          </div>
        </div>

        <div className="etat-esprit">
          <h2>etat d'esprit</h2>
          <h3>
            Nous plaçons la confiance comme valeur fondamentale d’un partenariat
            gagnant
          </h3>

          <div className="col-box">
            <div className="col-etat-esprit">
              <div className="title">
                <i className="fa-solid fa-lightbulb"></i>
                <h4>UN ACCOMPAGNEMENT</h4>
              </div>
              <p>
                Nous partageons la conviction que la valeur d’une PME repose sur
                la qualité de son équipe dirigeante. En tant qu’actionnaire,
                nous nous positionnons comme un partenaire actif aux côtés des
                dirigeants. Ainsi, nos critères d’investissement privilégient,
                au-delà de l‘analyse économique et industrielle de la société,
                la qualité et la motivation des dirigeants auxquels nous nous
                associons.
              </p>
            </div>

            <div className="col-etat-esprit">
              <div className="title">
                <i className="fa-solid fa-share-nodes"></i>
                <h4>LES VALEURS QUI SE PARTAGENT</h4>
              </div>
              <p>
                Partager les valeurs de respect, de loyauté et de transparence
                pour poser ensemble les fondations d’un partenariat durable et
                constructif. Notre philosophie d&#39;investissement est
                résolument « non-intrusive », pour préserver la liberté d’action
                des dirigeants de l’entreprise. Ainsi, tous nos investissements
                s’effectuent en mode minoritaire, en fonds propres et quasi-
                fonds propres. Nous privilégions une durée moyenne de
                participation « raisonnable », comprise entre 5 et 7 ans.
              </p>
            </div>
          </div>
          <div className="col-box">
            
        <div className="col-etat-esprit">
          <div className="title">
          <i className="fa-solid fa-arrow-up-wide-short"></i>
          <h4>Notre Valeur Ajouter</h4>
          </div>
          <p>
            L’accompagnement des participations est une pierre angulaire du
            positionnement de la STB SICAR et un marqueur fort de sa stratégie.
            Notre expérience montre qu’en apportant des ressources et des
            compétences complémentaires à celles des équipes dirigeantes, nous
            pouvons contribuer significativement à la création de valeur
            stratégique de l’entreprise, tant sur le plan économique que social.
          </p>
        </div>
        <div className="col-etat-esprit" id="last-el">
              <div className="title">
                <i className="fa-solid fa-briefcase"></i>
                <h4>UNE AVENTURE HUMAINE</h4>
              </div>
              <p>
                Chaque partenariat est une aventure riche d’expériences
                partagées et d’ambitions assumées.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Intro;
