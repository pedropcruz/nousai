import React, {Component} from 'react';
import {Header} from "./containers/Header/Header";
import {Footer} from "./containers/Footer/Footer";
import Arrow from './components/NavigationArrows/Arrow';
import {Switch, Route} from 'react-router-dom';
import {Home} from "./containers/Home/Home";
import {About} from "./containers/About/About";

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
                <section className="nousai_app--section absolute">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/pricing" render={() => <h1>Pricing</h1>} />
                        <Route exact path="/casestudies" render={() => <h1>case studies</h1>} />
                        <Route exact path="/newsletter" render={() => <h1>newsletter</h1>} />
                        <Route exact path="/contact" render={() => <h1>Contact</h1>} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default App;
