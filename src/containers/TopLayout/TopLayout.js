import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import TopCarousel from "../../sections/TopCarousel/TopCarousel";
import { setPhoto } from '../../store/actions/mainActions';
import Mood from "../../sections/Mood/Mood";
import backPhoto from '../../assets/img/background/Crift&Mix-pattern.png';
import PopUpImg from "../../components/PopUpPhoto";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Slide } from "react-reveal";
import './style.scss';

class TopLayout extends Component {

    parallax = photo => {
        return <Parallax className="parallax" y={[-30, 30]} tagOuter="figure">
            <img src={photo} alt={'backPhoto'}/>
        </Parallax>
    };

    render() {
        const { centerPhotoItem, setPhoto, clients, topCarousel, windowHeight, small, medium, windowScrollY } = this.props;
        let height10vh = windowHeight / 10;
        let carouselExit = windowScrollY > (windowHeight - height10vh * 2.5) && (small || medium);

        return (
            <ParallaxProvider>
                <div className="top_layout">
                    <Parallax className="parallax_carousel" y={[-60, 60]} tagOuter="figure">
                        {carouselExit ? <div className={'clear_carousel'}/> : <TopCarousel topCarousel={topCarousel}/>}
                    </Parallax>
                    <OurServices/>
                    <div className={'photo'}>
                        {this.parallax(backPhoto)}
                    </div>
                    <Mood/>
                    <div className={'clear'}/>
                    <Clients clients={clients}/>
                    <div className={'photo'}>
                        {this.parallax(backPhoto)}
                    </div>
                    {centerPhotoItem && <Slide bottom duretion={500}>
                        <div className={'pop_up_wrapper'} onClick={() => setPhoto(false)}>
                            <PopUpImg photoObj={centerPhotoItem}/>
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
    const { small, medium } = windowWidthSize;

    return {
        windowScrollY,
        windowHeight,
        centerPhotoItem,
        topCarousel,
        clients,
        small,
        medium
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: photoObj => dispatch(setPhoto(photoObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopLayout);
