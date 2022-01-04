import React from 'react';
import '../styles.css';

class Test extends React.Component{
    // Ci-dessous, le constructor qui initialise "this.state" dans la 2ème version.
    constructor(props) {
        super(props);
        this.state = {name: "toi"}
    }

    render() {
        return <div className='test'>
            {/* Ci-dessous, 1ère version. */}
            <span className='test1'>Bonjour {this.props.name} !</span>
            {/* Cela affiche : Bonjour Jérôme ! */}

            {/* Ci-dessous, 2ème version avec un état local. */}
            <span className='test1'>Bonjour {this.state.name} !</span>
            {/* Cela affiche : Bonjour toi ! */}

            <p className='test2'>Ces 3 phrases en vert sont le rendu du composant "Test".</p>
        </div>
    }
}

export default Test