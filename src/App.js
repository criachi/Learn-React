import React from 'react';
import './App.css';

class ColoredRect extends React.Component {
  render() {
    return (
      <div className={this.props.className} style={{ backgroundColor: this.props.color, borderRadius: this.props.borderRadius }}> {this.props.children} </div>
    )
  }
}

class TextBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <ColoredRect className="textRect" color="#FFFFFF" borderRadius="15px"> <input type="text" id={this.props.textBoxID} readOnly={this.props.isReadOnly} value={this.props.text} onChange={this.handleInputChange}></input> </ColoredRect>
    )
  }
}

class MultiTextBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalString: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(string) {
    this.setState({ originalString: string });
  }

  render() {
    return (
      <div className="container"> 
        <TextBoxContainer textBoxID="inputBox" isReadOnly={false} text={this.state.originalString} onTextChange={this.handleInputChange}/>
        <TextBoxContainer textBoxID="reverseBox" isReadOnly={true} text={this.state.originalString.split("").reverse().join("")}/>
        <TextBoxContainer textBoxID="InputLenBox" isReadOnly={true} text={this.state.originalString.length}/>
      </div> 
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
      <body>
        <div className="App">
           <button className="btn" onClick={this.updateRectColors}>Button</button>
           <button className="btn" onClick={this.resetRectColors}>Reset</button>
           <ColoredRect className="rect" color={this.state.altColor1}/>
           <ColoredRect className="rect" color={this.state.altColor2}/>
           <MultiTextBoxContainer/>
        </div>
      </body>
    );
  }
}

export default App;
