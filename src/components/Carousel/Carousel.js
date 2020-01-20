import React, { Component, Fragment } from 'react';
import { Slide } from 'react-reveal';
import './style.scss';

class Carousel extends Component {


    render() {
        const { carouselItem, carouselNextItem, activeCarousel } = this.props;
        const text = (text, color) => {
            return <div className={`carousel_section ${color}`}>
                <span>{text}</span>
            </div>
        };
        const photo = (img, color) => {
            return <div className={`carousel_section ${color}`}>
                <img src={img} alt={'mood_photo'}/>
            </div>
        };
        return (
            <Fragment>
                {
                    carouselItem.index === 0 || carouselItem.index === 2
                        ?   <div className={`carousel bottomCarouselItem`}>
                                {text(carouselItem.text, carouselItem.color)}
                                {photo(carouselItem.img, carouselItem.color)}
                        </div>
                        :   <div className={`carousel bottomCarouselItem`}>
                                {photo(carouselItem.img, carouselItem.color)}
                                {text(carouselItem.text, carouselItem.color)}
                        </div>
                }
                {
                    activeCarousel
                        ? carouselItem.index === 0 || carouselItem.index === 2
                        ?   <div className={`carousel topCarouselItem`}>
                                <Slide left delay={5000}>
                                    {photo(carouselNextItem.img, carouselNextItem.color)}
                                </Slide>
                                <Slide right delay={5000}>
                                    {text(carouselNextItem.text, carouselNextItem.color)}
                                </Slide>
                        </div>
                        :   <div className={`carousel topCarouselItem`}>
                            <Slide left delay={5000}>
                                {text(carouselNextItem.text, carouselNextItem.color)}
                            </Slide>
                            <Slide right delay={5000}>
                                {photo(carouselNextItem.img, carouselNextItem.color)}
                            </Slide>
                        </div>
                        : null
                }
            </Fragment>
        )
    };
}

export default Carousel;



