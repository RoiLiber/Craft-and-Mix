import React, { Component, Fragment } from 'react';
import './style.scss';
import SectionHeadLine from "../../components/SectionHeadLine";
import { connect } from "react-redux";
import PopUpImg from '../../components/UI/PopUpPhoto/PopUpPhoto';
import backgroundImage from '../../assest/img/logos/G.png';
import { random } from 'lodash';
import Carousel from "../../components/Carousel";

class Mood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setWindowSizeWide: '',
            setWindowSizeMd: '',
            windowWidthSm: '',
            isPopUpPhoto: false,
            popPhoto: '',
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.reportWindowSize);
        this.setWindowSizeWide()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.reportWindowSize);
    }

    reportWindowSize = () => {
        this.setWindowSizeWide()
    };

    setWindowSizeWide = () => {
        const { windowWidthLr, windowWidthMd, windowWidthSm } = this.props;
        let width = window.innerWidth;
        const windowSizeSm = width < 0 || width > (windowWidthSm + 100);
        const windowSizeMd = width > windowWidthMd;
        const windowSizeWide = width > (windowWidthLr + 300);

        this.setState({
            setWindowSizeWide: windowSizeWide,
            windowSizeMd: windowSizeMd,
            windowWidthSm: windowSizeSm
        })
    };

    popUp = item => {
        const { isPopUpPhoto } = this.state;

        this.setState({ isPopUpPhoto: !isPopUpPhoto, popPhoto: item })
    };

    delay = () => {
        return random(5000, 9000);
    };

    addCarousels = array => {
        const { windowSizeMd, setWindowSizeWide } = this.state;

        if (setWindowSizeWide) {
            return <Fragment>
                <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
                <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
            </Fragment>
        } else if (windowSizeMd && !setWindowSizeWide) {
            return <Carousel carouselArray={array} popUp={this.popUp} delay={this.delay()}/>
        }
    };

    render() {
        const { popPhoto, isPopUpPhoto, windowWidthSm } = this.state;
        const { mood } = this.props;

        return (
            <div className={'mood_section'} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className={'center_carousels'}>
                    <div className={'carousels_wrapper'}>
                        <Carousel carouselArray={mood} popUp={this.popUp} delay={this.delay()}/>
                        {this.addCarousels(mood)}
                    </div>
                    {windowWidthSm && <div className={'carousels_wrapper'}>
                        <Carousel carouselArray={mood} popUp={this.popUp} delay={this.delay()}/>
                        {this.addCarousels(mood)}
                    </div>}
                </div>
                {isPopUpPhoto && <PopUpImg photo={popPhoto.img} onClick={() => this.popUp()}/>}
                <SectionHeadLine
                    text={'Mood'}
                    textColor={'black'}
                    color={'gold'}
                    elementName={'mood'}
                    addHeart
                />
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { mood, windowWidthSm, windowWidthMd, windowWidthLr } = state.mainReducer;
    return {
        mood,
        windowWidthSm,
        windowWidthMd,
        windowWidthLr
    };
};

export default connect(mapStateToProps)(Mood);

const contact = () => {
    return <Fragment>
        <a href={'https://www.instagram.com/craftnmix/'} target={'_blank'}>
            <i className="fab fa-instagram"/>
        </a>
        <a href={'https://www.facebook.com/asafamir1'} target={'_blank'}>
            <i className="fab fa-facebook-square"/>
        </a>
        <a href={'#'} target={'_blank'}>
            <i className="fas fa-phone-square-alt"/>
        </a>
        <a href={'#'} target={'_blank'}>
            <i className="far fa-envelope"/>
        </a>
    </Fragment>
}
