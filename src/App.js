import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import TopLayout from "./containers/TopLayout";
import EnterPage from "./containers/EnterPage";
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

    render() {
        const { enterPage } = this.state;
        return (
            <div className="App">
                {enterPage
                    ? <EnterPage/>
                    : <Fragment>
                        <Header/>
                        <TopLayout/>
                    </Fragment>}
            </div>
        )
    }
}

export default App;
