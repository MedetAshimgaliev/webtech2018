import React, { Component } from 'react';
import Menu from './components/Menu';
import TextField from 'material-ui/TextField';

class Login extends Component{
 render(){
     return(
        <div>
            <Menu />
            <p>Hello</p>
            <TextField
            hintText="Login"
            floatingLabelText="Fixed Floating Label Text"
            floatingLabelFixed={true}
            /><br />
                <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                /><br />
        </div>
     );
 }
}

export default Login;