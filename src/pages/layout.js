import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../composants/Header'
import Footer from '../composants/Footer'

class Layout extends React.Component {
    render() {
        return (<div>
            <div className="layout_Main">
                <Header/>
                <Outlet/>
            </div>
            <div className="layout_Footer">
                <Footer/>
            </div>
        </div>)
    }
}

export default Layout
