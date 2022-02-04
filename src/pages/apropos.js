import React from 'react'
import Collapse from '../composants/Collapse'

function Apropos() {
    return (
        <div>
            <div className="banner_apropos">
                <div className="banner_bgr_apropos"></div>
            </div>
            <div className="divs_apropos">
                <Collapse title="Fiabilité"
                description={<p className="text_content">Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos
                équipes.</p>} titleClass="titre_apropos" textClass="texte_apropos"/>
                <Collapse title="Respect"
                description={<p className="text_content">La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
                plateforme."</p>} titleClass="titre_apropos" textClass="texte_apropos"/>
                <Collapse title="Service"
                description={<p className="text_content">Nos équipes se tiennent à votre disposition pour vous fournir une
                expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."</p>}
                titleClass="titre_apropos" textClass="texte_apropos"/>
                <Collapse title="Sécurité"
                description={<p className="text_content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En
                laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
                standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos
                hôtes."</p>} titleClass="titre_apropos" textClass="texte_apropos"/>
            </div>
        </div>
    )
}

export default Apropos
