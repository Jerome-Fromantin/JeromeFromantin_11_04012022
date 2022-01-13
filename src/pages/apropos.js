import React from 'react';

class Apropos extends React.Component {
    render() {
        return (
            <div>
                <div className="banner_apropos">
                    <div className="banner_bgr_apropos"></div>
                </div>
                <div className="divs_apropos">
                    <div className="titre_apropos">Fiabilité</div>
                    <div className="texte_apropos">
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
                        aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </div>
                    <div className="titre_apropos">Respect</div>
                    <div className="texte_apropos">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                        discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </div>
                    <div className="titre_apropos">Service</div>
                    <div className="texte_apropos">
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                        N'hésitez pas à nous contacter si vous avez la moindre question.
                    </div>
                    <div className="titre_apropos">Sécurité</div>
                    <div className="texte_apropos">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
                        logement correspond aux critères de sécurité établis par nos services. En laissant une note
                        aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour
                        nos hôtes.
                    </div>
                </div>
            </div>)
    }
}

export default Apropos
