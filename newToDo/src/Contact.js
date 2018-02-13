import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
    constructor(props){
        super(props)
        

        this.state = {
            userInput:'',
            listContacts:[
                {
                    name: 'Medet',
                    phone: '555-888',
                    email: 'kachelikachayt@gmail.com',
                    image: 'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg'
                },
                {
                    name: 'Mukhtar',
                    phone: '111-888',
                    email: 'mukhtar@gmail.com',
                    image: 'http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg'
                },
                {
                    name: 'Nurbolat',
                    phone: '111-888',
                    email: 'sakko@gmail.com',
                    image: 'https://a.wattpad.com/cover/4106257-368-k161010.jpg'
                },
                {
                    name: 'Artemii',
                    phone: '222-888',
                    email: 'panarin@gmail.com',
                    image: 'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg'
                },
                {
                    name: 'Evgenii',
                    phone: '711-888',
                    email: 'malkin@gmail.com',
                    image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg'
                },
                {
                    name: 'Ilya',
                    phone: '888-888',
                    email: 'kovi@gmail.com',
                    isActive: false
                }
            ]
        }
        
    }

    changeUserInput(input){
        this.setState({
          userInput: input
        });
        console.log(input);
      }

    Search(userInput){
        let newListContact = this.state.listContacts.filter((name) => {return name = userInput});
        
        this.setState({
            listContacts: newListContact
        })
        console.log(newListContact);
    }

    
    

render(){
    return(
    <div>
        <h1>Contact list by Medet Ashimgaliev</h1>
        <input 
            onChange={(e)=>this.changeUserInput(e.target.value)}
            value={this.state.userInput} 
            type = 'text'
       />
       <button onClick={ () => this.Search(this.state.inputSearch)}>Search</button>
        <ul>
            {
                this.state.listContacts.map((val,index) =>
                <li key={index}>{val.name}<p>{val.phone}</p><p>{val.email}</p></li>
            )
            }
        </ul>
    </div>
    );
}

}

export default Contact;