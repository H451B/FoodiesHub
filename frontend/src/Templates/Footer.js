import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
    constructor(props){
        super(props);
        this.d = new Date();
        this.curYear = this.d.getFullYear();
    //    console.log(this.curYear);
    }
    
    render() { 
        return(
        <div className='foodies-footer'>
        {/* <div className="text-center bg-warning m-sm-0 border-top border-dark my-md-2 ">
            <code className="bg-warning">Copyright @ {this.curYear}</code>
        </div> */}
            <div className='row'>
                <div className='col'>
                    <h4>Foodies Hub</h4>
                    <p>Food Finding, Ordering & Community system</p>
                    <form>
                        <input type='text' placeholder='Enter Your Name' className='inp-footer'/>
                        <input type='text' placeholder='Enter Your Email' className='inp-footer'/>
                        <input type='text' placeholder='Message...' className='inp-footer'/>
                        <br/><button className='btn-footer'>Send</button>
                    </form>
                </div>

                <div className='col'>
                    <h5>Contacts</h5>
                    <p>Mail : foodies.hub@yahoo.com</p>
                    <p>Phone : 0000 - 000 - 0000</p>
                    <p>Fax : 000 - 000 - 0 - 0000</p>
                    <BsFacebook/>
                </div>

                <div className='col'>
                    <h5>Discover</h5>
                    <p>Offers & Events</p>
                    <p>Top 100 Restaurants</p>
                    <p>Top 100 Food Items</p>
                    <p>Top Contributors</p>
                </div>

                <div className='col'>
                    <h5>OpenTo</h5>
                    <p>Careers</p>
                    <p>Advertise</p>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col'>Privacy Policy</div>
                <div className='col'>Terms of Use</div>
                <div className='col'>Help & Support</div>
                <div className='col'>Mobile App</div>
            </div>
            <hr/>
            <div className='row'>
                <div className="text-center bg-danger m-sm-0 border-top border-dark my-md-2 ">
                    <code className="bg-danger copyright">Copyright @ {this.curYear}, All Right Reserved</code>
                </div>
            </div>

        </div>
        )
    }
}
 
export default Footer;
