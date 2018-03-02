import React, { Component } from 'react';
import './App.css';


class App extends Component {
constructor(props){
  super(props);
  
  this.state = {
    activeIndex:0
  }
}

handleClick(index, props) {
   this.setState({ activeIndex: index });
}

render() {
    return (
      <div>
        <center><h1>My Navigation Menu</h1></center>
        
        <div id = "menu">
          <div id = "square1" onClick={handleClick.bind(this, index, this.props)}>Home</div>

          <div id = "square2" onClick={()=>{this.setState({active: true})}}>About</div>
          <div id = "square3">Contact</div>
        </div>

      </div>
    );
  }
}

export default App;
