import React, { Component } from 'react';

class OrderSummary extends Component {
    constructor(props) {
        super(props);
        this.state={
            order_item_count:props.orderdata.order_item_count,
            order_summary:props.orderdata.order_summary,
            order_total_amount:props.orderdata.order_total_amount
        };
        
    }
    
    render() {
        return (
            <div id="ordersummary" className="container">
               <div className="d-flex ordersummarybody ">
                 <div className="col-md-8 ">
                     <div className="list-inline-block ">
                         <p className="list-inline-item">Item Count : </p>
                         <p className="list-inline-item">{this.state.order_item_count}</p>
                     </div>
                     <div className="list-inline-block ">
                         <p className="list-inline-item lh-2">Item Summary : </p>
                         <p className="list-inline-item lh-1 overflow-auto ordersummarylist ">{this.state.order_summary} </p>
                     </div>
                 </div> 
                 <div className="col-md-4 text-center ">
                     <p>Total Amount</p>
                     <p>{this.state.order_total_amount} $</p>
                     </div>                
                </div> 
                                
            </div>
        );
    }
}

export default OrderSummary;