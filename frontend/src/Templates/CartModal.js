import React, { Component } from 'react';
import CartItemCard from './CartItemCard';
import { Modal,Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import OrderSummary from '../Order/OrderSummary';
import DeliveryVendors from '../Delivery/DeliveryVendors';
import DeliverySummary from '../Delivery/DeliverySummary';
import PaymentVendors from '../Delivery/PaymentVendors';
import DataStore from './DataStore';
import { BiDna } from 'react-icons/bi';


class CartModal extends Component {

    constructor(props) {
        super(props);
        // console.log(props);
        const dataStore = new DataStore();
        this.pages = ['cart','order','confirm'];
        this.pageProperties = dataStore.pageProperties;
        this.i = 0;
        // console.log(dataStore.orderList);
        this.state = {
            showCartModal:true,
            currentPage:this.pages[this.i],
            pageProperty: dataStore.pageProperties[this.i],
            itemList: dataStore.getItems(),
            orderList: dataStore.getOrders(),
            confirmList: dataStore.getConfirms(),
            payDone:false,
            deliveryVendor:'',
            paymentVendor:''
        }

        this.routeForward = this.routeForward.bind(this);
        this.routeBackward = this.routeBackward.bind(this);
        this.finalDelivery = this.finalDelivery.bind(this);
        this.finalPayment = this.finalPayment.bind(this);
    }
    
    // console.log(state);
    // const [payDone,setPayDone] = useState(false);

    finalDelivery(e){
        this.setState({deliveryVendor:e});
    }

    finalPayment(e){
        this.setState({paymentVendor:e});
    }

    
    
    routeForward(){        
        console.log('routeForward');
        if(this.i<2){

            this.setState({
                currentPage:this.pages[++this.i],
                pageProperty:this.pageProperties[this.i]
            });
            
        }
        else if(this.i >= 2){
            this.setState({payDone:!this.state.payDone});
            setTimeout(() => {
                this.setState({payDone:!this.state.payDone,showCartModal:!this.state.showCartModal});
                // window.location.replace('/');

            }, 3000);
        }

    }
    
    routeBackward () {
        console.log('routeBackword');
        if(this.i>0)
        this.setState({
            currentPage:this.pages[--this.i],
            pageProperty:this.pageProperties[this.i]
        });
        else if(this.i<=0){
            this.setState({showCartModal:!this.state.showCartModal});
        }
    }
    
    render() {
        let cartItem = (<div className="cart-item-list">
            {this.state.currentPage == 'cart' ? (this.state.itemList.map((info, key) => {
                return (<div key={key}><CartItemCard itemProperty={info} /></div>);
            })) : ""}
        </div>);
    
        let orderSummary = (
                        this.state.currentPage == 'order'?(<div className="order-confirmation-info"><OrderSummary orderdata={this.state.orderList} />
                        <DeliveryVendors handler={this.finalDelivery}/></div>):""
                        );
        
        let checkOut = (this.state.currentPage == 'confirm'?(<div id="checkoutinfo"><DeliverySummary/> <PaymentVendors handler={this.finalPayment}/></div>):"")
    
        let payAlert = (this.state.payDone?<div className="float-top"><Alert color="success">Payment Successful!</Alert></div>:'');
        
    return (
        <div>
            <Modal isOpen={this.state.payDone} toggle={()=>this.setState({payDone:!this.state.payDone})}>
            {payAlert}
            </Modal>
            
            <Modal isOpen={this.state.showCartModal} toggle={()=>this.props.cartToggle(false)}>
            
            <div id="order-cart">
                <div className="display-6 text-center p-2 text-light">{this.state.pageProperty.mainTitle}</div>
                {/* cart item list for order place */}
                {cartItem}
                
                {/* order summary for order confirmation */}
                {orderSummary}

                {/* checkout for delivery*/}
                {checkOut}



                <div className="mt-2 mb-2 d-flex justify-content-end order-cart-btn">
                    <div className=""><button type="button" className="btn" onClick={() => this.routeForward()}>{this.state.pageProperty.leftBtn}</button></div>
                    <div className=""><button type="button" className="btn" onClick={() => this.routeBackward()}>{this.state.pageProperty.rightBtn}</button></div>
                </div>
            </div>

        </Modal>
        
        </div>
        
    );
    }
}

export default CartModal;