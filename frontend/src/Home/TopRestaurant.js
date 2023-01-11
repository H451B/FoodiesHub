import React, { Component } from 'react';
import restaurant from '../img/upimage.jpg';

class TopRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const restaurantName = "Coders Cafe";
        const descrip = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sapiente fuga facere accusantium error repudiandae illo ad placeat quia! Voluptatibus dolor est ratione molestias distinctio facere! Atque nemo aliquid dolorum."
        return ( 
            <div className="">
               
                    <div className="d-md-flex flex-row justify-content-between">
                    <div className="card card-body m-1 ">
                            <img className="" src={restaurant} alt="food" id="topimage"/>
                            <label htmlFor="" className="blockquote mt-sm-2 fs-5">{restaurantName}</label>
                            <label htmlFor="" className="blockquote-footer ">Coders Cafe</label>
                            <p className="text-justify text-truncate">{descrip}
                            </p>
                        </div>
                        <div className="card card-body  m-1">
                            <img className="" src={restaurant} alt="food" id="topimage"/>
                            <label htmlFor="" className="blockquote mt-sm-2 fs-5">{restaurantName}</label>
                            <label htmlFor="" className="blockquote-footer ">Coders Cafe</label>
                            <p className="text-justify text-truncate">{descrip}
                            </p>
                        </div>
                        <div className="card card-body m-1 ">
                            <img className="" src={restaurant} alt="food" id="topimage"/>
                            <label htmlFor="" className="blockquote mt-sm-2 fs-5">{restaurantName}</label>
                            <label htmlFor="" className="blockquote-footer ">Coders Cafe</label>
                            <p className="text-justify text-truncate">{descrip}
                            </p>
                        </div>                      
                   </div>
                   
            </div>
         );
    }
}
 
export default TopRestaurant;