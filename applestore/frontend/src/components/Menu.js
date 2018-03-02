import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logotip from '../logotip.svg';
import MobileTearSheet from '../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Drawer from 'material-ui/Drawer';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import Login from '../Login';
import Registration from '../Registration';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    
      handleToggle = () => this.setState({open: !this.state.open});
      handleClose = () => this.setState({open: false});
    render(){
        return(
            <div>
                <AppBar
        title = {<img src={logotip} className="App-logo" alt="logo" />}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onClick={this.handleToggle}
        iconElementRight={<p><a href="dog.html">dfdfgf</a></p>}
      />
       <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MobileTearSheet>
          <Router>
            <div>
              <List>
                <Link to ="/Login"><ListItem primaryText="Log in" rightIcon={<i class="material-icons">account_circle</i>}/></Link>
                <ListItem primaryText="Register" rightIcon={<i class="material-icons">fiber_new</i>}/>
              </List>
                  <Switch>
                    <Route path="/Login" component={Registration}/>
                  </Switch>
              </div>
            </Router>
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
            </div>
        );
    }
}

export default Menu;