import React from 'react'
import { GrDocumentUpdate } from 'react-icons/gr';
import { Modal } from 'reactstrap';
import DataStore from '../../Templates/DataStore';
import FileControl from '../../Templates/FileControl';

function UserInfo() {
    let userInfo = '';
    if(!sessionStorage.getItem('user'))window.location.replace('/');

    userInfo = JSON.parse(sessionStorage.getItem('user'));
    const fileC = new FileControl();
    var showUpdate = false;
    function updateWindow(){
        showUpdate = !showUpdate;
    }
    return (
        <div className='u-info'>
            <div className="r-profile-info" style={{display:"flex"}}>
                <div className="r-photo">
                    <img src={fileC.getFile(userInfo.picture)} alt={userInfo.picture} />
                </div>
                <div className='r-info-actual'>
                    <h3>{userInfo.name} </h3>
                    <div className='r-info-specific'>
                        <label className='r-info-specific-label1'>Name </label>
                        <label>:</label>
                        <label>{userInfo.username} </label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Email</label>
                        <label>:</label>
                        <label>{userInfo.email} </label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Phone </label>
                        <label>:</label>
                        <label>{userInfo.phone} </label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Location </label>
                        <label>:</label>
                        <label>{userInfo.location} </label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Address </label>
                        <label>:</label>
                        <label>{userInfo.location} </label>
                    </div>
                    <button style={{background:"var(--beta-color)",color:"white"}} onClick={(e)=>updateWindow(e)}>Update</button>
                </div>
            </div>
            <Modal isOpen={showUpdate} toggle={()=>updateWindow()}>
                <form className="form">
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="password" name="password" />
                    <input type="file" name="picture"  />
                </form>
            </Modal>
        </div>
    )
}

export default UserInfo
