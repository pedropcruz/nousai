import React, {Component} from 'react';
import {Header} from "./containers/Header";
import {Footer} from "./containers/Footer";
import Arrow from './components/NavigationArrows/Arrow';

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
                <Arrow
                    prevPage={{
                        url: '/',
                        name: 'Home'
                    }}
                    nextPage={{
                        url:'/About',
                        name: 'About'
                    }}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
