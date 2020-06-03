import React from 'react';
import logo from './logo.svg';
import './App.css';

class ColoredRect extends React.Component {

  render() {
    return (
      <div className="rect" style={{ backgroundColor: this.props.color }}></div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {altColor1: "#FFFFFF", altColor2: "#FFFFFF"};
    this.updateRectColors = this.updateRectColors.bind(this);
    this.resetRectColors = this.resetRectColors.bind(this);
  }

  updateRectColors() {
    this.setState({altColor1: "#FF0000", altColor2: "#0000FF"});
  }

  resetRectColors() {
    this.setState({altColor1: "#FFFFFF", altColor2: "#FFFFFF"});
  }

  render() {
    return (
      <div className="App">
         <body>
           <ColoredRect color={this.state.altColor1}/>
           <ColoredRect color={this.state.altColor2}/>
           <button className="btn" onClick={this.updateRectColors}>Button</button>
           <button className="btn" onClick={this.resetRectColors}>Reset</button>
         </body>
      </div>
    );
  }
}

export default App;
