import React, { Component } from 'react';
import food from '../img/upfood.jpg';

class TopFood extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="">
               
                    <div className="d-md-flex flex-row justify-content-between ">
                    <div className="card card-body m-1 ">
                            <img className="" src={food} alt="food" id="topimage" />
                            <label htmlFor="" className="blockquote mt-sm-2 fs-5">Kala Bhuna</label>
                            <label htmlFor="" className="blockquote-footer ">Coders Cafe</label>
                            <p className="text-justify text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur omnis eligendi ducimus delectus cupiditate nostrum aut consectetur voluptates quis pariatur officiis cum placeat aliquam quo non rerum necessitatibus minus.
                            </p>
                        </div>
                        <div className="card card-body m-1 ">
                            <img className="" src={food} alt="food" id="topimage" />
                            <label htmlFor="" className="blockquote mt-sm-2 fs-5">Kala Bhuna</label>
                            <label htmlFor="" className="blockquote-footer ">Coders Cafe</label>
                            <p className="text-justify text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur omnis eligendi ducimus delectus cupiditate nostrum aut consectetur voluptates quis pariatur officiis cum placeat aliquam quo non rerum necessitatibus minus.
                            </p>
                        </div>
                        <div className="card card-body m-1 ">
                            <img className="" src={food} alt="food" id="topimage" />
                            <label htmlFor="" className="blockquote mt-sm-2 fs-5">Kala Bhuna</label>
                            <label htmlFor="" className="blockquote-footer ">Coders Cafe</label>
                            <p className="text-justify text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur omnis eligendi ducimus delectus cupiditate nostrum aut consectetur voluptates quis pariatur officiis cum placeat aliquam quo non rerum necessitatibus minus.
                            </p>
                        </div>                      
                   </div>                       
               
            </div>
         );
    }
}
 
export default TopFood;