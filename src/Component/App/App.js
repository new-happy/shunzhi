import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import imgSrc from './images/san.svg'
import Seadbar from '../Seadbar/Seadbar'

class App extends Component {
  state = {
    office1 : false
  }
  myClick = () => {
    let { office1 } = this.state
    this.setState({
      office1 : !office1
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={ this.myClick}><img src={ imgSrc } alt="111"/></button>
        <Seadbar state={ this.state} myClick={ this.myClick } />
        <Header />
        <Main name='用户名'/>
        <Main name='password' type='password'/>
        <Footer />
      </div>
    );
  }
}

export default App;
