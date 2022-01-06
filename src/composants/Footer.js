import React from 'react';
import logo from '../assets/logoFooter.png'

class Page404 extends React.Component {
    render() {
        return <div className="footer">
            <img src={logo} alt="Logo Kasa" className="footer-logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    }
}

export default Page404
