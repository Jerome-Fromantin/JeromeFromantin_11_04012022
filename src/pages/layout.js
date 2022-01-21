import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../composants/Header'
import Footer from '../composants/Footer'

function Layout() {
    return (<div>
        <div className="layout_main">
            <Header/>
            <Outlet/>
        </div>
        <div className="layout_footer">
            <Footer/>
        </div>
    </div>)
}

export default Layout
