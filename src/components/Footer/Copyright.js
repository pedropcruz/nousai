import React, {Component} from 'react';
import CopyrightCSS from './Copyright.css';

class Copyright extends Component{
    render(){
        return(
            <CopyrightCSS>
                at any place ~ <a href="mailto:hello@nousai.com">hello@nousai.com</a> ~ © 2018 nousai, inc.
            </CopyrightCSS>
        )
    }
}

export default Copyright;