import React, { Component } from 'react';
import Menu from './components/Menu';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css'

const style = {
    margin: 12,
  };


class Login extends Component{
 render(){
     return(
        <div id="form">
            <h1>Login</h1>
            <TextField
                hintText="example"
                floatingLabelText="Please enter login"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} />
        </div>
     );
 }
}

export default Login;