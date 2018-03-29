import React, {Component} from 'react';
import ArrowCSS from './Arrow.css';
import {Link} from 'react-router-dom';

export default class Arrow extends Component{

    constructor(props){
        super(props);

        this.state = {
            prevPageFlag: (typeof (this.props.prevPage) === 'object'),
            nextPageFlag: (typeof (this.props.nextPage) === 'object'),
            nextPage: this.props.nextPage,
            prevPage: this.props.prevPage
        };

    }


    render(){
        return(
            <ArrowCSS className="relative">
                {(this.state.prevPageFlag) ? <Link to={this.state.prevPage.url} title={this.state.prevPage.name}>{this.state.prevPage.name}</Link> : ""}
                {(this.state.nextPageFlag) ? <Link to={this.state.nextPage.url} title={this.state.nextPage.name}>{this.state.nextPage.name}</Link>: ""}
            </ArrowCSS>
        );
    }
}