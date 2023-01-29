import React, { Component } from 'react';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import Search from './../Templates/Search';
import TestSearchBar from './../Templates/TestSearchBar';
import imag from "./../img/upimage.jpg";
import RestaurantInfoModal from './RestaurantInfoModal';
import './Restaurant.css'
import CartButton from '../Templates/CartButton';
import axios from 'axios'

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tog:false,
            showmodal:false,
            allRestaurants:[],
            isRestaurantLoaded:false
        }
        this.detail = this.detail.bind(this);
        console.log(props.close);
        this.replace = this.replace.bind(this);

    }
    componentDidMount(){
        console.log("Restaurant Again");
        axios.get('http://localhost:5002/restaurants').then(resp => {
            this.setState({allRestaurants: resp.data});
            console.log(this.state.allRestaurants)
        });
    }
    //restaurant detail on
    detail(e){
        e.preventDefault();
        console.log("btn clicked");
        this.setState({showmodal:true});
        console.log(this.state.showmodal);
        
    }
    // restaurant detail off
    replace(l){
        console.log(l);
        this.setState({showmodal:false});

    }

    ratings(xx){
        return '&#9733';
    }
    


    render() {
       

        return (
            <div className="bgnormal">
                {/* <Header /> */}
                <div style={{height:"57px"}}><Header/></div>
                {/* <Search /> */}
                <div className='restaurant-search-container'><TestSearchBar/></div>
                <CartButton/>
                {/* Restaurant Details modal on off */}
                {this.state.showmodal?<RestaurantInfoModal closeModal={this.replace} />:""}
                
                <div className="sec-content">
                <div className="container-fluid my-sm-2" style={{background:"green"}}>

                    <div className="row">
                        {/* Restaruant List */}
                        <div className="col-sm-6 border">
                            <div><label className="display-5 fs-3">Restaurant List</label></div>

                {this.state.allRestaurants ? this.state.allRestaurants.map(data => {
                    return(
                            <div className="card card-body mx-sm-1 my-sm-2 d-flex flex-row " key={data.id}>

                                <div className="col-sm-4 ">

                                    <img className="border-0 border-none border-radius" src={imag} alt="image" style={this.state.tog?{  height: "200px" }:{ maxWidth: "100%", height: "100px" }} onMouseEnter={()=>{this.setState({tog:true}); console.log("Mouse Entered!");}} onMouseLeave={()=>{this.setState({tog:false});console.log("Mouse Left!");}}/>
                                    <label htmlFor="">Rating: {this.ratings(data.restaurantRatingId)}</label>
                                    <p style={{ fontSize: "14px" }}><span>Location:</span> {data.address}</p>
                                    <div><button className="btn btn-primary mt-2" onClick={this.detail}>Details</button></div>

                                </div>
                                <div className=" col-sm-8 ">
                                    <label className=" fs-5" htmlFor="image">{data.name}</label>
                                    <p className="">{data.description}</p>

                                </div>

                            </div>
                            )
                }) : <h3>Didn't get any</h3> }

                        </div>
                        {/* Restaurant Food list*/}
                        <div className="col-sm-6 border">
                            <div><label className="display-5 fs-3">Restaurant Food List</label></div>
                        </div>
                    </div>
                    


                </div>
                </div>
                <Footer />

            </div>
        );
    }
}

export default Restaurant;