import React, { Component } from 'react';
import { connect } from "react-redux";
import AboutUs from "../../sections/AboutUs";
import Footer from "../../sections/ContactUs";
import OurServices from "../../sections/OurServices";
import Clients from "../../sections/Clients";
import Section from "../../components/Section";
import './style.scss';

class TopLayout extends Component {

    render() {
        return (
            <div className="top_layout">
                <AboutUs/>
                <OurServices/>
                <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'} addHeart/>
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
