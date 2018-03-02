import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12,
  };

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:''
        }

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    }

onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
}

addUser(username){
    

}

 render(){
     return(
            <div>
                <h1>Join Us!!!</h1>
                <TextField
                    value = {this.state.username}
                    onChange = {this.onChange}
                    hintText="Name"
                    type = "text"
                    name = "username"
                /><br />
                <RaisedButton label="Submit" primary={true} style={style} />
            </div>
     );
 }
}

export default Registration;