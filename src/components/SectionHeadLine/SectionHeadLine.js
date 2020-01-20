import React, { Component } from 'react';
import './style.scss';

class SectionHeadLine extends Component {

    render() {
        const { text, textColor, arrowColor, lineColor, scrollTo, scroll } = this.props;
        return (
            <div className={'head_line'}>
                <div className={'text'}>
                    <span className={lineColor}/>
                    <p className={textColor}>{text}</p>
                    <span className={lineColor}/>
                </div>
                <div className={`arrow_down ${arrowColor}`} onClick={() => scrollTo(scroll)}>
                    <i className="fas fa-angle-down"/>
                </div>
            </div>

        )
    };
}

export default SectionHeadLine;
