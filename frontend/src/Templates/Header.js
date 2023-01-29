import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fhlogo from "../fh_logo_white.png"
import "./Header.css"
import { CgProfile } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";
import UserSign from '../Roles/UserSign';
import Home from '../Home/Home';
import { Modal, ModalBody } from 'reactstrap';
import CartButton from './CartButton';
import CartModal from './CartModal';
import foodmedia from "../img/upfood.jpg";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm:false,
            showCart:false,
            cartData:{
                  mainCart:{
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
        }
        this.stateSign = this.stateSign.bind(this);
        this.outClickClose = this.outClickClose.bind(this);
        this.cartBtnToggle = this.cartBtnToggle.bind(this);        
    }

    

    //not passing line 24,30 {issue}
    stateSign(e) {
        e.preventDefault();

        if(sessionStorage.getItem('user')){
            window.location.replace('/user');
        }

        else if(!this.state.showForm){
            this.setState({showForm:!this.state.showForm});
        }

        // if (this.state.passState) {
        //     this.setState({ passState: false });
        //     <Home recv={this.state.passState} />;
        //     console.log('clicked 1')
        // }
        // else {
        //     console.log('clicked 2');
        //     this.setState({ passState: true });
        //     <Home recv={this.state.passState} />;
        // }
    }
    outClickClose(){
        // setTimeout(() => {
        //     this.setState({showForm:!this.state.showForm});            
        // }, 5000);
    }
    cartBtnToggle(e){
        console.log('cartBtnToggle');
        if(e) this.setState({showCart:!this.state.showCart});
        if(!e) this.setState({showCart:!this.state.showCart});
        
    }


    render() {
        let cartModal = (<CartModal cartToggle={this.cartBtnToggle} data={this.state.cartData} />);
        return (
            <div >

               
                    <Modal isOpen={this.state.showForm}  className="user-sign-modal" onMouseLeave={(e)=>this.outClickClose()} toggle={()=>this.setState({showForm:false})} >
                        <UserSign />
                    </Modal>

                <div className="header-container">
                    <nav className="navbar navbar-expand-lg">
                        <a href="#" className="fhlogo" ><img src={fhlogo} alt="logo" width="23" height="25" /></a>
                        <ul className="nav me-auto mb-2 mb-lg-0 mr-2 ">
                            <li className="nav-item "><a href="/" className="nav-link text-light">Home</a></li>
                            <li className="nav-item "><a href="/feed" className="nav-link text-light">Community</a></li>
                            <li className="nav-item "><a href="/restaurant" className="nav-link text-light">Restaurant</a></li>
                            <li className="nav-item "><a href="/food" className="nav-link text-light">Food</a></li>
                            <li className="nav-item "><a href="#" className="nav-link text-light">Contact</a></li>

                        </ul>
                        <a href="#" className="foodies-notification"><MdNotifications /></a>
                        {/* <a href="#" className="foodies-profile">
                        <CgProfile/></a> */}
                        <a className="foodies-profile" onClick={this.stateSign}>
                            <CgProfile />
                        </a>
                    </nav>
                </div>
                <CartButton handler={this.cartBtnToggle} />
                {this.state.showCart?cartModal:''}
                
            </div>
        );
    }
}

export default Header;