import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/Global.css';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

export class Root extends Component{
    render(){
        return(
            <Router>
                <App/>
            </Router>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
