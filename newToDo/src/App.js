import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

   // this.addToList = this.addToList.bind(userInput);

    this.state = {
      userInput: '',
      list: ['medet','roma'],
      
    }
  }
  changeUserInput(input){
    this.setState({
      userInput: input
    });
  }

  addToList(input){
    let listArray = this.state.list;
    let exist = false; 
    for(var i=0;i<listArray.length;i++){
      if(listArray[i]===input){
        console.log(input);
        console.log(listArray[i]);
        alert('Exist!');
        exist = true;
        return false;
      } 
      
    }  
    if(exist = true){
      listArray.push(input);


    }
    console.log(listArray);
    this.setState({
      list: listArray,
      userInput: ''
    })

    
  }

  



  Delete(indToDelete){
    //let listArray = this.state.list;

    //listArray.splice(input, 1)
    let newList = this.state.list.filter((val, index) => {return index !== indToDelete});
    console.log(indToDelete);
     this.setState({
      list: newList
    })

  }


  render() {
    return (
      <div>
      <h1>ToDo list by Medet Ashimgaliev</h1>

      <input 
        onChange={(e)=>this.changeUserInput(e.target.value)}
        value={this.state.userInput} 
        type = 'text'
      />
      {/* <button onClick={ () => this.addToList(this.state.userInput)}>Add</button> */}
      <button onClick={ () => this.addToList(this.state.userInput)}>Add</button>
      <ul>
        {this.state.list.map( (val, index)=> <li key = {index}>{val}<button onClick={this.Delete.bind(this, index)}>Delete</button></li>)}
      </ul>
      
      

      </div>
    );
  }
}

export default App;
