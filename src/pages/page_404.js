import React from 'react';
import { Link } from 'react-router-dom'

class Page404 extends React.Component {
    render() {
        return (<div className="text_404">
            <p className="title_404"><span>404</span></p>
            <p className="phrase_404">Oups ! La page que vous demandez n'existe&nbsp;pas.</p>
            <p className="link_404_parag"><Link to="/" className="link_404">Retourner sur la page d'accueil</Link></p>
        </div>)
    }
}

export default Page404
