import React, { Component } from 'react';
import { connect } from "react-redux";
import CarouselSection from "../../sections/CarouselSection/CarouselSection";
import MoodSection from "../../sections/MoodSection/MoodSection";
import './style.scss';



class BackgroundLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselSection: true,
            contactUsSection: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        let scrollTopY = window.scrollY;
        if (scrollTopY > 585) {
            this.setState({ carouselSection: false, contactUsSection: true });
        } else {
            this.setState({ carouselSection: true, contactUsSection: false });
        }
    };

    render() {
        const { carouselSection, contactUsSection } = this.state;
        return (
            <div className="background_layout">
                {carouselSection && <CarouselSection/>}
                {contactUsSection && <MoodSection/>}
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(BackgroundLayout);
