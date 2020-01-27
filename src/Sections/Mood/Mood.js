import React, { Component, Fragment } from 'react';
import SectionHeadLine from "../../components/SectionHeadLine";
import { connect } from "react-redux";
import PopUpImg from '../../components/UI/PopUpPhoto/PopUpPhoto';
import backgroundImage from '../../assest/img/logos/G.png';
import { random } from 'lodash';
import Carousel from "../../components/Carousel";
import './style.scss';

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
        return random(5000, 8000);
    };

    addCarousels = array => {
        const { larger, large } = this.props;

        if (larger) {
            return <Fragment>
                <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
                <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
            </Fragment>
        } else if (large) {
            return <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
        }
    };

    render() {
        const { popPhoto, isPopUpPhoto } = this.state;
        const { mood } = this.props;

        return (
            <div className={'mood_section'} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className={'center_carousels'}>
                    <div className={'carousels_wrapper'}>
                        <Carousel carouselArray={mood} popUp={this.popUp} delay={this.delay()}/>
                        {this.addCarousels(mood)}
                    </div>
                </div>
                {isPopUpPhoto && <PopUpImg photo={popPhoto.img} onClick={() => this.popUp()}/>}
                <SectionHeadLine
                    text={'Mood'}
                    textColor={'black'}
                    color={'gold'}
                    elementName={'mood'}
                    addHeartTop
                    addHeart
                />
            </div>
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
