import React from 'react'
import {logements} from '../assets/logements'
//import Tag from '../composants/Tag'
import Starp from '../assets/Star_pink.png'
import Starg from '../assets/Star_grey.png'
import down_arrow from '../assets/DownArrow.png'
import up_arrow from '../assets/UpArrow.png'

class Logement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {logement:{}}
    }

    getLogementId() {
        const url = window.location.href.split("/")
        const id = url[url.length - 1]
        return id
    }

    componentDidMount() {
        const id = this.getLogementId()
        const logement = logements.find(item => item.id === id)
        this.setState({logement})
    }

    openClose1() {
        let arrow1 = document.getElementById("arrowA1")
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.getElementById("arrowA2")
        arrow2.classList.toggle("uparrow_yes")
        let text = document.getElementById("texteA")
        text.classList.toggle("texte_descrequip_open")
    }
    openClose2() {
        let arrow1 = document.getElementById("arrowB1")
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.getElementById("arrowB2")
        arrow2.classList.toggle("uparrow_yes")
        let text = document.getElementById("texteB")
        text.classList.toggle("texte_descrequip_open")
    }
    
    render() {
        const {pictures, title, location, description, equipments} = this.state.logement
        return (<div>
            <div className="gallery_logement"><img src={pictures} alt="Logement" className="xxx"/></div>
            <div className="firstline_logement">
                <div>
                    <div className="firstline_titre">{title}</div>
                    <div className="firstline_lieu">{location}</div>
                </div>
                <div className="firstline_right">
                    <div className="firstline_nom"><p>Prénom Nom</p></div>{/*{host.name}*/}
                    <div className="firstline_img"></div>
                    {/*<img src={host.picture} alt="Propriétaire" className="xxx"/>*/}
                </div>
            </div>
            <div className="tags_stars">
                <div>
                    <span className="tag">Premier tag</span><span className="tag">Deuxième tag</span>
                </div>
                <div>
                    <img src={Starp} alt="Etoile classement" className="star"/>
                    <img src={Starp} alt="Etoile classement" className="star"/>
                    <img src={Starp} alt="Etoile classement" className="star"/>
                    <img src={Starg} alt="Etoile classement" className="star"/>
                    <img src={Starg} alt="Etoile classement" className="star"/>
                </div>
            </div>
            <div className="descr_equip">
                <div>
                    <div className="titre_descrequip" onClick={this.openClose1}>
                        <span className="titre_nom">Description</span>
                        <span className="titre_fleches">
                            <span id="arrowA1" className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                            <span id="arrowA2" className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                        </span>
                    </div>
                    <div id="texteA" className="texte_descrequip">
                        <p className="text_content_descrequip">{description}</p>
                    </div>
                </div>
                <div>
                    <div className="titre_descrequip" onClick={this.openClose2}>
                        <span className="titre_nom">Équipements</span>
                        <span className="titre_fleches">
                            <span id="arrowB1" className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                            <span id="arrowB2" className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                        </span>
                    </div>
                    <div id="texteB" className="texte_descrequip">
                        <p className="text_content_descrequip">
                            {equipments}
                        </p>
                    </div>
                </div>
            </div>
            <div className="toDelete">
                <p>Composants encore statiques :</p>
                <p>- Galerie d'images</p>
                <p>- Nom et image ronde à droite</p>
                <p>- Tags et étoiles</p>
            </div>
        </div>)
    }
}

export default Logement