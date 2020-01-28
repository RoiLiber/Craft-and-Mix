import React, { Component } from 'react';
import { connect } from "react-redux";
import AboutUs from "../../sections/AboutUs";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import Section from "../../components/Section";
import './style.scss';
import Mood from "../../sections/Mood/Mood";

class TopLayout extends Component {

    render() {
        return (
            <div className="top_layout">
                <AboutUs/>
                {/*<div className={'parallax_w parallax'}/>*/}
                <OurServices/>
                <Mood/>
                <Clients/>
                <Footer/>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { mood } = state.mainReducer;
    return {
        mood
    };
};

export default connect(mapStateToProps)(TopLayout);
