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
            <div key={index} className={"col md-col-6 col-12 pricing__package center " + item.style}>
                <h1 className="h1 pricing__package--title">{item.packageName}</h1>
                <div className="pricing__package--img my1 mx-auto"> </div>
                <h2 className="h2 pricing__package--value clearfix max-width-1 mx-auto my2">{(item.hasOwnProperty("value")) ? [
                    <span key="0" className="pricing__package--value__real col-6 col relative">{item.value}€</span>,
                    <span key="1" className="pricing__package--value__discount col-6 col relative" > {item.value / 2}€</span>
                    ] : <p>Discuss the price with us!</p>}
                </h2>
                <h3 className="h3 col-6 mx-auto">For the first 5 clients we have 50% discount!</h3>
                <div className="pricing__package--desc my2">
                    {this._renderItemList(item.featuredList)}
                </div>
                <a className="btn max-width-1 mx-auto block relative" href="/contact">Contact Us</a>
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