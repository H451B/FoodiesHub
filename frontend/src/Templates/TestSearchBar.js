import React from 'react'
import "./TestSearchBar.css"
import { FiSearch } from "react-icons/fi";

function TestSearchBar() {
    return (
        <div className="SearchBar">
            <div className="Srow">
                <input className="Sinput" type="text" placeholder=" Search here..."/>
                <select className="Sfilter">
                    <option>Food</option>
                    <option>Restaurant</option>
                </select>
                <select className="Sfilter">
                    <option>Select</option>
                    <option>Price</option>
                    <option>Rating</option>
                </select>
                <button className="SrchBtn"><FiSearch/></button>
            </div>
        </div>
    )
}

export default TestSearchBar
