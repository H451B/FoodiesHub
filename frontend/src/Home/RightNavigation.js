import React from 'react'
import "./RightNavigation.css"
import { BsArrowRight } from "react-icons/bs";

function RightNavigation() {
    return (
        <div>
            <div className="RightNav">
                <div className="FoodNav">
                    <div className="RightNavBtn fbn1">Burger <BsArrowRight/></div>
                    <div className="RightNavBtn fbn2">Pizza <BsArrowRight/></div>
                    <div className="RightNavBtn fbn3">Biriyani <BsArrowRight/></div>
                </div>
                <div className="RestaurantNav">
                    <div className="RightNavBtn rbn1">Serial Griller <BsArrowRight/></div>
                    <div className="RightNavBtn rbn2">Chillox <BsArrowRight/></div>
                    <div className="RightNavBtn rbn3">Kacchi Dine <BsArrowRight/></div>
                </div>
            </div>
        </div>
    )
}

export default RightNavigation
