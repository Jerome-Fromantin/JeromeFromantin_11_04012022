import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../assets/logo.png'

class Header extends React.Component{
    render() {
        return (<div className='header'>
            <img src={logo} alt="Logo Kasa"/>
            <span className='nav'>
                <Link to="/" className='link_accueil'>Accueil</Link>
                <Link to="/apropos" className='link_apropos'>A Propos</Link>
            </span>
        </div>)
    }
}

export default Header
