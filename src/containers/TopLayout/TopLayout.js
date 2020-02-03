import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import TopCarousel from "../../sections/TopCarousel/TopCarousel";
import { setPhotos } from '../../store/actions/mainActions';
import Mood from "../../sections/Mood/Mood";
import backPhoto from '../../assets/img/background/Crift&Mix-pattern.png';
import PopUpImg from "../../components/PopUpPhoto";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Slide, Fade } from "react-reveal";
import './style.scss';

class TopLayout extends Component {

    parallax = photo => {
        return <div className={'photo'}>
            <Parallax className="parallax" y={[-30, 30]} tagOuter="figure">
                <img src={photo} alt={'backPhoto'}/>
            </Parallax>
        </div>
    };

    parallaxBackground = photo => {
        return <div className={'mood_parallax_wrapper'}>
            <Parallax className="parallax_wrapper" y={[-30, 30]} tagOuter="figure">
                <img src={photo} alt={'backPhoto'}/>
            </Parallax>
            <Mood/>
        </div>
    };

    render() {
        const { centerPhotoItem, setPhotos, clients, topCarousel, windowHeight, large, windowScrollY } = this.props;
        let height10vh = windowHeight / 10;
        let carouselExit = windowScrollY > (windowHeight - height10vh * 2.5) && (!large);

        return (
            <ParallaxProvider>
                <div className="top_layout">
                    <Parallax className="parallax_carousel" y={[-60, 60]} tagOuter="figure">
                        {carouselExit ? <div className={'clear_carousel'}/> : <TopCarousel topCarousel={topCarousel}/>}
                    </Parallax>
                    <OurServices/>
                    {this.parallax(backPhoto)}
                    {this.parallaxBackground(backPhoto)}
                    <div className={'clear'}/>
                    <Clients clients={clients}/>
                    {this.parallax(backPhoto)}
                    {centerPhotoItem && <Slide bottom duretion={500}>
                        <div className={'pop_up_wrapper'} onClick={() => setPhotos(false)}>
                            <PopUpImg photosObj={centerPhotoItem}/>
                        </div>
                    </Slide>}
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
