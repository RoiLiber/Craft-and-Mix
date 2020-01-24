import React, { Component, Fragment } from 'react';
import { Slide } from 'react-reveal';
import { findIndex } from 'lodash';
import './style.scss';
import {connect} from "react-redux";

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselItem: this.props.topCarousel[0],
            carouselNextItem: this.props.topCarousel[1],
            activeCarousel: false,
        };
    }

    componentDidMount() {
        this.toggleCarousel(true)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { activeCarousel, carouselNextItem } = this.state;
        const { topCarousel, selectedCarouselItem } = this.props;
        const index = findIndex(topCarousel, { text: carouselNextItem.text });

        if (prevProps.topCarousel !== topCarousel && activeCarousel) {
            setTimeout(() => {
                this.setCarouselItem(0);
                selectedCarouselItem(index)
            }, 6000);
            return
        }
        else if (prevState.activeCarousel !== activeCarousel && activeCarousel) {
            setTimeout(() => {
                this.setCarouselItem(index);
                selectedCarouselItem(index)
            }, 6000)
        }


    }

    toggleCarousel = bool => {
        this.setState({ activeCarousel: bool })
    };

    setCarouselItem = index => {
        const { topCarousel } = this.props;
        const carouselItem = topCarousel[index];

        this.toggleCarousel(false);
        this.setState({
            carouselItem,
            carouselNextItem: index === topCarousel.length - 1 ? topCarousel[0] : topCarousel[index + 1],
        });
        this.toggleCarousel(true);
    };

    render() {
        const { activeCarousel, carouselItem, carouselNextItem } = this.state;
        const nextImg = carouselNextItem.img;
        const img = carouselItem.img;
        const nextText = carouselNextItem.text;
        const text = carouselItem.text;
        const nextBackgroundColor = carouselNextItem.backgroundColor;
        const backgroundColor = carouselItem.backgroundColor;

        return (
            <Fragment>
                <div className={`carousel_wrapper`}>
                    <div className={`carousel_background ${backgroundColor}`}>
                        {carouselItem.img
                            ?   <img src={img ? img : ''} alt={img}/>
                            :   <div>{text}</div>}
                    </div>
                    {activeCarousel && <Slide
                        left
                        delay={5000}>
                        {nextImg
                            ?   <img src={nextImg ? nextImg : ''} alt={nextText} className={'carousel_img'}/>
                            :   <div className={`carousel_img ${nextBackgroundColor}`}>{nextText}</div>}
                    </Slide>
                    }
                </div>
                <div className={`carousel_wrapper`}>
                    <div className={`carousel_background ${backgroundColor}`}>
                        {carouselItem.img
                            ?   <img src={img ? img : ''} alt={img}/>
                            :   <div>{text}</div>}
                    </div>
                    {activeCarousel && <Slide
                        right
                        delay={5000}>
                        {nextImg
                            ?   <img src={nextImg ? nextImg : ''} alt={nextText} className={'carousel_img'}/>
                            :   <div className={`carousel_img ${nextBackgroundColor}`}>{nextText}</div>}
                    </Slide>
                    }
                </div>
            </Fragment>

        )
    };
}

const mapStateToProps = state => {
    const { topCarousel } = state.mainReducer;
    return {
        topCarousel
    };
};

export default connect(mapStateToProps)(Carousel);



