import React from 'react';
import {BrowserRouter as RRouter,Switch,Route,Link,useHistory} from 'react-router-dom';
import Header from '../Templates/Header';
import './User/UserProfile.css';
import UserInfo from './User/UserInfo'
import Home from '../Home/Home';


function UserDashboard({match}) {
    let history = useHistory();

  function handleClick() {
    history.push("/");
  }

    return (
        <div>
            <div className="u-profile-section">
            <RRouter>
                <div className="left-side">
                    <h4 style={{padding:"5px 5px 20px 10px"}}>Foodies Hub</h4>
                    <div className="DashboardNav">
                        {/* <div className='individual-nav'><Link to="/resProfile/rinfo">Profile</Link></div> */}
                        {/* <div className='individual-nav'><Link to="/resProfile/rmenu">Menu</Link></div> */}
                        <ul className='r-dbord-nav-ul'>
                            <li className='individual-nav'>
                                <Link to={`${match.path}`} style={{color:"white"}}>Profile</Link>
                            </li>
                            <li className='individual-nav'>
                                <Link to={`${match.path}/uorders`} style={{color:"white"}}>Orders</Link>
                            </li>
                            <li className='individual-nav'>
                                <Link to={`${match.path}/uposts`} style={{color:"white"}}>Posts</Link>
                            </li>
                        </ul>
                        <button className='back-home-btn' onClick={handleClick}>Back to Home</button>
                    </div>
                </div>

                <div className="right-side">
                {/* <Header/> */}
                    <div className="right-side-content">
                        <Switch>
                            <Route
                                exact path={`${match.path}`}
                                component={UserInfo}
                            >
                            </Route>
                            {/* <Route exact path={`${match.path}/uorders`} component={RestaurantMenu}></Route> */}
            
                        </Switch>
                    </div>
                </div>
              </RRouter>
            </div>
        </div>
    )
}

export default UserDashboard