import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import TopCarousel from "../../sections/TopCarousel/TopCarousel";
import { setPhoto } from '../../store/actions/mainActions';
import Mood from "../../sections/Mood/Mood";
import backPhoto1 from '../../assets/img/background/backPhoto1.jpeg';
import backPhoto2 from '../../assets/img/background/backPhoto2.jpeg';
import PopUpImg from "../../components/PopUpPhoto";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Slide } from "react-reveal";
import './style.scss';

class TopLayout extends Component {

    parallax = (photo, num) => {
        return <ParallaxProvider>
            <Parallax className="parallax" y={[-30, 30]} tagOuter="figure">
                <img src={photo} alt={'backPhoto'}
                        className={num === 1 ? 'backPhoto backPhoto1' : 'backPhoto backPhoto2'}/>
            </Parallax>
        </ParallaxProvider>
    };

    render() {
        const { windowHeight, windowScrollY, centerPhotoItem, setPhoto, clients, topCarousel } = this.props;
        let height10vh = windowHeight / 10;
        const carouselExit = windowScrollY > (windowHeight - height10vh * 2.5);

        return (
            <div className="top_layout">
                {!carouselExit && <TopCarousel topCarousel={topCarousel}/>}
                <OurServices/>
                <div className={'photo'}>
                    {this.parallax(backPhoto1, 1)}
                </div>
                <Mood/>
                <div className={'clear'}/>
                <Clients clients={clients}/>
                <div className={'photo'}>
                    {this.parallax(backPhoto2, 2)}
                </div>
                {centerPhotoItem && <Slide bottom duretion={500}>
                    <div className={'pop_up_wrapper'} onClick={() => setPhoto(false)}>
                        <PopUpImg photoObj={centerPhotoItem}/>
                    </div>
                </Slide>}
                <Footer/>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { windowScrollY, windowHeight, centerPhotoItem, topCarousel, clients } = state.mainReducer;

    return {
        windowScrollY,
        windowHeight,
        centerPhotoItem,
        topCarousel,
        clients
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: photoObj => dispatch(setPhoto(photoObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopLayout);
