import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../composants/Header'
import Footer from '../composants/Footer'

class Layout extends React.Component {
    render() {
        return (<div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>)
    }
}

export default Layout
