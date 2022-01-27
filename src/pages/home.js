import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import {logements} from '../assets/logements'

function Home(props) {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("logements.json")
            const data = await response.json()
            console.log(response)
            console.log(data)
            setLocations(data)
        }
        fetchData()
    }, [])

    return (<div>
        <div className="banner">
            <div className="banner_bgr"></div>
            <div className="banner_txt">
                <span>Chez vous,&nbsp;</span>
                <span>partout et ailleurs</span>
            </div>
        </div>
        <div className="gallery">
            <ul className="list">
                {locations.map(({id, title, cover}) => (
                    <li key={id} className="card">
                        <Link to={"logement/" + id}>
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
