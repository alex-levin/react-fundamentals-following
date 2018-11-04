import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        // index.js: <App clicks={model.clicks} onClick={} />
        // clicks and onClick are the App element attributes and their values are passed to
        // the App component this.props.clicks and this.props.onClick
        // When the div is clicked, the div's onClick event handler calls onClick function
        // defined in <App onClick={} />
        // Transpiled to
        // function render(){return React.createElement("div",{onClick:this.props.onClick},
        //    "This div has been clicked ",this.props.clicks," times.")}
        <div onClick={ this.props.onClick }>This div has been clicked { this.props.clicks } times.</div>
    );
  }
}

export default App;
