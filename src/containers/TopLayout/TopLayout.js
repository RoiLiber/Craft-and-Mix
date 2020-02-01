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

    parallax = photo => {
        return <Parallax className="parallax" y={[-30, 30]} tagOuter="figure">
            <img src={photo} alt={'backPhoto'}/>
        </Parallax>
    };

    render() {
        const { centerPhotoItem, setPhoto, clients, topCarousel } = this.props;

        return (
            <ParallaxProvider>
                <div className="top_layout">
                    <Parallax className="parallax_carousel" y={[-60, 60]} tagOuter="figure">
                        <TopCarousel topCarousel={topCarousel}/>
                    </Parallax>
                    <OurServices/>
                    <div className={'photo'}>
                        {this.parallax(backPhoto1)}
                    </div>
                    <Mood/>
                    <div className={'clear'}/>
                    <Clients clients={clients}/>
                    <div className={'photo'}>
                        {this.parallax(backPhoto2)}
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
    const { windowScrollY, windowHeight, centerPhotoItem, topCarousel, clients, small } = state.mainReducer;

    return {
        windowScrollY,
        windowHeight,
        centerPhotoItem,
        topCarousel,
        clients,
        small
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: photoObj => dispatch(setPhoto(photoObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopLayout);
