import React, { Component } from 'react';
import { connect } from "react-redux";
import Carousel from '../../components/Carousel';
import { find } from 'lodash';
import './style.scss';

class CarouselSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselItem: this.props.carousel[0],
            carouselNextItem: this.props.carousel[1],
            activeCarousel: false,
        };
    }

    componentDidMount() {
        this.toggleCarousel(true)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { activeCarousel, carouselNextItem } = this.state;

        if (prevProps.activeCarousel !== activeCarousel && activeCarousel) {
            setTimeout(() => {
                this.setCarouselItem(carouselNextItem.index)
            }, 6000)
        }
    }

    toggleCarousel = bool => {
        this.setState({ activeCarousel: bool })
    };

    forceCarouselItem = index => {
        // this.toggleCarousel(false);
        // this.setCarouselItem(index)
        // this.toggleCarousel(true);
    };

    setCarouselItem = (index) => {
        const { carousel } = this.props;
        this.toggleCarousel(false);
        find = find(carousel, { index: index });
        this.setState({
            carouselItem: find,
            carouselNextItem: find.index === 3 ? carousel[0] : carousel[find.index + 1],
        });
        this.toggleCarousel(true);
    };

    render() {
        const { carouselItem, carouselNextItem, activeCarousel } = this.state;

        return (
            <div className={'carousel_section'}>
                <Carousel
                    carouselItem={carouselItem}
                    carouselNextItem={carouselNextItem}
                    toggleCarousel={this.toggleCarousel}
                    activeCarousel={activeCarousel}
                />
                {this.carouselDots()}
            </div>
        )
    };
    carouselDots = () => {
        const { carouselItem } = this.state;
        const dotsArray = [1, 2, 3, 4];

        return <div className={'dots'}>
            {dotsArray.map((item, index) => {
                const selectedCarouselItem = index === carouselItem.index;
                return <i key={index} className={selectedCarouselItem ? "far fa-dot-circle gold" :  "far fa-dot-circle"} onClick={() => this.forceCarouselItem(index)}/>
            })}
        </div>
    }
}

const mapStateToProps = state => {
    const { carousel } = state.mainReducer;
    return {
        carousel
    };
};

export default connect(mapStateToProps)(CarouselSection);
