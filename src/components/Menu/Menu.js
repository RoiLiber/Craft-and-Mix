import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Slide, Fade  } from 'react-reveal';
import { toggleMenu } from "../../store/actions/mainActions";
import { Events, animateScroll as scroll, scrollSpy, } from 'react-scroll';
import SectionHeadLine from "../SectionHeadLine";
import './style.scss';

class Menu extends Component {

    componentDidMount = () => {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    };

    scrollTo = i => {
        scroll.scrollTo(i);
    };

    componentWillUnmount = () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };

    clickedMenu = index => {
        const { toggleMenu } = this.props;
        const scrollTo = index === 0 ? 568 : index === 5 ? 754 : 0;
        this.scrollTo(scrollTo);
        toggleMenu(false)
    };

    render() {
        const { menuList, openMenu } = this.props;

        return (
            <Fragment>
            {
                openMenu
                ? <Slide right>
                    <div className="menu">
                        {menuList.map((item, index) => {
                            return <Fade duration={2500}>
                                <span key={item} onClick={() => this.clickedMenu(index)}>
                                <SectionHeadLine
                                    text={item}
                                    textColor={'black'}
                                    arrowColor={'gold'}
                                    lineColor={'gold'}
                                />
                                </span>
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
