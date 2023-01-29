import React,{useState} from 'react'
import './RestaurateurSign.css'
import {Link,useHistory} from "react-router-dom"
import bgimg from '../img/resSignPage.png'
import { Modal } from 'reactstrap';
import axios from 'axios';


function RestaurateurSign() {

    const [REmail,setREmail] =useState('');
    const [RPass,setRPass]=useState('')
    const [signInData, setInData] = useState({});
    const history = useHistory();

    const [regModalOpen, setRegModalOpen] = useState(false);
    const toggleReg = () => setRegModalOpen(!regModalOpen);

    function getDataIn(e) {
        setInData({ ...signInData, [e.target.name]: e.target.value });
    }

    function sendData(e) {
        e.preventDefault();
        // console.log(inputData);
        if ((Object.keys(signInData).length) > 0) {
        axios.post('http://localhost:5002/rlogin' ,signInData)
        .then(res=>{
            if(res.data.name){
                localStorage.setItem('id', res.data.id);
                history.push('resProfile')
            }else{
                window.alert('User Not Found')
            }

        }).catch(err=>{
            console.log('Something Wrong!: ',err);
        })
        }
    }

    return (
        <div className="r-sign">
            <div className="r-heading">
            <h2>Foodies Hub</h2>
            <h4>Food finding, ordering & community system.</h4>
            </div>
            <div className="r-body">
                <div className="resSignImg" >
                    <img src={bgimg} />
                </div>

            {/*RESTAURATEUR REGISTRATION*/ }
            <Modal
                className='reg-modal'
                isOpen={regModalOpen}
                toggle={() => setRegModalOpen(!regModalOpen)}
            >
            <div className="r-form r-reg">
                <form>
                    <h4>Register Your Restaurant</h4>
                    <input
                        className="r-input"
                        type="text" 
                        required 
                        placeholder="Name of Your Restaurant"
                    ></input>

                    <input
                        className="r-input"
                        type="text"
                        required
                        placeholder="Address"
                    ></input>

                    <input
                        className="r-input"
                        type="email"
                        required
                        placeholder="Email Address"
                    ></input>

                    <input
                        className="r-input"
                        type="text"
                        required
                        placeholder="Phone Number"
                    ></input>

                    <input
                        className="r-input"
                        type="password"
                        required
                        placeholder="Password"
                    ></input>

                    <input
                        className="r-input"
                        type="password"
                        required
                        placeholder="Confirm Password"
                    ></input>

                    <button className="r-btn">Register</button>
                </form>
            </div>
            </Modal>

        
            {/* RESTAURATEUR LOGIN */}
            <div className="r-form r-log">
                <form>
                    <h4>Goto Profile</h4>
                    <input 
                        className="r-input" 
                        type="email" 
                        name='email'
                        required 
                        placeholder="Enter your email"
                        onChange={(e) => getDataIn(e)}
                    ></input>
                    <input 
                        className="r-input" 
                        type="password" 
                        name='password'
                        required 
                        placeholder="Enter your password"
                        onChange={(e) => getDataIn(e)}
                    ></input>
                    <br/>
                    <Link to='#' className='forgot-link'>Forgot password</Link>
                    <button className="r-btn" onClick={(e) => sendData(e)}>LogIn</button>
                    <button className="r-btn-2" onClick={toggleReg}>Register Restaurant</button>
                    {/* <div className="resSignImg" >
                        <img src={bgimg} />
                    </div> */}
                </form>
            </div>
            </div>
        </div>
    )
}

export default RestaurateurSign
