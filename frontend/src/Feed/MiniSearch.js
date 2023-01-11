import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import './Feed.css'

function MiniSearch() {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." className="search-inp" />
            <div className="search-ico"><BiSearchAlt/></div>
        </div>
    )
}

export default MiniSearch
