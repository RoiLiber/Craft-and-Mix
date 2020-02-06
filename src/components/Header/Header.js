import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../../assets/icon/logos/Crift&Mix-black logo.svg';
import logoOneLine from '../../assets/icon/logos/Crift&Mix-black logo_v2.svg';
import { openAboutUsSection, setPhotos } from '../../store/actions/mainActions';
import { Slide } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import Menu from '../../components/Menu';
import { Link, animateScroll as scroll } from "react-scroll";
import {
    toggleMenu,
    setWindowWidth,
    setWindowHeight,
    reportWindowScrollTopY
} from '../../store/actions/mainActions';
import './style.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shrinkHeader: false,
            clickedSection: false,
            selectedSection: '',
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.reportWindowSize);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.reportWindowSize);
    }

    reportWindowSize = () => {
        const { large, openMenu } = this.props;
        const { setWindowWidth, setWindowHeight } = this.props;

        large && openMenu && this.toggleMenu();
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight)
    };

    handleScroll = () => {
        const { large, larger, windowHeight, windowScrollY, reportWindowScrollTopY, openAboutUsSection } = this.props;
        const { clickedSection } = this.state;
        let height10vh = windowHeight / 10;
        const height50vh = windowHeight / 2 - height10vh * 2;
        const selectedSection = windowScrollY >= height50vh && windowScrollY < height50vh * 3
            ? 'ourServices'
            : windowScrollY >= height50vh * 3 && windowScrollY < height50vh * 6
                ? 'mood'
                : windowScrollY >= height50vh * 6 && windowScrollY < height50vh * 8
                    ? 'clients'
                    : windowScrollY >= height50vh * 8
                        ? 'contactUs'
                        : '';

        !clickedSection && this.setState({ selectedSection });
        if (windowScrollY > (windowHeight - height10vh * 2.5) && (!large && !larger)) {
            this.setState({ shrinkHeader: true });
        } else {
            this.setState({ shrinkHeader: false });
        }
        windowScrollY > (windowHeight - height10vh * 2.5) && openAboutUsSection(false);
        reportWindowScrollTopY(window.scrollY)
    };

    clickedSection = index => {
        const { setPhotos } = this.props;
        let  selectedSection = '';

        switch (index) {
            case 0: {
                selectedSection = 'ourServices';
                break
            }
            case 1: {
                selectedSection = 'mood';
                break
            }
            case 2: {
                selectedSection = 'clients';
                break
            }
            case 3: {
                selectedSection = 'contactUs';
                break
            }
            default: {
                selectedSection = ''
            }
        }
        this.setState({ clickedSection: true });
        setPhotos(false);
        setTimeout(() => {
            this.setState({ clickedSection: false, selectedSection });
        }, 1000)
    };

    toggleMenu = () => {
        const { openMenu, toggleMenu } = this.props;

        toggleMenu(!openMenu)
    };

    render() {
        const { shrinkHeader, selectedSection } = this.state;
        const { menuList, large, larger, small, openMenu, windowScrollY, windowHeight, iPhone8ScrollEnd, iPhoneXScrollEnd } = this.props;
        const scrollEnd = windowHeight < 700 ? iPhone8ScrollEnd : iPhoneXScrollEnd;

        return (
            <div className={shrinkHeader && openMenu ? 'header sm background' : shrinkHeader ? 'header sm' : 'header'}>
                {windowScrollY > scrollEnd && !large ? '' : <div className={'header_logo'}>
                    <img src={shrinkHeader ? logoOneLine : logo} alt={'logo'}/>
                </div>}
                <div className={`menu_button ${openMenu ? 'menu_animation' : ''}`}>
                    {large || larger
                        ?   menuList.map((item, index) => {
                            return <Link
                                key={index}
                                className={
                                    `element_link 
                                    menu_list_item 
                                    ${selectedSection === item.elementName ? 'selected' : ''}`
                                }
                                activeClass="active"
                                to={item.elementName}
                                spy={true}
                                smooth={true}
                                offset={small ? -20 : -60}
                                duration={900}
                                onClick={() => this.clickedSection(index)}
                                onSetActive={() => {}}
                            >
                                <span className={'menu_list_item_text'}>{item.text}</span>
                                    {selectedSection === item.elementName &&
                                    <Slide left duration={700}>
                                        <span className={'menu_list_item_line'}/>
                                    </Slide>
                                    }
                            </Link>
                        })
                        :   windowScrollY > scrollEnd
                            ? <span className={'up'} onClick={() => scroll.scrollToTop()}>
                                <Pulse forever>
                                    <i className="fas fa-angle-up"/>
                                </Pulse>
                            </span>
                            : <i className={`fas fa-ellipsis-h`} onClick={() => this.toggleMenu()}/>
                    }
                </div>
                {(!large && !larger) && <Menu className={shrinkHeader ? 'menu sm' : 'menu'} toggleMenu={this.toggleMenu}/>}
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { openMenu, menuList, windowHeight, windowWidthSize, windowScrollY, medium, iPhone8ScrollEnd, iPhoneXScrollEnd } = state.mainReducer;
    const { large, larger, small } = windowWidthSize;

    return {
        openMenu,
        large,
        larger,
        small,
        medium,
        menuList,
        windowHeight,
        windowScrollY,
        iPhone8ScrollEnd,
        iPhoneXScrollEnd
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: bool => dispatch(toggleMenu(bool)),
        setWindowWidth: width => dispatch(setWindowWidth(width)),
        setWindowHeight: height => dispatch(setWindowHeight(height)),
        reportWindowScrollTopY: scroll => dispatch(reportWindowScrollTopY(scroll)),
        openAboutUsSection: boll => dispatch(openAboutUsSection(boll)),
        setPhotos: bool => dispatch(setPhotos(bool)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
