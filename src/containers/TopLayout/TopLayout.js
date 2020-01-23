import React, { Component } from 'react';
import { connect } from "react-redux";
import AboutUs from "../../sections/AboutUs";
import Footer from "../../components/Footer";
import OurServices from "../../sections/OurServices";
import Section from "../../components/Section";
import './style.scss';

class TopLayout extends Component {

    render() {
        return (
            <div className="top_layout">
                <AboutUs/>
                <OurServices/>
                <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'}/>
                {/*<div className={'mood_head_line'}/>*/}
                <div className={'test'}/>
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
