import React from 'react'
import "./RestaurateurDashboard.css"
import {BrowserRouter as RRouter,Switch,Route,Link,useHistory} from 'react-router-dom';
import RestaurantInfo from './Restaurateur/RestaurantInfo';
import RestaurantMenu from './Restaurateur/RestaurantMenu';

// const routes = [
//     {
//       path: "/resProfile",
//       exact: true,
//       main: () => <RestaurantInfo/>
//     },
//     {
//       path: "/resProfile/rmenu",
//       main: () => <RestaurantMenu/>
//     }
// ];

export default function RestaurateurDashboard({match}) {

    // let { path, url } = useRouteMatch();
    // console.log(match);
    // console.log(history);
    // console.log(location);
    // const history = useHistory();

    return (
        <div>
            <div className="profile-section">
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
                                <Link to={`${match.path}/rmenu`} style={{color:"white"}}>Menu</Link>
                            </li>
                            <li className='individual-nav'>
                                <Link to={`${match.path}/rorders`} style={{color:"white"}}>Orders</Link>
                            </li>
                            <li className='individual-nav'>
                                <Link to={`${match.path}/rreports`} style={{color:"white"}}>Reports</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="right-side">
                    <div className="right-side-content">
                        <Switch>
                            <Route
                                exact path={`${match.path}`}
                                component={RestaurantInfo}
                            >
                            </Route>
                            <Route exact path={`${match.path}/rmenu`} component={RestaurantMenu}></Route>
            
                        </Switch>
                    </div>
                </div>
              </RRouter>
            </div>
        </div>
    )
}
