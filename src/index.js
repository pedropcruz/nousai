import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/Global.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

export class Root extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={App}/>
            </Router>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
