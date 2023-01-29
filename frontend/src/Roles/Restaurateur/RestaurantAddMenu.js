import React from 'react'
import './Restaurateur.css'

function RestaurantAddMenu() {
    return (
        <div className="r-add-menu">
            <form className='r-add-menu-form'>
                <div className='r-add-menu-photo'>click to add photo</div>
                <input placeholder="Name of food"/>
                <input placeholder="Type of food"/>
                <input placeholder="Category of food"/>
                <input placeholder="Description of food"/>
                <input placeholder="Price of food"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default RestaurantAddMenu
