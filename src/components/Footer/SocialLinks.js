import React, {Component} from 'react';
import SocialLinksCSS from './SocialLinks.css';
import data from '../../resources/social';

export class SocialLinks extends Component{

    constructor(){
        super();

        this.getSocial = this.getSocial.bind(this);
    }

    getSocial(){
        return data.map((social, i) => (
           <li key={social.id} className="inline-block mx1">
               <a href={social.uri} data-hover={social.name}><i className={'icon ' + social.icon}> </i></a>
           </li>
        ));
    }

    render(){
        return(
            <SocialLinksCSS className="list-reset list-style-none block">
                {this.getSocial()}
            </SocialLinksCSS>
        )
    }
}