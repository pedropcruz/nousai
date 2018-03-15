import React, {Component} from 'react';
import Modal from 'react-modal';

export class HamburguerMenu extends Component {

    constructor(props) {
        super(props);

        this.state={
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
        return [
            <button className="mx2 nousai__header--menu relative right" onClick={this.onClickMenu}>
                <span> </span>
                <span> </span>
            </button>,
            <Modal
                appElement={document.getElementById('root')}
                isOpen={this.state.overlayMenu}
                onRequestClose={this.onClickMenu}
            >

            </Modal>
        ];
    }
}