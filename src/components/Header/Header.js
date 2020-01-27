import React, { Component } from 'react';
import { connect } from "react-redux";
import Logo from '../UI/Logo/Logo';
import {
    toggleMenu,
    setWindowWidth,
    setWindowHeight,
    reportWindowScrollTopY
} from '../../store/actions/mainActions';
import { Slide } from 'react-reveal';
import Menu from '../../components/Menu';
import { Link } from "react-scroll";
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
        const selectedSection = windowScrollY >= 375 && windowScrollY < 720
            ? 'aboutUs'
            : windowScrollY >= 720 && windowScrollY < 1326
                ? 'OurServices'
                : windowScrollY >= 1326 && windowScrollY < 1700
                    ? 'mood'
                    : windowScrollY >= 1700 && windowScrollY < 2002
                        ? 'someHappyCustomers'
                        : windowScrollY >= 2002
                            ? 'contactUs'
                            : '';

        !clickedSection && this.setState({ selectedSection });
        if (windowScrollY > (windowHeight - height10vh * 3) && (!large && !larger)) {
            this.setState({ shrinkHeader: true });
        } else {
            this.setState({ shrinkHeader: false });
        }
        reportWindowScrollTopY(window.scrollY)
    };

    clickedSection = index => {
        let  selectedSection = '';

        switch (index) {
            case 0: {
                selectedSection = 'aboutUs';
                break
            }
            case 1: {
                selectedSection = 'OurServices';
                break
            }
            case 2: {
                selectedSection = 'mood';
                break
            }
            case 3: {
                selectedSection = 'someHappyCustomers';
                break
            }
            case 4: {
                selectedSection = 'contactUs';
                break
            }
            default: {
                selectedSection = ''
            }
        }
        this.setState({ clickedSection: true });
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
        const { menuList, large, larger } = this.props;

        return (
            <div className={shrinkHeader ? 'header sm' : 'header'}>
                <div className={'header_logo'}>
                    <Logo sm={shrinkHeader}/>
                    <span className={'logo_line'}>cocktail bar service and much more</span>
                </div>
                <div className={'menu_button'} onClick={large ? null : () => this.toggleMenu()}>
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
                                    offset={-80}
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
                        :   <i className="fas fa-ellipsis-h"/>
                    }
                </div>
                {!large && <Menu className={shrinkHeader ? 'menu sm' : 'menu'} toggleMenu={this.toggleMenu} moveToTop={shrinkHeader}/>}
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { openMenu, menuList, windowHeight, windowWidthSize, windowScrollY } = state.mainReducer;
    const { large, larger } = windowWidthSize;

    return {
        openMenu,
        large,
        larger,
        menuList,
        windowHeight,
        windowScrollY,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: bool => dispatch(toggleMenu(bool)),
        setWindowWidth: width => dispatch(setWindowWidth(width)),
        setWindowHeight: height => dispatch(setWindowHeight(height)),
        reportWindowScrollTopY: scroll => dispatch(reportWindowScrollTopY(scroll)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
