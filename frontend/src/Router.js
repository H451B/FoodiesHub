import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Test from './Templates/Test';
import App from './App';
import Home from './Home/Home';
import Restaurant from './Restaurant/Restaurant';
import RestaurantInfoModal from './Restaurant/RestaurantInfoModal';
import Food from './Food/Food';
import Feed from './Feed/Feed';

// on refresh error nested router
// import RestaurantMenu from './Restaurateur/RestaurantMenu';

import UserDashboard from './Roles/UserDashboard';

import RestaurateurSign from'./Roles/RestaurateurSign';
import RestaurateurDashboard from'./Roles/RestaurateurDashboard';

import CartItemCard from './Templates/CartItemCard';
import Cart from './Order/Cart';
import OrderConfirmation from './Order/OrderConfirmation';
import CheckOut from './Delivery/CheckOut';
import DeliverySummary from './Delivery/DeliverySummary';
import RestaurantMenu from './Roles/Restaurateur/RestaurantMenu';
import FileUpload from './Testing/FileUpload';
import UserInfo from './Roles/User/UserInfo';
import TestPageApi from './Templates/TestPageApi';

// const routes = [
//     {
// 		path: '/resProfile',
// 		component: RestaurateurDashboard,
// 		routes: [
// 			{
// 				path: '/resProfile/resMenu',
// 				component: RestaurantMenu
//             }
//         ]
//     }
// ]

const Router = ()=> {
        return ( 
            <Switch>
            {/* <Route exact path={'/test'} component={Test}></Route> */}
            {/* <Route exact path={'/'} component={App}></Route> */}
            <Route exact path={'/dev'} component={DeliverySummary}></Route>
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={'/restaurant'} component={Restaurant}></Route>
            <Route exact path={'/food'} component={Food}></Route>
            <Route exact path={'/feed'} component={Feed}></Route>
            <Route exact path={'/modalrestaurant'} component={RestaurantInfoModal}></Route>
            
            {/* User  Dashboard*/}
            <Route exact path={'/user'} component={UserDashboard}></Route>

            {/* Restaurant  Dashboard*/}
            {/* /business */}
            {/* if signedIn redirect to RestaurantSign to RestaurateurDashboard */}
            <Route exact path={'/business'} component={RestaurateurSign}></Route>
            
            {/* DASHBOARD RESTAURANT */}
            <Route exact path={'/resProfile'} component={RestaurateurDashboard}></Route>


            <Route exact path={'/testPageApi'} component={TestPageApi}></Route>



            <Route exact path={'/item-card'} component={CartItemCard}></Route>
            <Route exact path={'/cart'} component={Cart}></Route>
            <Route exact path={'/order-confirmation'} component={OrderConfirmation}></Route>
            <Route exact path={'/checkout'} component={CheckOut}></Route>
            <Route exact path={'/fileupload'} component={FileUpload}></Route>
            </Switch>
            
            
         );
    }

 
export default Router;