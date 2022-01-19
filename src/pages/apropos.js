import React from 'react';
import down_arrow from '../assets/DownArrow.png'
import up_arrow from '../assets/UpArrow.png'

function Apropos() {
    function openClose(event) {
        let titreTarget = event.currentTarget
        let titreId = titreTarget.id
        let arrow1 = document.querySelector(`#${titreId} .downarrow`)
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.querySelector(`#${titreId} .uparrow`)
        arrow2.classList.toggle("uparrow_yes")
        let text = titreTarget.nextSibling
        text.classList.toggle("texte_apropos_open")
    }

    return (
        <div>
            <div className="banner_apropos">
                <div className="banner_bgr_apropos"></div>
            </div>
            <div className="divs_apropos">
                <div id="titre1" className="titre_apropos" onClick={openClose}>
                    <span className="titre_nom">Fiabilité</span>
                    <span className="titre_fleches">
                        <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div className="texte_apropos">
                    <p className="text_content">Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées
                    par nos équipes.</p>
                </div>
                <div id="titre2" className="titre_apropos" onClick={openClose}>
                    <span className="titre_nom">Respect</span>
                    <span className="titre_fleches">
                        <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div className="texte_apropos">
                    <p className="text_content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                    comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
                    plateforme.</p>
                </div>
                <div id="titre3" className="titre_apropos" onClick={openClose}>
                    <span className="titre_nom">Service</span>
                    <span className="titre_fleches">
                        <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div className="texte_apropos">
                    <p className="text_content">Nos équipes se tiennent à votre disposition pour vous fournir une
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div id="titre4" className="titre_apropos" onClick={openClose}>
                    <span className="titre_nom">Sécurité</span>
                    <span className="titre_fleches">
                        <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                        <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                    </span>
                </div>
                <div className="texte_apropos">
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
