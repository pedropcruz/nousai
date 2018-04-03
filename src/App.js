import React, {Component} from 'react';
import {Header} from "./containers/Header";
import {Footer} from "./containers/Footer";
import Arrow from './components/NavigationArrows/Arrow';
import {Switch, Route} from 'react-router-dom';

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
                <Arrow />
                <Footer/>
                <Switch>
                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route exact path="/about" render={() => <h1>About</h1>} />
                    <Route exact path="/pricing" render={() => <h1>Pricing</h1>} />
                    <Route exact path="/casestudies" render={() => <h1>case studies</h1>} />
                    <Route exact path="/newsletter" render={() => <h1>newsletter</h1>} />
                    <Route exact path="/contact" render={() => <h1>Contact</h1>} />
                </Switch>
            </div>
        );
    }
}

export default App;
