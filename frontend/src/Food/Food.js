import React, { Component } from 'react';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import './Food.css'
import imag from "./../img/upfood.jpg";
import FoodInfoModal from './FoodInfoModal';
import CartButton from '../Templates/CartButton';
import TestSearchBar from '../Templates/TestSearchBar';

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tog:false,
            showmodal:false
        }
        this.detail = this.detail.bind(this);
        console.log(props.close);
        this.replace = this.replace.bind(this);

    }
    componentDidMount(){
        console.log("Food Again");
        // this.setState({showmodal:!this.state.showmodal});
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
    


    render() {
       

        return (
            <div className="bgnormal">
                {/* <Header /> */}
                <div style={{height:"57px"}}><Header/></div>
                {/* <Search /> */}
                <div className='food-search-container'><TestSearchBar/></div>
                <CartButton />
                {this.state.showmodal?<FoodInfoModal closeModal={this.replace} />:""}
                
                <div className="sec-content">
                <div className="container my-sm-2">

                    <div className="row">
                        {/* Food list */}
                        <div className="col-sm-6 border">
                            <div><label className="display-5 fs-3">Food List</label></div>


                            <div className="card card-body mx-sm-1 my-sm-2 d-flex flex-row">

                                <div className="col-sm-4 ">

                                    <img className="border-0 border-none border-radius" src={imag} alt="image" style={this.state.tog?{  height: "200px" }:{ maxWidth: "100%", height: "100px" }} onMouseEnter={()=>{this.setState({tog:true}); console.log("Mouse Entered!");}} onMouseLeave={()=>{this.setState({tog:false});console.log("Mouse Left!");}}/>
                                    <label htmlFor="">Rating: &#9733;&#9733;&#9733;&#9733;&#9733;</label>
                                    <p style={{ fontSize: "14px" }}><span>Location:</span> Chittagong, Bangladesh</p>
                                    <div><button className="btn btn-primary mt-2" onClick={this.detail}>Details</button></div>

                                </div>
                                <div className=" col-sm-8 ">

                                    <label className="d-block fs-5" htmlFor="image">Kala Bhuna <br/> </label>
                                    <label className="blockquote-footer  " htmlFor="image">Coders Cafe</label>
                                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsa consequuntur magnam iste in veritatis reprehenderit natus voluptatum sunt, ex tempora, nemo facilis vitae molestiae assumenda repellendus illum iusto aliquam?</p>

                                </div>

                            </div>

                        </div>
                        {/* Food Restaurant info*/}
                        <div className="col-sm-6 border">
                            <div><label className="display-5 fs-3">Food Restaurant info</label></div>
                        </div>
                    </div>
                    


                </div>
                </div>
                <Footer />

            </div>
        );
    }
}

export default Food;