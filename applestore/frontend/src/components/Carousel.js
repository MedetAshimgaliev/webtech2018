import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import iphone from "../images/iphonex.jpg";
import ipad from "../images/ipad.jpg";
import iphone8 from "../images/iphone8.jpg"

class Carousels extends Component {
    render(){
        return(
            <div>
                 <Carousel>
                    <div>
                        <img src= {iphone} alt="iphone"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={ipad} alt="ipad" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={iphone8} alt="iphone8" />
                        <p className="legend">Legend 3</p>
                    </div>
                    </Carousel>
            </div>
        );
    }

}

export default Carousels;