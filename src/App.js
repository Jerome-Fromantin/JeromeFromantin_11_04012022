import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Apropos from './pages/apropos';
import Logement from './pages/logement';
import Page404 from './pages/page_404'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="apropos" element={<Apropos/>}/>
            <Route path="logement" element={<Logement/>}/>
            <Route path="*" element={<Page404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
