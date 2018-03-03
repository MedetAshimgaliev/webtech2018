import React, { Component } from 'react';
import logotip from './logotip.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Cards from './components/Cards';
import Login from './Login';
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
import Registration from './Registration';
import Tabs from './components/Tabs';


class App extends Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      open: false,
      loginOpened: false 
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  handleLogin(){
    this.setState({
      loginOpened: true
    });
  }

  render() {
    const loginOpened = this.state.loginOpened;

    if(loginOpened){
      return(
      <div>
          <Login />
      </div>
      );
    }else{

    return ( 
      <div>
          <AppBar
            title = {<img src={logotip} className="App-logo" alt="logo" />}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onClick={this.handleToggle}
          />
          <div>
              <Drawer
                docked={false}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
              <MobileTearSheet> 
                <div>
                  <List>
                    <ListItem 
                      onClick = {this.handleLogin}
                      primaryText="Log in" 
                      rightIcon={<i class="material-icons">account_circle</i>}
                    />
                    <ListItem primaryText="Register" rightIcon={<i class="material-icons">fiber_new</i>}/>
                  </List>    
                </div>
                <Divider />
                <List>
                  <ListItem primaryText="Smartphones" leftIcon={<i class="material-icons">smartphone</i>} />
                  <ListItem primaryText="Tablets" leftIcon={<i class="material-icons">tablet_mac</i>} />
                  <ListItem primaryText="Laptops" leftIcon={<i class="material-icons">computer</i>} />
                </List>
                <Divider />
                <List>
                  <ListItem primaryText="About us" rightIcon={<ActionInfo />} />
                  <p>Все права сохранены</p>
                </List>
            </MobileTearSheet>
            </Drawer>
          </div>
        <Tabs />
        <Cards />
        <HorizontalLinearStepper />
      
       
              
        
      </div>
    );
  }
  }
}
export default App;
