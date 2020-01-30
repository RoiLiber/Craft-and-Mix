import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PopUpImg from '../../components/UI/PopUpPhoto/PopUpPhoto';
import { random, shuffle, slice } from 'lodash';
import Carousel from "../../components/Carousel";
import './style.scss';
import Section from "../../components/Section";

class Mood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPopUpPhoto: false,
            popPhoto: '',
        };
    }

    popUp = item => {
        const { isPopUpPhoto } = this.state;

        this.setState({ isPopUpPhoto: !isPopUpPhoto, popPhoto: item })
    };

    delay = () => {
        return random(5000, 25000);
    };

    // addCarousels = array => {
    //     const { larger, large } = this.props;
    //
    //     if (larger) {
    //         return <Fragment>
    //             <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
    //             <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
    //         </Fragment>
    //     } else if (large) {
    //         return <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
    //     }
    // };

    render() {
        const { popPhoto, isPopUpPhoto } = this.state;
        const { mood, small, medium, large, larger } = this.props;
        const eventsNum = small ? mood : slice(mood, 0, 3);

        return (
            <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'} addHeart>
                <div className={'mood_section'}>
                    {eventsNum.map((item, index) => {
                        const carouselArray = shuffle(item.photos);

                        return <div key={index} className={'carousels_wrapper'}>
                            <div className={'carousel_wrapper'}>
                                <Carousel carouselArray={carouselArray} popUp={this.popUp} delay={this.delay()}/>
                            </div>
                            <div className={'carousel_wrapper'}>
                                <Carousel carouselArray={carouselArray} popUp={this.popUp} delay={this.delay()}/>
                            </div>
                            <div className={'carousel_wrapper'}>
                                <Carousel carouselArray={carouselArray} popUp={this.popUp} delay={this.delay()}/>
                            </div>
                            {larger && <div className={'carousel_wrapper'}>
                                <Carousel carouselArray={carouselArray} popUp={this.popUp} delay={this.delay()}/>
                            </div>}
                        </div>
                    })}
                    {/*<div className={'center_carousels'}>*/}
                    {/*    <div className={'carousels_wrapper'}>*/}
                    {/*        <Carousel carouselArray={mood} popUp={this.popUp} delay={this.delay()}/>*/}
                    {/*        {this.addCarousels(mood)}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {isPopUpPhoto && <PopUpImg photo={popPhoto.img} onClick={() => this.popUp()}/>}
                    {/*<div className={'clear_white'}/>*/}
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

export default connect(mapStateToProps)(Mood);
