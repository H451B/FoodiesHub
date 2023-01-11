import React from 'react';
import DataStore from '../Templates/DataStore';

function PaymentVendors (props) {
    const DS = new DataStore();
    const logos = DS.logo;
    function getPayment(e){
        var value = e.target.value;
        props.handler(value);
    }
    
        return (
            <div id="paymentvendors">
                <div className="d-flex flex-row justify-content-evenly paymentvendorsbody">
                <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['cod']} className="img-fluid" />
                            </span>
                            <input type="radio" name="cod" value="cod" onChange={e=>getPayment(e)} />
                        </div>
                        <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['bkash']} className="img-fluid" />
                            </span>
                            <input type="radio" name="bkash" value="bkash" onChange={e=>getPayment(e)} />
                        </div>
                        <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['visa']} className="img-fluid" />
                            </span>
                            <input type="radio" name="visa" value="visa" onChange={e=>getPayment(e)} />
                        </div>
                        <div className="d-flex p-2 border-radius-1">
                            <span>
                                <img src={logos['nogod']} className="img-fluid" />
                            </span>
                            <input type="radio" name="nogod" value="nogod" onChange={e=>getPayment(e)} />
                        </div>
                </div>
            </div>
        );
    
}

export default PaymentVendors;