import React, { Component } from 'react';

class DeliverySummary extends Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }
    
    render() {
        return (
            <div id="deliverysummary" className="container">
                <div className="d-flex flex-row pt-2 pb-2">
                    <div className="col-md text-left">
                        <div className="deliverysummaryinfo">
                            <p>Item Count</p>
                            <p>Item Count</p>
                            <p>Item Summary</p>
                            <p>Item Summary</p>
                            <p>Total Amount</p>
                            <p>124.23 $</p>
                            <p>Delivery by</p>
                            <p>Pathao Food (+ 5.77 $)</p>
                        </div>
                    </div>
                    <div className="col-md text-center">
                        <div>
                            <p>Amount To Be Paid</p>
                            <p>130.00 $</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default DeliverySummary;