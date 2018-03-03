import React, { Component } from 'react';
import './Tablets.css';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12,
  };
  

class Tablets extends Component{
    constructor(props){
        super(props)

        this.state = {
            tabletList:[
                {
                    name: 'iPad 1',
                    imei: '555-888',
                    storage: '128 gb',
                    image: 'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg'
                },
                {
                    name: 'iPad 2',
                    imei: '111-888',
                    storage: '256 gb',
                    image: 'http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg'
                },
                {
                    name: 'iPad 3',
                    imei: '111-888',
                    storage: '128 gb',
                    image: 'https://a.wattpad.com/cover/4106257-368-k161010.jpg'
                },
                {
                    name: 'iPad 4 ',
                    imei: '222-888',
                    storage: '2 gb',
                    image: 'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg'
                },
                {
                    name: 'iPad 5',
                    imei: '711-888',
                    storage: '256 gb',
                    image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg'
                }

            ]
        }
    }
    
    render(){
        return(
            <div>
                
                    {
                        this.state.tabletList.map((val) =>
                        <div id = "card">
                            
                                <p>{val.name}</p>
                                <p>{val.imei}</p>
                                <p>{val.storage}</p>
                                <RaisedButton label="Buy" style={style} />
                        </div>
                    )
                    }
                
            </div>
        );
    }
}
export default Tablets;