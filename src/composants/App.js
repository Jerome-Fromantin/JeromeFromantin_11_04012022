//import logo from '../logo.svg';
import React from 'react';
import '../App.css';
import FirstLine from './FirstLine';
import Test from './Test';
import Tag from './Tag'

class App extends React.Component {
  render() {
    return <div className="App">
    {/*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>*/}
    <FirstLine/>
    <Test name="Jérôme"/>
    <Tag/>
    </div>
  }
}

export default App;