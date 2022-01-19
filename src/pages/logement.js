import React from 'react'
import {logements} from '../assets/logements'
import Previous from '../assets/Previous.png'
import Next from '../assets/Next.png'
import Starp from '../assets/Star_pink.png'
import Starg from '../assets/Star_grey.png'
import down_arrow from '../assets/DownArrow.png'
import up_arrow from '../assets/UpArrow.png'

class Logement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {logement: {pictures: [], host: {}, tags: [], equipments: []}}
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

    openClose(event) {
        let titreTarget = event.currentTarget
        let titreId = titreTarget.id
        let arrow1 = document.querySelector(`#${titreId} .downarrow`)
        arrow1.classList.toggle("downarrow_no")
        let arrow2 = document.querySelector(`#${titreId} .uparrow`)
        arrow2.classList.toggle("uparrow_yes")
        let text = titreTarget.nextSibling
        text.classList.toggle("texte_descrequip_open")
    }
    
    render() {
        const {pictures, title, location, host, tags, description, equipments} = this.state.logement

        return (<div>
            <div className="gallery_logement">
                {/*<img src={pictures} alt="Logement" className="gallery_picture"/>*/}
                {pictures.map((item, {id}) => (<img key={id} src={item} alt="Logement" className="gallery_picture"/>))}
            </div>
            <div className="gallery_arrows">
                <img src={Previous} alt="Précédent" className="xxx"/>
                <img src={Next} alt="Suivant" className="xxx"/>
            </div>
            <div className="gallery_numero">1/1</div>
            {/*Numéro de photo/Nombre de photos*/}
            <div className="firstline_logement">
                <div>
                    <div className="firstline_titre">{title}</div>
                    <div className="firstline_lieu">{location}</div>
                </div>
                <div className="firstline_right">
                    <div className="firstline_nom"><p>{host.name}</p></div>
                    <div><img src={host.picture} alt="Propriétaire" className="firstline_img"/></div>
                </div>
            </div>
            <div className="tags_stars">
                <div>
                    <p>{tags.map((item, {id}) => (<span className="tag" key={id}>{item}</span>))}</p>
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
                    <div id="titre1" className="titre_descrequip" onClick={this.openClose}>
                        <span className="titre_nom">Description</span>
                        <span className="titre_fleches">
                            <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                            <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                        </span>
                    </div>
                    <div className="texte_descrequip">
                        <p className="text_content_descrequip">{description}</p>
                    </div>
                </div>
                <div>
                    <div id="titre2" className="titre_descrequip" onClick={this.openClose}>
                        <span className="titre_nom">Équipements</span>
                        <span className="titre_fleches">
                            <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                            <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                        </span>
                    </div>
                    <div className="texte_descrequip">
                        <ul className="liste_descrequip">
                            {equipments.map((item, {id}) => (<li key={id}>{item}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="toDelete">
                <p>Composants encore statiques :</p>
                <p>- Galerie : images (sauf quand une seule), flèches, numérotation</p>
                <p>- Etoiles</p>
            </div>
        </div>)
    }
}

export default Logement