import React, { Component } from 'react';
import { connect } from "react-redux";
import AboutUs from "../../sections/AboutUs";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import TopCarousel from "../../sections/TopCarousel/TopCarousel";
import './style.scss';
import Mood from "../../sections/Mood/Mood";
import photo from '../../assest/img/logos/WhatsApp.jpg';

class TopLayout extends Component {

    render() {
        const { windowHeight, windowScrollY } = this.props;
        let height10vh = windowHeight / 10;
        const carouselExit = windowScrollY > (windowHeight - height10vh * 3);
        return (
            <div className="top_layout">
                {!carouselExit && <TopCarousel/>}
                <AboutUs/>
                <OurServices/>
                <div className={'clear'}/>
                <Mood/>
                <div className={'clear'}/>
                <Clients/>
                <div className={'photo'}>
                    <img src={photo} alt={'photo'}/>
                </div>
                <Footer/>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { windowScrollY, windowHeight } = state.mainReducer;
    return {
        windowScrollY,
        windowHeight
    };
};

export default connect(mapStateToProps)(TopLayout);
