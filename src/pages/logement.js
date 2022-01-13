import React from 'react';
import {logements} from '../assets/logements'

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
    
    render() {
        const {title, id, description} = this.state.logement
        return (<div>coucou
                <p>Fiche logement titré {title}</p>
                <p>Fiche logement titré {id}</p>
                <p>Fiche logement titré {description}</p>
        </div>)
    }
}

export default Logement