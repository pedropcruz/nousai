import React, {Component} from 'react';
import HomeCSS from "./Home.css";

export class Home extends Component{
    render(){
        return(
            <HomeCSS className="relative nousai__quotes">
                <h1 className="h1 nousai__quotes--welcome absolute">Inspiration changes everything. We're <span>nousai</span>.</h1>
                <h4 className="h4 nousai__quotes--phrase absolute bottom-0 right-0 m4">
                    What we think, we become
                    <p className="h6">Buddha</p>
                </h4>
            </HomeCSS>
        );
    }
}