import React from 'react';
import '../styles.css';

class FirstLine extends React.Component{
    render() {
        return (<div className='firstline'>
            <span className='logo'>Logo</span>
            <span className='links'>
                <span className='link1'>Accueil</span>
                <span className='link2'>A Propos</span>
            </span>
        </div>)
    }
}

export default FirstLine