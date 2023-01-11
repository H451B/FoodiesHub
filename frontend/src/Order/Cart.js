import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import CartItemCard from '../Templates/CartItemCard';
import CartModal from '../Templates/CartModal';
import foodmedia from '../img/upfood.jpg';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageProperty: {
                leftBtn: "Confirm",
                rightBtn: "Return",
                mainTitle: "Order Cart"
            },
            itemList: [{
                item_price: 15.29,
                item_count: 0,
                total_price: 0,
                item_name: "Kala bhuna",
                item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
                item_media: foodmedia
            },
            {
                item_price: 15.29,
                item_count: 0,
                total_price: 0,
                item_name: "Kala bhuna",
                item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
                item_media: foodmedia
            },
            {
                item_price: 18.90,
                item_count: 0,
                total_price: 0,
                item_name: "Beef buna",
                item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
                item_media: foodmedia
            },
            {
                item_price: 15.29,
                item_count: 0,
                total_price: 0,
                item_name: "Kala bhuna",
                item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
                item_media: foodmedia
            }]

        }

    }

    render() {

        return (
            <CartModal bodydata={this.state.pageProperty} itemdata={this.state.itemList} />
        );
    }
}

export default Cart;