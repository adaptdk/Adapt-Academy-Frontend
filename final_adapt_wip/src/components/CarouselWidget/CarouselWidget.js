import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import imgSrc1 from '../../assets/pics/pic1.jpg';
import imgSrc2 from '../../assets/pics/pic2.jpg';
import imgSrc3 from '../../assets/pics/pic3.jpg';

class CarouselWidget extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel
                infiniteLoop = { true }
                autoPlay = { true }
                stopOnHover = { true }
                transitionTime = { 700 }
                interval = { 6000 }
                showThumbs = { false }
                useKeyboardArrows = { true }
            >
                <div>
                    <img src={ imgSrc1 } />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={ imgSrc2 } />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={ imgSrc3 } />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
         );
    }
}
 
export default CarouselWidget;