import React, { Component } from 'react';
import CartModal from '../Templates/CartModal';

class OrderConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state={
            pageProperty: {
                leftBtn: "Check Out",
                rightBtn: "Return",
                mainTitle: "Order Confirmation"
            },
            orderList:{
                order_item_count:5,
                order_summary:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus velit inventore, laborum maxime magnam recusandae, blanditiis repudiandae necessitatibus expedita cumque ut esse illo harum deserunt voluptate delectus, dolores tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur nihil optio repudiandae ut consequatur laboriosam quidem alias, illo hic, quam tempora porro perferendis autem accusantium tempore ea, architecto a.',
                order_total_amount:123.34 
            }
        };
    }
    
    render() {
        return (
            <CartModal bodydata={this.state.pageProperty} orderdata={this.state.orderList}  />
        );
    }
}

export default OrderConfirmation;