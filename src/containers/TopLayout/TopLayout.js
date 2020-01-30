import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import TopCarousel from "../../sections/TopCarousel/TopCarousel";
import { setPhoto } from '../../store/actions/mainActions';
import Mood from "../../sections/Mood/Mood";
import photo2 from '../../assest/img/logos/wsd.jpg';
import photo from '../../assest/img/logos/WhatsApp.jpg';
import PopUpImg from "../../components/UI/PopUpPhoto/PopUpPhoto";
import './style.scss';
import { Slide } from "react-reveal";

class TopLayout extends Component {

    render() {
        const { windowHeight, windowScrollY, centerPhotoItem, setPhoto } = this.props;
        let height10vh = windowHeight / 10;
        const carouselExit = windowScrollY > (windowHeight - height10vh * 2.5);

        return (
            <div className="top_layout">
                {!carouselExit && <TopCarousel/>}
                <OurServices/>
                <div className={'photo'}>
                    <img src={photo2} alt={'photo'}/>
                </div>
                <Mood/>
                <div className={'clear'}/>
                <Clients/>
                <div className={'photo'}>
                    <img src={photo} alt={'photo'}/>
                </div>
                {centerPhotoItem &&
                <Slide bottom duretion={500}>
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
    const { windowScrollY, windowHeight, centerPhotoItem } = state.mainReducer;

    return {
        windowScrollY,
        windowHeight,
        centerPhotoItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhoto: photoObj => dispatch(setPhoto(photoObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopLayout);
