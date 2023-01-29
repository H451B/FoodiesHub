import React from 'react'
import { useState } from "react";
import './UserSign.css'
import md5 from 'md5';
import axios from 'axios';
import { Alert, Modal } from 'reactstrap';

function UserSign() {
    const [toggleState, setToggleState] = useState(1);
    const [formData,setFormData] = useState(new FormData());
    const [signInData, setInData] = useState({});
    const [signUpData, setUpData] = useState({});
    const [imgData, setimgdata] = useState('');
    const [passWord,setpassword] = useState('');
    const [confirmPassword,setconPass] = useState(false);
    const [Data,setdata] = useState(null);
    let responseData = '';
    var alertOpen = false;

    // setInputData({['hello']:'noway'});

    const toggleTab = (index) => {
        setToggleState(index);
    };

    function getDataIn(e) {
        let hashedPass = null;
        if (e.target.name == 'password') {
            hashedPass = md5(e.target.value);
            setInData({ ...signInData, [e.target.name]: hashedPass });
        } else setInData({ ...signInData, [e.target.name]: e.target.value });
    }
    
    function getDataUp(e) {
    let hashedPass = null;
        if (e.target.name == 'password') {
            setpassword(e.target.value);
            hashedPass = md5(e.target.value);
            setUpData({ ...signUpData, [e.target.name]: hashedPass });
        }else if(e.target.name == 'confirmpassword'){
            if(!(passWord == e.target.value)){
                setconPass(true);
            }else if(passWord == e.target.value) setconPass(false);
        } 
        else setUpData({ ...signUpData, [e.target.name]: e.target.value });
    }

    function getResponse(){
        console.log(responseData);      
        console.log(Data);  
    }


    function getFile(e) {

    }

    function sendData(e) {
        e.preventDefault();
        // console.log(inputData);
        if ((Object.keys(signInData).length) > 0) {
            // Object.entries(signInData).forEach(([i, v]) => {
            //     console.log(i, v);
            //     formData.append(i, v);
            // });
            var urL = 'http://localhost:5002/signin';
        axios.post(urL,signInData)
        .then(res=>{
            responseData=res.data;
            getResponse();
            sessionStorage.setItem('user',JSON.stringify(responseData));
            window.location.replace('/user');
        }).catch(err=>{
            console.log('Something Wrong!: ',err);
        })
        }
        else if((Object.keys(signUpData).length)>0){
            // Object.entries(signUpData).forEach(([i, v]) => {
            //     console.log(i, v);
            //     setFormData(formData.append(i, v));
            // });     
            var urL = 'http://localhost:5002/signup';
        axios.post(urL,signUpData)
        .then(res=>{
            responseData = res.data;
            setdata((responseData));
            getResponse();
            alertOpen = !alertOpen;
            setTimeout(() => {
                alertOpen = !alertOpen;
                window.location.replace('/');
            }, 3000);
        }).catch(err=>{
            console.log('Something Wrong!: ',err);
        })       
        }

        
    }

    return (
        <div className="user-sign-container">
            <Modal isOpen={alertOpen}>
                <Alert>{responseData.message?responseData.message:''}</Alert>
            </Modal>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    LogIn
                </button>

                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    SignUp
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <form>
                        <input className="ul ul-uname" type="text" placeholder="Email" name="email" onChange={(e) => getDataIn(e)} />
                        <input className="ul ul-pass" type="password" placeholder="Password" name="password" onChange={(e) => getDataIn(e)} />
                        <button className="ul-btn" onClick={(e) => sendData(e)}>LogIn</button>
                    </form>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <form>
                        <input className="ul ul-uname" type="text" placeholder="Username" name="username" onChange={(e)=>getDataUp(e)} />
                        <input className="ul ul-email" type="email" placeholder="Email" name="email" onChange={(e)=>getDataUp(e)} />
                        <input className="ul ul-pass" type="password" placeholder="Password" name="password" onChange={(e)=>getDataUp(e)} />
                        <div><input className="ul ul-cpass" type="password" placeholder="Confirm Password" name="confirmpassword" onChange={(e)=>getDataUp(e)} />
                        {confirmPassword?(<span className="text-danger">Password Not Matched!</span>):''}
                        </div>
                        <button className="ul-btn" onClick={(e)=>sendData(e)} >SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserSign;
