import React from 'react';
import logo from '../assets/logoFooter.png'

function Footer() {
    return <div>
        <img src={logo} alt="Logo Kasa" className="footer-logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer
