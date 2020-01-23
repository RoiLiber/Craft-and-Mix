import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-scroll";
import './style.scss';

class SectionHeadLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidthMobile: ''
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.reportWindowSize);
        this.setWindowSizeMobile()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.reportWindowSize);
    }

    reportWindowSize = () => {
        this.setWindowSizeMobile()
    };

    setWindowSizeMobile = () => {
        const { windowWidthSm } = this.props;
        let width = window.innerWidth;
        const mobile = width < windowWidthSm;

        this.setState({ windowWidthMobile: mobile })
    };

    render() {
        const { text, textColor, color, elementName, backgroundColorGold, toggleMenu } = this.props;
        const { windowWidthMobile } = this.state;

        return (
            <Link
                className={'element_link'}
                activeClass="active"
                to={elementName}
                spy={true}
                smooth={true}
                offset={windowWidthMobile ? -35 : -80}
                duration={900}
                onClick={toggleMenu ? () => toggleMenu() : ''}
                onSetActive={() => {}}
            >
                <div className={backgroundColorGold ? 'head_line goldBackground' : 'head_line'}>
                    <div className={'text'}>
                        <span className={color}/>
                        <p className={textColor}>{text}</p>
                        <span className={color}/>
                    </div>
                    <div className={'arrow_down'}>
                        <i className={`fas fa-angle-down ${color}`}/>
                    </div>
                </div>
            </Link>
        )
    };
}

const mapStateToProps = state => {
    const { windowWidthSm } = state.mainReducer;
    return {
        windowWidthSm
    };
};

export default connect(mapStateToProps)(SectionHeadLine);


