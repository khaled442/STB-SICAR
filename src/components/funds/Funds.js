import React from "react";
import "./funds.css";



const Funds=()=>{
    return (
        <div>
           {/* principes d'Investissements */}
      <div className="principeInvestissement">
        <h1> Nos Fonds </h1>
          <h2 className="sous-titre"> NOS INVESTISSEURS </h2>
          <p>STB SICAR dispose de fonds apportés par des investisseurs institutionnels de premier plan.</p>
        <div className="pi-row">
          <div className="pi-col">
            <img src="/assets/stb.png" alt="stb" />
            <div className="layer">
              <h3> STB BANK</h3>
            </div>
          </div>

          <div className="pi-col">
            <img src="/assets/BEI.png" alt="BEI" />
            <div className="layer">
              <h3> Banque européenne d'investissement  </h3>
            </div>
          </div>
        </div>
        <div className="pi-row">
          <div className="pi-col">
            <img src="/assets/foprodi.jpg" alt="foprodi" />
            <div className="layer">
              <h3>Fonds de Promotion et de Décentralisation Industrielles</h3>
            </div>
          </div>
          <div className="pi-col">
            <img src="/assets/stbInvest" alt="stbInvest" />
            <div className="layer">
              <h3>STB INVEST</h3>
            </div>
          </div>

         
        </div>
        <h2 className="sous-titre">OPTIMISEZ VOTRE FISCALITE</h2>
        <p>Les investisseurs qui désirent optimiser leur fiscalité peuvent confier tout ou partie de leurs
bénéfices imposables à la STB SICAR sous forme de fonds géré.
La règlementation en vigueur leur permet d’opter pour l’un des schémas suivants :</p>
            <div className="deux-alternatives">
                <h3> Deux Alternatives</h3>
            </div>

            <div className="alternative-items">
                <div className="alternative-item-one">
                  <p>des revenus ou bénéfices imposables
sans minimum d&#39;impôtDéduction totale sur la base d&#39;un
engagement de la STB SICAR
d’employer 75% de montant déposés
dans des ZDR ou agricole.</p>
                </div>

                <div className="alternative-item-two">
                    <p>
                    des revenus ou bénéfices imposables
avec minimum d&#39;impôt
Déduction des revenus ou bénéfices
réinvestis auprès de la STB SICAR , sur
la base d’un engagement d’emploi de
65% dans des projets définis par la
règlementation*
                    </p>
                </div>
            </div>
            <h3 className="sous-titre">Délai</h3>
            <p className="sous-titre">
            Les investisseurs bénéficient de l’avantage fiscal l’année de libération du fonds.
Néanmoins l’obligation d’utilisation des montants déposés est de 2 ans à partir de l’année de
libération.
            </p>

            <h3 className="sous-titre">Blocage des fonds</h3>
            <p className="sous-titre">
            Le fonds géré est bloqué auprès de la STB SICAR pendant cinq ans à partir du 1 er janvier de l’année qui suit
celle du dépôt des fonds.
            </p>

            <h3 className="sous-titre">Rémunération</h3>
            <ul className="ul"> <p className="sous-titre">Le bailleur de fonds bénéficiera également conformément à la convention Fonds géré :</p>
                <li className="sous-titre">
                De la rémunération des fonds à des conditions très avantageuses jusqu’à leur utilisation dans des projets ayant obtenu au préalable son accord de participation
                </li>
                <li className="sous-titre">
                Du produit des intérêts des OCA/CCA souscrits
                </li>
                <li className="sous-titre">
                Des revenus du portefeuille d’investissement
                </li>
                <li className="sous-titre">
                Des dividendes distribués
                </li>
            </ul>

            <h3 className="sous-titre">Autre avantage</h3>
            <p className="sous-titre"> Est déductible du bénéfice imposable, la plus-value de cession d’actions et des parts sociales
réalisées. </p>


      </div>
      </div>

       
    )
}

export default Funds