import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import TopCarousel from "../../sections/TopCarousel/TopCarousel";
import { setPhoto } from '../../store/actions/mainActions';
import Mood from "../../sections/Mood/Mood";
import backPhoto1 from '../../assest/img/background/crop1.jpg';
import backPhoto2 from '../../assest/img/background/crop2.jpg';
import PopUpImg from "../../components/PopUpPhoto";
import { Slide } from "react-reveal";
import './style.scss';

class TopLayout extends Component {

    render() {
        const { windowHeight, windowScrollY, centerPhotoItem, setPhoto, clients, topCarousel } = this.props;
        let height10vh = windowHeight / 10;
        const carouselExit = windowScrollY > (windowHeight - height10vh * 2.5);

        return (
            <div className="top_layout">
                {!carouselExit && <TopCarousel topCarousel={topCarousel}/>}
                <OurServices/>
                <div className={'photo'}>
                    <img src={backPhoto1} alt={'backPhoto'} className={'backPhoto1'}/>
                </div>
                <Mood/>
                <div className={'clear'}/>
                <Clients clients={clients}/>
                <div className={'photo'}>
                    <img src={backPhoto2} alt={'backPhoto'} className={'backPhoto2'}/>
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
