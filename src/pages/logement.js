import React from 'react';
import {logements} from '../assets/logements'

class Logement extends React.Component {
    render() {
        return (<div>
            {logements.map(({id, title}) => (
                <p key={id}>Fiche logement titré {title}</p>
            ))}
        </div>)
    }
}

export default Logement
