import React from 'react'
import "./Cart.css"
import { BsCart3 } from "react-icons/bs";
import { useHistory } from 'react-router';

function CartButton(props) {

    // const history = useHistory();
    // const getCart = () =>{
    //     history.push('/cart');
    // }
    // let currentPath = window.location.pathname;
    // // console.log(currentPath);
    // sessionStorage.setItem('lastpath',currentPath);
    
    return (
            <a className="cart-box" onClick={()=>props.handler(true)} >
                <div className="cart-icon">
                <BsCart3/>
                </div>
            </a>
    )
}

export default CartButton;
