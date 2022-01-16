import React from 'react';
import down_arrow from '../assets/DownArrow.png'
import up_arrow from '../assets/UpArrow.png'

function Apropos() {
    function openClose1() {
        let arrow1 = document.getElementById("arrowA1")
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.getElementById("arrowA2")
        arrow2.classList.toggle("uparrow_yes")
        let text = document.getElementById("texteA")
        text.classList.toggle("texte_apropos_open")
    }
    function openClose2() {
        let arrow1 = document.getElementById("arrowB1")
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.getElementById("arrowB2")
        arrow2.classList.toggle("uparrow_yes")
        let text = document.getElementById("texteB")
        text.classList.toggle("texte_apropos_open")
    }
    function openClose3() {
        let arrow1 = document.getElementById("arrowC1")
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.getElementById("arrowC2")
        arrow2.classList.toggle("uparrow_yes")
        let text = document.getElementById("texteC")
        text.classList.toggle("texte_apropos_open")
    }
    function openClose4() {
        let arrow1 = document.getElementById("arrowD1")
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.getElementById("arrowD2")
        arrow2.classList.toggle("uparrow_yes")
        let text = document.getElementById("texteD")
        text.classList.toggle("texte_apropos_open")
    }

    return (
        <div>
            <div className="banner_apropos">
                <div className="banner_bgr_apropos"></div>
            </div>
            <div className="divs_apropos">
                <div className="titre_apropos" onClick={openClose1}>
                    <span className="titre_nom">Fiabilité</span>
                    <span className="titre_fleches">
                        <span id="arrowA1" className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span id="arrowA2" className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div id="texteA" className="texte_apropos">
                    <p className="text_content">Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées
                    par nos équipes.</p>
                </div>
                <div className="titre_apropos" onClick={openClose2}>
                    <span className="titre_nom">Respect</span>
                    <span className="titre_fleches">
                        <span id="arrowB1" className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span id="arrowB2" className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div id="texteB" className="texte_apropos">
                    <p className="text_content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                    comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
                    plateforme.</p>
                </div>
                <div className="titre_apropos" onClick={openClose3}>
                    <span className="titre_nom">Service</span>
                    <span className="titre_fleches">
                        <span id="arrowC1" className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span id="arrowC2" className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div id="texteC" className="texte_apropos">
                    <p className="text_content">Nos équipes se tiennent à votre disposition pour vous fournir une
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div className="titre_apropos" onClick={openClose4}>
                    <span className="titre_nom">Sécurité</span>
                    <span className="titre_fleches">
                        <span id="arrowD1" className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span id="arrowD2" className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div id="texteD" className="texte_apropos">
                    <p className="text_content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
                    pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
                    que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité
                    domestique pour nos hôtes.</p>
                </div>
            </div>
        </div>
    )
}

export default Apropos
