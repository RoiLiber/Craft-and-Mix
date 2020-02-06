import React, { Component } from 'react';
import { Slide } from 'react-reveal';
import { findIndex } from 'lodash';
import './style.scss';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselArray: this.props.carouselArray,
            carouselItem: this.props.carouselArray[0],
            carouselNextItem: this.props.carouselArray[1],
            activeCarousel: false,
        };
    }

    componentDidMount() {
        this.toggleCarousel(true)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { activeCarousel, carouselNextItem } = this.state;
        const { carouselArray, delay } = this.props;
        const index = carouselNextItem && findIndex(carouselArray, { text: carouselNextItem.text });

        if (prevState.activeCarousel !== activeCarousel && activeCarousel) {
            setTimeout(() => {
                this.flowCarouselItems(index);
            }, delay)
        }
    }

    toggleCarousel = bool => {
        this.setState({ activeCarousel: bool })
    };

    flowCarouselItems = index => {
        const { carouselArray } = this.props;
        const carouselItem = carouselArray[index];
        const carouselNextItem = index === carouselArray.length - 1
            ? carouselArray[0] : carouselArray[index + 1];

        this.toggleCarousel(false);
        this.setState({
            carouselItem,
            carouselNextItem,
            selectedCarouselItem: index,
        });
        this.toggleCarousel(true);
    };

    render() {
        const { popUp, delay, eventName } = this.props;
        const { activeCarousel, carouselItem } = this.state;
        const img = carouselItem && carouselItem.img;
        const text = carouselItem && carouselItem.text;
        const item = {
            ...carouselItem,
            event: eventName
        };

        return (
            <div className={`mood_carousel_wrapper`} onClick={() => popUp(item)}>
                <div className={'carousel_image_wrapper'}>
                    {activeCarousel && <Slide top duration={2000} deley={delay}>
                        <img src={img} alt={text} className={'carousel_img'}/>
                        <i className="fab fa-wpexplorer"/>
                    </Slide>}
                </div>
            </div>
        )
    };
}

export default Carousel;



