import React from 'react';

class Home extends React.Component {
    render() {
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
                <div className="card"><div className="card_title">Titre de la<br/>location</div></div>
            </div>
        </div>)
    }
}

export default Home
