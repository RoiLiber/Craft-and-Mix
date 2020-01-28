import React, { Component } from 'react';
import { connect } from "react-redux";
import { findIndex} from 'lodash';
import { Slide } from "react-reveal";
import { Spring } from 'react-spring/renderprops';
import logo from '../../assest/icon/Crift & Mix_logo icon.svg';
import './style.scss';

class TopCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselArray: this.props.topCarousel,
            carouselItem: this.props.topCarousel[0],
            carouselNextItem: this.props.topCarousel[1],
            selectedCarouselItem: 0,
            activeCarousel: false,
            forceCarousel: false
        };
    }

    componentDidMount() {
        this.toggleCarousel(true)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { activeCarousel, carouselNextItem } = this.state;
        const { topCarousel } = this.props;
        const index = findIndex(topCarousel, { text: carouselNextItem.text });

        if (prevState.activeCarousel !== activeCarousel && activeCarousel) {
            setTimeout(() => {
                this.flowCarouselItems(index);
            }, 6000)
        }
    }

    toggleCarousel = bool => {
        this.setState({ activeCarousel: bool })
    };

    flowCarouselItems = index => {
        const { activeCarousel } = this.state;

        if (activeCarousel) {
            this.toggleCarousel(false);
            this.setStateConfig(index, false)
        }
    };

    setStateConfig = (index, forceState) => {
        const { topCarousel } = this.props;
        const carouselItem = topCarousel[index];
        const carouselNextItem = index === topCarousel.length - 1
            ? topCarousel[0] : topCarousel[index + 1];

        this.setState({
            carouselItem,
            carouselNextItem,
            selectedCarouselItem: index,
            activeCarousel: !forceState
        })
    };

    forceCarouselItem = index => {
        this.setStateConfig(index, true);
        setTimeout(() => {
            this.toggleCarousel(true)
        }, 6000)
    };

    render() {
        return (
            <div className={'carousel_section'}>
                {this.carousel(false)}
                {this.carousel(true)}
                {this.carouselDots()}
                <img className={'logo'} src={logo} alt={'logo'}/>
            </div>
        )
    };

    carousel = isEven => {
        const { carouselItem, carouselNextItem, activeCarousel, selectedCarouselItem } = this.state;
        const { img, text, backgroundColor } = carouselItem;
        const nextImg = carouselNextItem.img;
        const nextText = carouselNextItem.text;
        const nextBackgroundColor = carouselNextItem.backgroundColor;
        const selected = isEven
            ? selectedCarouselItem === 0 || selectedCarouselItem === 2
            : selectedCarouselItem === 1 || selectedCarouselItem === 3;

        return <div className={`carousel_wrapper`} onClick={() => this.forceCarouselItem(selectedCarouselItem)}>
            <div className={`carousel_background ${backgroundColor}`}>
                {selected
                    ?   <img src={img} alt={text}/>
                    :   <div>{text}</div>}
            </div>
            {activeCarousel && <Slide
                opposite
                left={!isEven}
                right={isEven}
                delay={5000}
            >
                {activeCarousel && !selected
                    ?   <img src={nextImg} alt={nextText} className={'carousel_img'}/>
                    :   <div className={`carousel_img ${nextBackgroundColor}`}>{nextText}</div>}
            </Slide>}
        </div>
    };

    carouselDots = () => {
        const { carouselArray, selectedCarouselItem } = this.state;

        return <div className={'dots'}>
            {carouselArray.map((item, index) => {
                const selected = selectedCarouselItem === index;

                return selected
                    ? <i key={index} className={'far fa-dot-circle gold'}/>
                    : <i key={index}
                         className={'far fa-dot-circle'}
                         onClick={() => this.forceCarouselItem(index)}/>;

            })}
        </div>
    }
}

const mapStateToProps = state => {
    const { topCarousel } = state.mainReducer;

    return {
        topCarousel
    };
};

export default connect(mapStateToProps)(TopCarousel);
