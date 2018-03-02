import React, { Component } from 'react';

class Task2 extends Component{
constructor(props){
    super(props);

    this.state = {
        pruducts:["milk","hleb","grechka"]
    }
}


render(){
        return(
            <div>
                <ul>
                    {this.state.pruducts.map (val) => <li>{val}>Delete</button></li>)}
                </ul>
            </div>
        );
    }
}

export default Task2;