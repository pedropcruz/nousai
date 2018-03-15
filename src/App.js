import React, {Component} from 'react';
import {Header} from "./containers/Header";
import {Footer} from "./containers/Footer";

class App extends Component {

    constructor(){
        super();

        this.state = {
            showOverlayMenu: false
        };
    }

    render() {
        return (
            <div className="nousai_app">
                <Header overlayMenu={this.state.showOverlayMenu}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
