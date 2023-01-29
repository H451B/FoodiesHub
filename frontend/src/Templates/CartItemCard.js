import React, { Component } from 'react';
import foodmedia from "../img/upfood.jpg";
import {MdDelete} from 'react-icons/md';

class CartItemCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            item_price:props.itemProperty.item_price,
            item_count:props.itemProperty.item_count,
            total_price:props.itemProperty.total_price,
            item_name:props.itemProperty.item_name,
            item_description:props.itemProperty.item_description,
            item_media:props.itemProperty.item_media
           
        }
        this.totalPrice = 0;
        this.amountCalculatePlus = this.amountCalculatePlus.bind(this);
        this.amountCalculateMinus = this.amountCalculateMinus.bind(this);
    }

    amountCalculatePlus(){
        let count = this.state.item_count+1;
        let amount = count * this.state.item_price;
        this.setState({item_count:count,total_price:amount});
    }
    amountCalculateMinus(){
        let count = 0;
        if(this.state.item_count>0)count = this.state.item_count-1;

        let amount = count * this.state.item_price;
        this.setState({item_count:count,total_price:amount});

    }
    
    render() {
        
        return (
            
            <div id="cart-item-card">
                
                <div className="card card-body item-card-body flex-row">
                  <div className="col-md-3">
                      <img className="img-fluid item-card-image p-2" src={this.state.item_media} alt="upfood.jpg" />
                      
                  </div>  
                  <div className="col-sm-6">
                      <div className="fs-5">{this.state.item_name}</div>
                      <p className="lh-1">{this.state.item_description}</p>
                  </div>
                  <div className="col-md-3">
                      <p className="cart-item-amount pt-2 pb-2 text-center">{this.state.item_price} $</p>
                      {/* increase or decrease the amount of the item */}
                      <div className="item-counter text-center">
                          <button onClick={(e)=>{this.amountCalculatePlus();}} className="btn btn-sm item-card-btn rounded-circle btn-success" type="button">+</button> {this.state.item_count} <button onClick={(e)=>{this.amountCalculateMinus();}} className="btn btn-sm item-card-btn rounded-circle btn-danger" type="button">-</button>
                       </div>
                       <p className="cart-item-amount pt-2 pb-2 text-center">x{this.state.item_count} : {this.state.total_price} $</p>
                       <div className="text-center"><button type="button" className="btn"><MdDelete size="1.5rem"/></button></div>
                  </div>

                </div>
                             
                
            </div>

        );
    }
}

export default CartItemCard;