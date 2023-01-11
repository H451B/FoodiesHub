import React, { Component } from 'react';
import CartModal from '../Templates/CartModal';


class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state={
            pageProperty:{
                leftBtn:"Pay",
                rightBtn:"Cancel",
                mainTitle:"Check Out"
            },
            confirmList:{
                checkout_item_count:5,
                checkout_item_summary:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus velit inventore, laborum maxime magnam recusandae, blanditiis repudiandae necessitatibus expedita cumque ut esse illo harum deserunt voluptate delectus, dolores tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur nihil optio repudiandae ut consequatur laboriosam quidem alias, illo hic, quam tempora porro perferendis autem accusantium tempore ea, architecto a.',
                checkout_total_amount:124.23,
                checkout_deliveryvendor:'Pathao Food',
                checkout_delivery_charge:5.77,
                checkout_pay_amount:130.00
            }
        }
    }
    
    render() {
        return (
            <div>
                <CartModal bodydata={this.state.pageProperty} confirmdata={this.state.confirmList} />
            </div>
        );
    }
}

export default CheckOut;