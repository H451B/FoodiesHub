import React from 'react';
import { useState } from 'react/cjs/react.development';
import DataStore from '../Templates/DataStore';

function DeliveryVendors (props) {
    const DS = new DataStore();
    const logos = DS.logo;

    function getDelivery(e){
        var value = e.target.value;
        props.handler(value);
    }
    
        return (
            <div id="deliveryvendors">
                <div className="d-flex flex-row justify-content-evenly deliveryvendorsbody">
                        <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['foodpanda']} className="img-fluid" />
                            </span>
                            <input type="radio" name="foodpanda" value="foodpanda" onChange={e=>getDelivery(e)} />
                        </div>
                        <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['pathaofood']} className="img-fluid" />
                            </span>
                            <input type="radio" name="pathaofood" value="pathaofood" onChange={e=>getDelivery(e)} />
                        </div>
                        <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['shohozfood']} className="img-fluid" />
                            </span>
                            <input type="radio" name="shohozfood" value="shohozfood" onChange={e=>getDelivery(e)} />
                        </div>
                        <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['hungrynaki']} className="img-fluid" />
                            </span>
                            <input type="radio" name="pathao" value="pathao" onChange={e=>getDelivery(e)} />
                        </div>
                </div>
            </div>
        );
    
}

export default DeliveryVendors;