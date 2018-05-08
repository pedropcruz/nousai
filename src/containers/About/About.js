import React, {Component} from 'react';
import AboutCSS from './About.css';
import Tabs from '../../components/About/Tabs';

export class About extends Component{
    render(){
        return(
            <AboutCSS className="nousai__about">
                <Tabs />
            </AboutCSS>
        )
    }
}