import React, { Component } from 'react';
import { connect } from "react-redux";
import AboutUsSection from "../../sections/AboutUsSection";
import './style.scss';
import Footer from "../../components/Footer";

class TopLayout extends Component {

    render() {
        return (
            <div className="top_layout">
                {/*<div className={'clear_top'}/>*/}
                <AboutUsSection/>
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
