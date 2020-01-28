import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.scss';

class BackgroundLayout extends Component {

    render() {
        const { windowHeight, windowScrollY } = this.props;
        const height10vh = windowHeight / 10;
        const scrollAtTop = windowScrollY > (windowHeight - height10vh * 3);

        return (
            <div className="background_layout">
                <div className={'background'}/>
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
