import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Slide, Fade  } from 'react-reveal';
import { toggleMenu } from "../../store/actions/mainActions";
import SectionHeadLine from "../SectionHeadLine";
import './style.scss';

class Menu extends Component {

    render() {
        const { menuList, openMenu, toggleMenu, moveToTop } = this.props;

        return (
            <Fragment>
            {
                openMenu
                ? <Slide right duration={1500}>
                    <div className={moveToTop ? "menu moveToTop" : "menu"}>
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
                : null
            }
            </Fragment>
        )
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
