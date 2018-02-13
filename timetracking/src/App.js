import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button,Badge  } from 'reactstrap';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class TimerDashboard extends Component{
  render(){
    return(
      <div id = "dashboard">
      <Button color="primary">Dashboard</Button>{' '}
      <EditableTimerList />
    </div>
    );
  }
}

class EditableTimerList extends Component{
  render(){
    return(
      <div id = "timerlist">
        <h1>Timerlist <Badge color="secondary">New</Badge></h1>
        <EditableTimer/>
      </div>
    );
  }
}

class EditableTimer extends Component{
  render(){
    return(
      <div id = "timer">
        <p>Prosto Timer</p>
        <TimerForm/>
      </div>
    );
  }
}

class TimerForm extends Component{
  render(){
    return(
      <div id="timerform">
        <p>TimerForm</p>
        <label>Title</label>
        <input type='text' defaultValue={this.props.title} />
      </div>
    );
  }
}

export default TimerDashboard;
