import React, { Component } from 'react';
import logotip from './logotip.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Menu from './components/Menu';
import Cards from './components/Cards';
import HorizontalLinearStepper from './components/Stepper';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Carousel from './components/Carousel';

class App extends Component {
   render() {
    return (
      <div className="App">
        <Menu />
        <Carousel />
        <Cards />
        <HorizontalLinearStepper />
      
       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       
        
      </div>
    );
  }
}
export default App;
