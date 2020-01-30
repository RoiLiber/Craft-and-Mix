import React, { Component } from 'react';
import { connect } from "react-redux";
import { random, shuffle, slice } from 'lodash';
import Carousel from "../../components/Carousel";
import './style.scss';
import Section from "../../components/Section";
import {setPhoto } from "../../store/actions/mainActions";

class Mood extends Component {

    popUp = item => {
        const { setPhoto } = this.props;
        setPhoto(item)
    };

    delay = () => {
        return random(5000, 25000);
    };

    render() {
        const { mood, large, larger } = this.props;

        return (
            <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'} addHeart>
                <div className={'mood_section'}>
                        <p>Some mood Photos from our Events</p>
                    {mood.map((item, index) => {
                        const carouselArray = shuffle(item.photos);
                        const eventName = item.eventName;

                        return <div key={index} className={'carousels_wrapper'}>
                            <div className={'carousel_wrapper'}>
                                <Carousel
                                    carouselArray={carouselArray}
                                    popUp={this.popUp}
                                    delay={this.delay()}
                                    eventName={eventName}
                                />
                            </div>
                            <div className={'carousel_wrapper'}>
                                <Carousel
                                    carouselArray={carouselArray}
                                    popUp={this.popUp}
                                    delay={this.delay()}
                                    eventName={eventName}
                                />
                            </div>
                            <div className={'carousel_wrapper'}>
                                <Carousel
                                    carouselArray={carouselArray}
                                    popUp={this.popUp}
                                    delay={this.delay()}
                                    eventName={eventName}
                                />
                            </div>
                            {(large || larger) && <div className={'carousel_wrapper'}>
                                <Carousel
                                    carouselArray={carouselArray}
                                    popUp={this.popUp}
                                    delay={this.delay()}
                                    eventName={eventName}
                                />
                            </div>}
                        </div>
                    })}
                </div>
            </Section>
        )
    };
}

const mapStateToProps = state => {
    const { mood, windowWidthSize } = state.mainReducer;
    const { small, medium, large, larger } = windowWidthSize;

    return {
        mood,
        small,
        medium,
        large,
        larger
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: photoObj => dispatch(setPhoto(photoObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mood);
