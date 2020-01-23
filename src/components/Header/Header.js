import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Logo from '../UI/Logo/Logo';
import { toggleMenu } from '../../store/actions/mainActions';
import Menu from '../../components/Menu';
import './style.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styleClassName: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { windowWidthSm } = this.props;
        let scrollTopY = window.scrollY;
        let width = window.innerWidth;

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
        const { styleClassName } = this.state;

        return (
            <div className={styleClassName ? 'header sm' : 'header'}>
                <div className={'header_logo'}>
                    <Logo sm={styleClassName}/>
                    <span className={'logo_line'}>cocktail bar service and much more</span>
                </div>
                <div className={'menu_button'} onClick={() => this.toggleMenu()}>
                    <i className="fas fa-ellipsis-h"/>
                </div>
                <Menu className={styleClassName ? 'menu sm' : 'menu'} toggleMenu={this.toggleMenu} moveToTop={styleClassName}/>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { openMenu, windowWidthSm } = state.mainReducer;
    return {
        openMenu,
        windowWidthSm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: bool => dispatch(toggleMenu(bool)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
