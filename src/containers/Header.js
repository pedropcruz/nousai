import React, {Component} from 'react';
import HeaderCSS from './Header.css';
import LogoImg from "../components/Header/LogoImg";
import HamburguerMenu from "../components/Header/HamburguerMenu";
import Arrow from '../components/NavigationArrows/Arrow';

export class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            overlayMenu: this.props.overlayMenu
        }
    }

    render() {
        return (
            <HeaderCSS className="fixed flex justify-between top-0 left-0 right-0 nousai__header p2">
                <LogoImg/>
                <HamburguerMenu overlayMenu={this.state.overlayMenu}/>
            </HeaderCSS>
        );
    }
}