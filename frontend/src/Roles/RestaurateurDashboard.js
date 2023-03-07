import React, { useEffect } from 'react'
import "./RestaurateurDashboard.css"
import { BrowserRouter as RRouter, Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';
import RestaurantInfo from './Restaurateur/RestaurantInfo';
import RestaurantMenu from './Restaurateur/RestaurantMenu';

// TEST 1
// const routes = [
//     {
//         path: "business/resProfile",
//         exact: true,
//         main: () => <RestaurantInfo/>
//     },
//     {
//         path: "business/rmenu",
//         main: () => <RestaurantMenu/>
//     }
// ];

export default function RestaurateurDashboard({ match }) {

    return (
        <div>
            <div className="profile-section">
                <RRouter>

                    {/* LEFT SIDE */}
                    <div className="left-side">
                        <h4 style={{ padding: "5px 5px 20px 10px" }}>Foodies Hub</h4>
                        <div className="DashboardNav">

                            <ul className='r-dbord-nav-ul'>
                                <li className='individual-nav'>
                                    <Link to={`${match.path}`} style={{ color: "white" }}>Profile</Link>
                                </li>

                                <li className='individual-nav'>
                                    <Link to={`${match.path}/rmenu`} style={{ color: "white" }}>Menu</Link>
                                </li>

                                <li className='individual-nav'>
                                    <Link to={`${match.path}/rorders`} style={{ color: "white" }}>Orders</Link>
                                </li>

                                <li className='individual-nav'>
                                    <Link to={`${match.path}/rreports`} style={{ color: "white" }}>Reports</Link>
                                </li>

                                {/* TEST 1 */}
                                {/* <li>
                                    <Link to="business/resProfile">Profile</Link>
                                </li>
                                <li>
                                    <Link to="business/rmenu">Menu</Link>
                                </li> */}
                            </ul>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="right-side">
                        <div className="right-side-content">
                            <Switch>
                                <Route
                                    exact path={`${match.path}`}
                                    component={RestaurantInfo}
                                >
                                </Route>
                                <Route
                                    exact path={`${match.path}/rmenu`}
                                    component={RestaurantMenu}
                                >
                                </Route>
                            </Switch>

                            {/* TEST 1 */}
                            {/* <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch> */}
                        </div>
                    </div>
                </RRouter>
            </div>
        </div>
    )
}
