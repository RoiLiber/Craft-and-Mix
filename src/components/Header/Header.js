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
        let scrollTopY = window.scrollY;
        if (scrollTopY > 585) {
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
            <Fragment>
                <div className={styleClassName ? 'header sm' : 'header'}>
                    <div className={'top'}>
                        <Logo/>
                        <div className={'menu_button'} onClick={() => this.toggleMenu()}>
                            <i className="fas fa-ellipsis-h"/>
                        </div>
                    </div>
                    <span>cocktail bar service and much more</span>
                    <Menu className={styleClassName ? 'menu sm' : 'menu'}/>
                </div>
            </Fragment>
        )
    };
}

const mapStateToProps = state => {
    const { openMenu } = state.mainReducer;
    return {
        openMenu
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: bool => dispatch(toggleMenu(bool)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
