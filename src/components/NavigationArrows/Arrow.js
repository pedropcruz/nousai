import React, {Component} from 'react';
import ArrowCSS from './Arrow.css';
import {Link} from 'react-router-dom';
import navLinks from '../../resources/navLinks';
import {withRouter} from 'react-router';

class Arrow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevPath: '',
            nextPath: ''
        };

        this.checkNextPath = this.checkNextPath.bind(this);
        this.checkPreviousPath = this.checkPreviousPath.bind(this);
    }

    componentDidMount() {
        this.checkPreviousPath();
        this.checkNextPath();
    }

    checkNextPath(location) {
        if(!location){
            location = this.props.location
        }

        let newPath = navLinks.map((obj, i, arr) => {
            if(obj.url === location.pathname){
                return arr[i+1];
            }
        }).filter(n => n !== undefined)[0];

        this.setState({
            nextPath: newPath
        });
    }

    checkPreviousPath(location) {
        if(!location){
            location = this.props.location
        }

        let newPath = navLinks.map((obj, i, arr) => {
            if(obj.url === location.pathname && location.pathname !== '/'){
                return arr[i-1];
            }
        }).filter(n => n !== undefined)[0];

        this.setState({
            prevPath: newPath
        });
    }

    componentWillReceiveProps(nextProps) {
        this.checkPreviousPath(nextProps.location);
        this.checkNextPath(nextProps.location);
    }

    render() {
        return (
            <ArrowCSS className="fixed xs-hide">
                {(this.state.prevPath) ?
                    <Link className="prev" to={this.state.prevPath.url}>{this.state.prevPath.name}</Link> : ""}
                {(this.state.nextPath) ?
                    <Link className="next" to={this.state.nextPath.url}>{this.state.nextPath.name}</Link> : ""}
            </ArrowCSS>
        );
    }
}

export default withRouter(Arrow);