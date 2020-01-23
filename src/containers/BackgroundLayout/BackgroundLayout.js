import React, { Component } from 'react';
import { connect } from "react-redux";
import CarouselSection from "../../sections/CarouselSection/CarouselSection";
import Mood from "../../sections/Mood/Mood";
import './style.scss';

class BackgroundLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselSection: true,
            moodSection: false
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

        if (scrollTopY > 680) {
            this.setState({ carouselSection: false, moodSection: true });
        } else {
            this.setState({ carouselSection: true, moodSection: false });
        }
    };

    render() {
        const { carouselSection, moodSection } = this.state;

        return (
            <div className="background_layout">
                {carouselSection && <CarouselSection/>}
                {moodSection && <Mood/>}
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(BackgroundLayout);
