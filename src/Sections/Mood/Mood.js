import React, { Component } from 'react';
import { connect } from "react-redux";
import { random, shuffle, slice } from 'lodash';
import Carousel from "../../components/Carousel";
import Section from "../../components/Section";
import {setPhoto } from "../../store/actions/mainActions";
import './style.scss';

class Mood extends Component {

    popUp = item => {
        const { setPhoto } = this.props;
        setPhoto(item)
    };

    delay = () => {
        // return random(5000, 35000);
    };

    carousel = (carousel, eventName, i) => {
        return <Carousel
            carouselArray={carousel}
            popUp={this.popUp}
            delay={5500 + i * 150}
            eventName={eventName}
        />
    };

    render() {
        const { mood, large } = this.props;

        return (
            <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'}>
                <div className={'mood_section'}>
                    <p>Some mood Photos from our Events</p>
                    {mood.map((item, index) => {
                        const eventName = item.eventName;
                        const photos = item.photos;
                        const carouselOne = large ? shuffle(slice(photos, 0, 3))
                            : shuffle(slice(photos, 0, 4));
                        const carouselTwo = large ? shuffle(slice(photos, 3, 6))
                            : shuffle(slice(photos, 4, 8));
                        const carouselThree = large ? shuffle(slice(photos, 6, 9))
                            : shuffle(slice(photos, 8, 12));
                        const carouselFour = large ? shuffle(slice(photos, 9, 12))
                            : shuffle(slice(photos, 0, 4));
                        const numberOfCarousels = large ? [carouselOne, carouselTwo, carouselThree, carouselFour]
                            : [carouselOne, carouselTwo, carouselThree];

                        return <div key={index} className={'carousels_wrapper'}>
                            {numberOfCarousels.map((carousel, i) => {
                                return <div key={i} className={'carousel_wrapper'}>
                                    {this.carousel(carousel, eventName, i)}
                                </div>
                            })}
                        </div>
                    })}
                </div>
            </Section>
        )
    };
}

const mapStateToProps = state => {
    const { mood, windowWidthSize } = state.mainReducer;
    const { large } = windowWidthSize;

    return {
        mood,
        large
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: photoObj => dispatch(setPhoto(photoObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mood);
