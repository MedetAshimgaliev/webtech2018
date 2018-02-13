import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import App from './App';
import Contact from './Contact';
  

  class Start extends Component{
      constructor(props){
          super(props)

      }
          render(){
           return(
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/todo">Todo</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <Switch>
                                <Route path="/todo" component={App}/>
                                <Route path="/contact" component={Contact}/>
                            </Switch>
                        </ul>
                    </div>
                </Router>
           );   
          }
          
      }
  

  export default Start;