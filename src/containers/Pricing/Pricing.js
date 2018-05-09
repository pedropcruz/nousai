import React, {Component} from 'react';
import PricingCSS from './Pricing.css';
import data from '../../resources/pricingData';

export class Pricing extends Component {

    constructor(props) {
        super(props);

        this._renderData = this._renderData.bind(this);
    }

    _renderItemList(data){
        return data.map((item, key) => <p key={key}>{item}</p>)
    }

    _renderData(data) {
        return data.map((item, index) => (
            <div key={index} className="col md-col-6 col-12 pricing__package center">
                <h1 className="h1 pricing__package--title">{item.packageName}</h1>
                <figure>
                    <picture>
                        <img src={item.img} alt={item.packageName}/>
                    </picture>
                </figure>
                <h2 className="h2 pricing__package--value">{(item.hasOwnProperty("value")) ? [
                    <span key="0" className="pricing__package--value__real">{item.value}€</span>,
                    <span key="1" className="pricing__package--value__discount" > {item.value / 2}€</span>
                    ] : <p>Discuss the price with us!</p>}
                </h2>
                <h3 className="h3">For the first 5 clients we have 50% discount!</h3>
                <div className="pricing__package--desc">
                    {this._renderItemList(item.featuredList)}
                </div>
                <a className="btn" href="/contact">Contact Us</a>
            </div>
        ));
    }

    render() {
        return (
            <PricingCSS className="nousai__pricing">
                <div className="content relative block">
                    <h1 className="title"><span>Pricing</span></h1>
                    <div className="block relative clearfix">
                        {this._renderData(data)}
                    </div>
                </div>
            </PricingCSS>
        );
    }
}