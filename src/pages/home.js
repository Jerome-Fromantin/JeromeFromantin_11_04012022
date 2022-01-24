import React from 'react'
import { Link } from 'react-router-dom'
import {logements} from '../assets/logements'
import '../styles/styles.css'
/*import '../styles/home.css'
import '../styles/media-queries.css'*/

function Home() {
    return (
    <div>
        <div className="banner">
            <div className="banner_bgr"></div>
            <div className="banner_txt">
                <span>Chez vous,&nbsp;</span>
                <span>partout et ailleurs</span>
            </div>
        </div>
        <div className="gallery">
            <ul className="list">
                {logements.map(({id, title, cover}) => (
                    <li key={id} className="card">
                        <Link to={"logement/" + id} className="card_link">
                            <div><img src={cover} alt="Logement" className="card_photo"/></div>
                            <div className="card_title">{title}</div>
                            <div className="card_bgr"></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>)
}

export default Home
