import React, { Component } from 'react';
import Header from "./components/Header";
import BackgroundLayout from "./containers/BackgroundLayout";
import TopLayout from "./containers/TopLayout";
import './reset.scss';
import './App.scss';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <BackgroundLayout/>
                <TopLayout/>
            </div>
        )
    }
}

export default App;
