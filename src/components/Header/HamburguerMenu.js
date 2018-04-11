import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import navLinksData from '../../resources/navLinks';

export default class HamburguerMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            overlayMenu: this.props.overlayMenu
        };

        this.onClickMenu = this.onClickMenu.bind(this);
    }

    onClickMenu() {
        this.setState({
            overlayMenu: !this.state.overlayMenu,
        });
    }

    render() {
        return (
            <div>
                <button className="mx2 nousai__header--menu relative right" onClick={this.onClickMenu}>
                    <span> </span>
                    <span> </span>
                </button>
                <Modal
                    appElement={document.getElementById('root')}
                    isOpen={this.state.overlayMenu}
                    onRequestClose={this.onClickMenu}
                    className="Modal"
                    overlayClassName="Modal--Overlay">
                    <button onClick={this.onClickMenu}><i className="icon icon-close"> </i>close</button>
                    <ul className="list-reset block Modal--navLinks">
                        {navLinksData.map((item) => (
                            <li key={`navLinks_${item.id}`} className="block">
                                <Link to={item.url} >{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </Modal>
            </div>
        );
    }
}