import React, { Component } from 'react';
import Header from "./components/Header";
import TopLayout from "./containers/TopLayout";
import EnterPage from "./containers/EnterPage";
import { Fade } from 'react-reveal';
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
                <EnterPage/>
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

export default App;
