import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import TopCarousel from "../../sections/TopCarousel";
import { setPhotos } from '../../store/actions/mainActions';
import Mood from "../../sections/Mood/Mood";
import PopUpImg from "../../components/PopUpPhoto";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ParallaxPattern from "../../components/ParallaxPattern";
import { Slide } from "react-reveal";
import './style.scss';

class TopLayout extends Component {

    setPopUp = photos => {
        const { setPhotos } = this.props;

        return <Slide bottom duretion={500}>
            <div className={'pop_up_wrapper'} onClick={() => setPhotos(false)}>
                <PopUpImg photosObj={photos}/>
            </div>
        </Slide>
    };

    render() {
        const { centerPhotoItem, clients, topCarousel, windowHeight, large, windowScrollY } = this.props;
        let height10vh = windowHeight / 10;
        let carouselExit = windowScrollY > (windowHeight - height10vh * 2.5) && (!large);

        return (
            <ParallaxProvider>
                <div className="top_layout">
                    <Parallax className="parallax_carousel" y={[-60, 60]} tagOuter="figure">
                        {carouselExit ? <div className={'clear_carousel'}/> : <TopCarousel topCarousel={topCarousel}/>}
                    </Parallax>
                    <OurServices/>
                    <ParallaxPattern/>
                    <Mood/>
                    <ParallaxPattern/>
                    <Clients clients={clients}/>
                    <ParallaxPattern/>
                    {centerPhotoItem && this.setPopUp(centerPhotoItem)}
                    <Footer/>
                </div>
            </ParallaxProvider>
        )
    };
}

const mapStateToProps = state => {
    const { windowScrollY, windowHeight, centerPhotoItem, topCarousel, clients, windowWidthSize } = state.mainReducer;
    const { large } = windowWidthSize;

    return {
        windowScrollY,
        windowHeight,
        centerPhotoItem,
        topCarousel,
        clients,
        large
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhotos: photoObj => dispatch(setPhotos(photoObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopLayout);
