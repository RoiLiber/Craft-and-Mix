import React, { Component } from 'react';
import { connect } from "react-redux";
import { Fade } from 'react-reveal';
import Header from "./components/Header";
import TopLayout from "./containers/TopLayout";
import EnterPage from "./containers/EnterPage";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './reset.scss';
import './App.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enterPage: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ enterPage: false })
        }, 3000)
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks()
    }

    render() {
        const { openMenu, centerPhotoItem } = this.props;
        const { enterPage } = this.state;
        return (
            <div className={'App'}>
                <EnterPage/>
                {openMenu || centerPhotoItem ? disableBodyScroll() : enableBodyScroll()}
                {!enterPage && <Fade bottom>
                    <div>
                        <Header/>
                        <TopLayout/>
                    </div>
                </Fade>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { openMenu, centerPhotoItem } = state.mainReducer;

    return {
        openMenu,
        centerPhotoItem
    };
};

export default connect(mapStateToProps)(App);
