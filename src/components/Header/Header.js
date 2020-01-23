import React, { Component } from 'react';
import { connect } from "react-redux";
import Logo from '../UI/Logo/Logo';
import { toggleMenu } from '../../store/actions/mainActions';
import { Slide } from 'react-reveal';
import Menu from '../../components/Menu';
import { Link } from "react-scroll";
import './style.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styleClassName: false,
            clickedSection: false,
            setWindowSizeWide: '',
            selectedSection: '',
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.reportWindowSize);
        this.setWindowSizeWide()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.reportWindowSize);
    }

    reportWindowSize = () => {
        this.setWindowSizeWide()
    };

    setWindowSizeWide = () => {
        const { windowWidthLr } = this.props;
        let width = window.innerWidth;
        const windowSizeWide = width > windowWidthLr;

        this.setState({ setWindowSizeWide: windowSizeWide })
    };

    clickedSection = index => {
        const selectedSection = index === 0 ? 'aboutUs' : index === 1 ? 'OurServices' :index === 2 ? 'mood' : '';
        this.setState({ clickedSection: true });
        setTimeout(() => {
            this.setState({ clickedSection: false, selectedSection });
        }, 900)

    };

    handleScroll = () => {
        const { windowWidthSm } = this.props;
        const { clickedSection } = this.state;
        let scrollTopY = window.scrollY;
        let width = window.innerWidth;
        const selectedSection = scrollTopY >= 716 && scrollTopY < 1091
            ? 'aboutUs'
            : scrollTopY >= 1091 && scrollTopY < 1466
                ? 'OurServices'
                : scrollTopY >= 1466
                    ? 'mood'
                    : '';

        !clickedSection && this.setState({ selectedSection });
        if (scrollTopY > 702 && width <= windowWidthSm) {
            this.setState({ styleClassName: true });
        } else {
            this.setState({ styleClassName: false });
        }
    };

    toggleMenu = () => {
        const { openMenu, toggleMenu } = this.props;

        toggleMenu(!openMenu)
    };

    render() {
        const { styleClassName, setWindowSizeWide, selectedSection } = this.state;
        const { menuList } = this.props;

        return (
            <div className={styleClassName ? 'header sm' : 'header'}>
                <div className={'header_logo'}>
                    <Logo sm={styleClassName}/>
                    <span className={'logo_line'}>cocktail bar service and much more</span>
                </div>
                <div className={'menu_button'} onClick={setWindowSizeWide ? null : () => this.toggleMenu()}>
                    {setWindowSizeWide
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
                                        <Slide left duration={500}>
                                            <span className={'menu_list_item_line'}/>
                                        </Slide>
                                        }
                                </Link>
                        })
                        :   <i className="fas fa-ellipsis-h"/>
                    }
                </div>
                <Menu className={styleClassName ? 'menu sm' : 'menu'} toggleMenu={this.toggleMenu} moveToTop={styleClassName}/>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { openMenu, windowWidthLr, windowWidthSm, menuList } = state.mainReducer;
    return {
        openMenu,
        windowWidthLr,
        windowWidthSm,
        menuList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: bool => dispatch(toggleMenu(bool)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
