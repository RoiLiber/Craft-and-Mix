import React, { Component, Fragment } from 'react';
import { Zoom } from 'react-reveal';
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
        const { carouselArray } = this.props;
        const index = findIndex(carouselArray, { text: carouselNextItem.text });

        if (prevState.activeCarousel !== activeCarousel && activeCarousel) {
            setTimeout(() => {
                this.flowCarouselItems(index);
            }, 5000)
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
        const { popUp } = this.props;
        const { activeCarousel, carouselItem } = this.state;
        const img = carouselItem.img;
        const event = carouselItem.event;
        const text = carouselItem.text;

        return (
            <div className={`mood_carousel_wrapper`}>
                <div className={'carousel_image_wrapper'}>
                    {activeCarousel && <Zoom deley={120}>
                        <img src={img} alt={text}
                             className={'carousel_img'}
                             onClick={() => popUp(carouselItem)}
                        />
                    </Zoom>}
                </div>
                <div className={`carousel_text`}>
                    <div>
                        <i className="fas fa-map-marker-alt"/>
                        <span>{event}</span>
                    </div>
                    <Zoom deley={350}><span>{text}</span></Zoom>
                </div>
            </div>
        )
    };
}

export default Carousel;



