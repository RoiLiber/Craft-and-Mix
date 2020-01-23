import React, { Component } from 'react';
import './style.scss';

class SectionHeadLine extends Component {

    render() {
        const { text, textColor, color } = this.props;

        return (
            <div className={'head_line'}>
                <div className={'text'}>
                    <span className={color}/>
                    <p className={textColor}>{text}</p>
                    <span className={color}/>
                </div>
                <div className={'arrow_down'}>
                    <i className={`fas fa-angle-down ${color}`}/>
                </div>
            </div>

        )
    };
}

export default SectionHeadLine;
