import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import imag from "./../img/upimage.jpg";
import Restaurant from './Restaurant';

class RestaurantInfoModal extends Component {
    constructor(props) {
        super(props);
        console.log(props.open);
        this.state = { show:"" }
        this.close = this.close.bind(this)
    }

    componentDidMount(e){
        console.log("RestaurantModal component mounting");
        this.setState({show:true}); 
        
    }

    close(){
        this.componentWillUnmount();
        
    }
     
    componentWillUnmount(){
        
        this.setState({show:false});
        const l = "modal closed";
        this.props.closeModal(l);
        
    }
    render() {
        const ratingsign = <>&#9733;&#9733;&#9733;&#9733;&#9733;</>
        return (

            <Modal isOpen={this.state.show} size="lg" >
                <ModalBody>
                    <div className="row mt-sm-2 ml-sm-2">
                        <div className="col-sm-5">
                            <img className=" img-fluid img-responsive mb-sm-2" src={imag} alt="restaurant_image" style={{}} />
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="" className="d-block ml-2 text-center">Rating</label>
                                    <label htmlFor="" className="d-block ml-2 text-center">Rating</label>
                                    <label htmlFor="" className="d-block ml-2 text-center">Rating</label>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="" className="d-block text-center">{ratingsign}</label>
                                    <label htmlFor="" className="d-block text-center">{ratingsign}</label>
                                    <label htmlFor="" className="d-block text-center">{ratingsign}</label>
                                </div>
                            </div>
                            <div><button className="btn btn-primary mt-2" onClick={this.close}>Close</button></div>
                        </div>
                        <div className="col-sm-7">

                            <label className="display-5 mb-sm-3 ml-4" htmlFor="restaurant_info">Coders Cafe</label>
                            <p className="justify-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, perferendis laborum, animi hic praesentium itaque accusantium commodi dolore beatae magnam similique necessitatibus dolores sapiente ex vel possimus nobis quam molestiae!
                            </p>
                            <div className="d-block bg-image hover-zoom">
                                <img className="inline-item mx-1" src={imag} alt="" style={{height:"50px"}} />
                                <img className="inline-item mx-1" src={imag} alt="" style={{height:"50px"}} />
                                <img className="inline-item mx-1" src={imag} alt="" style={{height:"50px"}} />
                                <img className="inline-item mx-1" src={imag} alt="" style={{height:"50px"}} />
                                <img className="inline-item mx-1" src={imag} alt="" style={{height:"50px"}} />                               
                                
                            </div>

                        </div>
                    </div>
                </ModalBody>
            </Modal>


        );
    }
}

export default (RestaurantInfoModal);