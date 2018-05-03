import React, {Component} from 'react';
import TabsCSS from './Tabs.css';
import dataForAbout from '../../resources/aboutData';

export default class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected || 0
        };

        this._renderTitle = this._renderTitle.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(index, e) {
        e.preventDefault();
        this.setState({
            selected: index
        });
    }

    _renderTitle(data) {
        return <ul className="list-reset block tabs__labels absolute bottom-0 right-0">
            {data.map((item, index) => (
                <li key={index} className={(this.state.selected === index ? 'active' : '')}>
                    <a onClick={this._handleClick.bind(this, index)}>
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>;
    }

    _renderContent(data) {
        return data.map((item, index) => (
            <div key={index} style={(index === this.state.selected) ? {display: 'block'} : {display: 'none'}}
                 className="tabs__content">
                <h1>{item.title}</h1>
                {(Array.isArray(item.content)) ? item.content.map((item, index) => (<p key={index}>{item}</p>)) :
                    <p>{item.content}</p>}
            </div>
        ));
    }


    render() {
        return (
            <TabsCSS className="relative tabs">
                {this._renderContent(dataForAbout)}
                {this._renderTitle(dataForAbout)}
            </TabsCSS>
        );
    }
}