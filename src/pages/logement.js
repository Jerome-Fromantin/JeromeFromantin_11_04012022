import React, { useEffect, useState } from 'react'
import {getLogement} from '../services/services'
import Gallery from '../composants/Gallery'
import StarScale from '../composants/StarScale'
import Collapse from '../composants/Collapse'
import { useNavigate, useParams } from 'react-router'

function Logement(props) {
    const [logement, setLogement] = useState({pictures: [], host: {}, tags: [], equipments: []})
    const param = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const id = param.id
            const lieu = await getLogement(id)
            if (!lieu) {
                navigate("/page404")
            }
            else {setLogement(lieu)}
        }
        fetchData()
    }, [navigate, param.id])

    const {pictures, title, location, host, tags, rating, description, equipments} = logement

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
                <Collapse mobileDisplay="texte_description" title="Description"
                description={<p className="text_content_descrequip">{description}</p>}
                titleClass="titre_descrequip" textClass="texte_descrequip"/>
            </div>
            <div className="menu_equip">
                <Collapse title="Équipements"
                description={<ul className="liste_descrequip">{equipments.map((item, id) => (<li key={id}>{item}</li>))}</ul>}
                titleClass="titre_descrequip" textClass="texte_descrequip"/>
            </div>
        </div>
    </div>)
}

export default Logement
