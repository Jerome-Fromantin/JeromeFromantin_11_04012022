import React from 'react'
import {getLogement} from '../services/services'
import Gallery from '../composants/Gallery'
import StarScale from '../composants/StarScale'
import down_arrow from '../assets/DownArrow.png'
import up_arrow from '../assets/UpArrow.png'

class Logement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {logement: {pictures: [], host: {}, tags: [], equipments: []}}
        this.fetchData = this.fetchData.bind(this)
    }

    getLogementId() {
        const url = window.location.href.split("/")
        const id = url[url.length - 1]
        return id
    }

    async fetchData() {
        const id = this.getLogementId()
        const logement = await getLogement(id)
        this.setState({logement})
    }

    componentDidMount() {
        this.fetchData()
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
        const {pictures, title, location, host, tags, rating, description, equipments} = this.state.logement

        return (<div>
            {<Gallery photos={pictures}/>}
            <div className="main_infos">
                <div>
                    <div className="logement_titre">{title}</div>
                    <div className="logement_lieu">{location}</div>
                    <p className="logement_tags">{tags.map((item, id) => (<span className="tag" key={id}>{item}</span>))}</p>
                </div>
                <div className="infos_right">
                    <div className="nom_img">
                        <div className="propri_nom"><p>{host.name}</p></div>
                        <div><img src={host.picture} alt="Propriétaire" className="propri_img"/></div>
                    </div>
                    <StarScale scaleValue={rating}/>
                </div>
            </div>
            <div className="descr_equip">
                <div className="menu_descr">
                    <div id="titre1" className="titre_descrequip" onClick={this.openClose}>
                        <span className="titre_nom">Description</span>
                        <span className="titre_fleches">
                            <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                            <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                        </span>
                    </div>
                    <div id="texte_description" className="texte_descrequip">
                        <p className="text_content_descrequip">{description}</p>
                    </div>
                </div>
                <div className="menu_equip">
                    <div id="titre2" className="titre_descrequip" onClick={this.openClose}>
                        <span className="titre_nom">Équipements</span>
                        <span className="titre_fleches">
                            <span className="downarrow"><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                            <span className="uparrow"><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
                        </span>
                    </div>
                    <div className="texte_descrequip">
                        <ul className="liste_descrequip">
                            {equipments.map((item, id) => (<li key={id}>{item}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Logement
