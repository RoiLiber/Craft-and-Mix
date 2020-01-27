import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-scroll";
import './style.scss';

class SectionHeadLine extends Component {

    render() {
        const { text, textColor, color, elementName, backgroundColorGold, toggleMenu, addHeart, addHeartTop, small } = this.props;
        const clients = elementName === 'clients';
        const contact = elementName === 'contactUs';

        return (
            <Link
                className={`element_link`}
                activeClass="active"
                to={elementName}
                spy={true}
                smooth={true}
                offset={clients ? 170 : contact ? 570 : small ? -35 : -80}
                duration={900}
                onClick={toggleMenu ? () => toggleMenu() : null}
                onSetActive={() => {}}
            >
                <div className={backgroundColorGold ? 'head_line goldBackground' : 'head_line'}>
                    <div className={'text'}>
                        <span className={color}/>
                        <p className={textColor}>{text}</p>
                        <span className={color}/>
                    </div>
                    {(addHeart && !addHeartTop) && <i className="far fa-heart"/>}
                    <div className={'arrow_down'}>
                        {addHeartTop ? <i className="far fa-heart"/> : <i className={`fas fa-angle-down ${color}`}/>}
                    </div>
                </div>
            </Link>
        )
    };
}

const mapStateToProps = state => {
    const { windowWidthSize } = state.mainReducer;
    const { small } = windowWidthSize;

    return {
        small
    };
};

export default connect(mapStateToProps)(SectionHeadLine);


