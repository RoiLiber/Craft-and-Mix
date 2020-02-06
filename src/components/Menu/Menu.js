import React, { Component } from 'react';
import { connect } from "react-redux";
import { Slide, Fade } from 'react-reveal';
import { toggleMenu } from "../../store/actions/mainActions";
import SectionHeadLine from "../SectionHeadLine";
import './style.scss';

class Menu extends Component {

    render() {
        const { menuList, openMenu, toggleMenu } = this.props;

        if (openMenu) {
            return <Slide right duration={1100}>
                <div className={"menu"}>
                    {menuList.map((item, index) => {
                        return <Fade duration={2500} key={index}>
                            <SectionHeadLine
                                toggleMenu={toggleMenu}
                                text={item.text}
                                textColor={'white'}
                                color={'gold'}
                                elementName={item.elementName}
                                backgroundColorGold={true}
                            />
                        </Fade>
                    })}
                </div>
            </Slide>
        } else { return null }
    };
}

const mapStateToProps = state => {
    const { menuList, openMenu } = state.mainReducer;
    return {
        menuList,
        openMenu
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: bool => dispatch(toggleMenu(bool)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
