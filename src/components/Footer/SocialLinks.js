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
           <li key={social.id}>
               <a href={social.uri}><i className={social.icon}> </i>{social.name}</a>
           </li>
        ));
    }

    render(){
        return(
            <SocialLinksCSS>
                {this.getSocial()}
            </SocialLinksCSS>
        )
    }
}