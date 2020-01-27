import React, { Component } from 'react';
import { connect } from "react-redux";
import TopCarousel from "../../sections/TopCarousel/TopCarousel";
import Mood from "../../sections/Mood/Mood";
import './style.scss';

class BackgroundLayout extends Component {

    render() {
        const { windowHeight, windowScrollY } = this.props;
        const height10vh = windowHeight / 10;
        const scrollAtTop = windowScrollY > (windowHeight - height10vh * 3);

        return (
            <div className="background_layout">
                {!scrollAtTop && <TopCarousel/>}
                {scrollAtTop && <Mood/>}
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { windowHeight, windowScrollY } = state.mainReducer;

    return {
        windowHeight,
        windowScrollY
    };
};

export default connect(mapStateToProps)(BackgroundLayout);
