import React, {Component} from 'react';
import FooterCSS from './Footer.css';
import {SocialLinks} from "../../components/Footer/SocialLinks";
import Copyright from "../../components/Footer/Copyright";

export class Footer extends Component{
    render(){
        return(
            <FooterCSS className="nousai__footer p2 fixed flex justify-between bottom-0 left-0 right-0">
                <SocialLinks/>
                <Copyright/>
            </FooterCSS>
        )
    }
}