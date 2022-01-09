import React from 'react';
import { Link } from 'react-router-dom'

class Page404 extends React.Component {
    render() {
        return (<div className="text_404">
            <span className="title_404">404</span>
            <p className="phrase_404">Oups ! La page que vous demandez n'existe pas.</p>
            <p className="link_404_parag"><Link to="/" className="link_404">Retourner sur la page d'accueil</Link></p>
        </div>)
    }
}

export default Page404
