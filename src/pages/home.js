import React from 'react';
import Banner_Home from '../assets/Banner_Home.png'

class Home extends React.Component {
    render() {
        return (
        <div>
            <img className="banner_Img" src={Banner_Home} alt="Bannière"/>
            <div className="banner_Bgr"></div>
        </div>)
    }
}

export default Home
