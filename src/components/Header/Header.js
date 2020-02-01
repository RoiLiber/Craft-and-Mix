import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../../assets/icon/Crift&Mix-black logo.svg';
import logoWhite from '../../assets/icon/Crift&Mix_W.svg';
import logoOneLine from '../../assets/icon/Crift&Mix-black logo_v2.svg';
import { setPhoto } from '../../store/actions/mainActions';
import { Slide } from 'react-reveal';
import Menu from '../../components/Menu';
import { Link } from "react-scroll";
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
        const { setWindowWidth, setWindowHeight } = this.props;

        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight)
    };

    handleScroll = () => {
        const { large, larger, windowHeight, windowScrollY, reportWindowScrollTopY } = this.props;
        const { clickedSection } = this.state;
        let height10vh = windowHeight / 10;
        const height50vh = windowHeight / 2 - height10vh * 2;

        const selectedSection = windowScrollY >= height50vh && windowScrollY < height50vh * 3
            ? 'ourServices'
            : windowScrollY >= height50vh * 3 && windowScrollY < height50vh * 6
                ? 'mood'
                : windowScrollY >= height50vh * 6 && windowScrollY < height50vh * 8.5
                    ? 'clients'
                    : windowScrollY >= height50vh * 8.5
                        ? 'contactUs'
                        : '';

        !clickedSection && this.setState({ selectedSection });
        if (windowScrollY > (windowHeight - height10vh * 2) && (!large && !larger)) {
            this.setState({ shrinkHeader: true });
        } else {
            this.setState({ shrinkHeader: false });
        }
        reportWindowScrollTopY(window.scrollY)
    };

    clickedSection = index => {
        const { setPhoto } = this.props;
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
        setPhoto(false);
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
        const { menuList, large, larger, small, openMenu } = this.props;

        return (
            <div className={shrinkHeader && openMenu ? 'header sm background' : shrinkHeader ? 'header sm' : openMenu ? 'header background': 'header'}>
                <div className={'header_logo'}>
                    <img src={shrinkHeader ? logoOneLine : large || openMenu ? logo : logoWhite} alt={'logo'}/>
                </div>
                <div className={`menu_button ${openMenu ? 'menu_animation' : ''}`} onClick={large ? null : () => this.toggleMenu()}>
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
                                offset={small ? -10 : -60}
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
                        :   <i className={`fas fa-ellipsis-h`}/>
                    }
                </div>
                {(!large && !larger) && <Menu className={shrinkHeader ? 'menu sm' : 'menu'} toggleMenu={this.toggleMenu}/>}
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { openMenu, menuList, windowHeight, windowWidthSize, windowScrollY, medium } = state.mainReducer;
    const { large, larger, small } = windowWidthSize;

    return {
        openMenu,
        large,
        larger,
        small,
        medium,
        menuList,
        windowHeight,
        windowScrollY
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: bool => dispatch(toggleMenu(bool)),
        setWindowWidth: width => dispatch(setWindowWidth(width)),
        setWindowHeight: height => dispatch(setWindowHeight(height)),
        reportWindowScrollTopY: scroll => dispatch(reportWindowScrollTopY(scroll)),
        setPhoto: bool => dispatch(setPhoto(bool)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
