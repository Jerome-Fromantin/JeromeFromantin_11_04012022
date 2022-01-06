import React from 'react';
import Banner_Home from '../assets/Banner_Home.png'

class Home extends React.Component {
    render() {
        return (
        <div>
            <img className="banner_Img" src={Banner_Home} alt="Bannière"/>
            <div className="banner_Bgr"></div>
            <div><span className="banner_Txt">Chez vous, partout et ailleurs</span></div>
            <div className="gallery">
                <div className="card"><div className="card_Title">Titre de la<br/>location</div></div>
                <div className="card"><div className="card_Title">Titre de la<br/>location</div></div>
                <div className="card"><div className="card_Title">Titre de la<br/>location</div></div>
            </div>
        </div>)
    }
}

export default Home
