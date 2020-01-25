import React, { Component } from 'react';
import { connect } from "react-redux";
import AboutUs from "../../sections/AboutUs";
import Footer from "../../components/Footer";
import OurServices from "../../sections/OurServices";
import Customers from "../../sections/Customers";
import ContactUs from "../../sections/ContactUs";
import Section from "../../components/Section";
import './style.scss';

class TopLayout extends Component {

    render() {
        return (
            <div className="top_layout">
                <AboutUs/>
                <OurServices/>
                <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'} addHeart/>
                <Customers/>
                <ContactUs/>
                <Footer/>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(TopLayout);
