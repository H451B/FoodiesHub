import React, { useState,useEffect } from 'react'
import { GrAdd } from "react-icons/gr";
import RestaurantAddMenu from "./RestaurantAddMenu"
import { Modal } from 'reactstrap';
import './Restaurateur.css'
import axios from 'axios';

function RestaurantMenu() {
    // const [show, setShow] = useState(false);
    const [allFood, setAllFood] = useState([]);
    useEffect(() => {
            const fetchData = async () =>{
                try {
                  const {data: response} = await axios.get('http://localhost:5002/menu');
                  setAllFood(response);
                  console.log(response);
                } catch (error) {
                  console.error(error.message);
                }
              }
          
              fetchData();
      },[])
    const [modalOpen, setModalOpen] = useState(false);
    const toggle = () => setModalOpen(!modalOpen);

    return (
        <div>
            <div className="r-profile-menu">
                    <div className="type-card" style={{display:"flex"}}>
                        <h3 style={{margin:"0 20px 0 0"}}>Menu</h3>
                        <button 
                            style={{color:"white",background:"var(--beta-color)"}}
                            onClick={toggle}
                        >Add Menu</button>
                    </div>
                    <Modal
                    isOpen={modalOpen}
                    toggle={() => setModalOpen(!modalOpen)}
                    >
                    <RestaurantAddMenu/>
                    </Modal>
                    <div className="type-card">
                        <h4>Foods</h4>
                        {allFood ? allFood.map(data => {
                    return(
                        <div className="item-card-m" key={data.id}>
                            <div className="item-card-n"><h4>{data.price}</h4></div>
                        </div>
                    )
                    }) : <h3>Didn't get any</h3> }
                    </div>
                </div>
        </div>
    )
}

export default RestaurantMenu
