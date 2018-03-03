import React, { Component } from 'react';
import Menu from './components/Menu';


class Smartphones extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        fetch('http://facebook.github.io/react-native/movies.json').
        then((Response)=>Response.json()).
        then((findresponse)=>
        {
            console.log(findresponse.movies)
            this.setState({
                data: findresponse.movies,
            })
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.data.map((dynamicData, key) => 
                        <div>
                            {dynamicData.title}
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Smartphones;
