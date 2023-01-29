import React,{useEffect,useState} from 'react'
import './Restaurateur.css'
import axios from 'axios';

function RestaurantInfo() {
    // console.log(localStorage.getItem('id'))
    const [data, setData] = useState([]);
    const [rid,setRid]=useState(localStorage.getItem('id'));
    useEffect(() => {
            const fetchData = async () =>{
                try {
                  const {data: response} = await axios.get('http://localhost:5002/restaurants/'+rid);
                  setData(response);
                } catch (error) {
                  console.error(error.message);
                }
              }
          
              fetchData();
      },[])

    return (
        <div className="r-info">
            <div className="r-profile-info" style={{display:"flex"}}>
                <div className="r-photo">.jpg</div>
                <div className='r-info-actual'>
                    <h3>Restaurant Information</h3>
                    <div className='r-info-specific'>
                        <label className='r-info-specific-label1'>Name </label>
                        <label style={{padding:"0 6px 0 0"}}>:</label>
                        <label> {data.name}</label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Description </label>
                        <label style={{padding:"0 6px 0 0"}}>:</label>
                        <label>{data.description}</label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Email </label>
                        <label style={{padding:"0 6px 0 0"}}>:</label>
                        <label>{data.email}</label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Phone </label>
                        <label style={{padding:"0 6px 0 0"}}>:</label>
                        <label>{data.phone}</label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Address </label>
                        <label style={{padding:"0 6px 0 0"}}>:</label>
                        <label>{data.address}</label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Coordinates </label>
                        <label style={{padding:"0 6px 0 0"}}>:</label>
                        <label>{data.latLongitude}</label>
                    </div>
                    <button style={{background:"var(--beta-color)",color:"white"}}>Update</button>
                </div>
            </div>

            <div className='r-row-second'>
                <div className='r-row-s'>Ratings</div>
                <div className='r-row-s'>Total Orders</div>
                <div className='r-row-s'>Revenue</div>
            </div>
            <div className='r-row-third'>Statistics</div>
        </div>
    )
}

export default RestaurantInfo