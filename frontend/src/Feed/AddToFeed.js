import React from 'react'
import {BsPlusLg,BsImageFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import './Feed.css'

function AddToFeed() {
    return (
        <div className='addtofeed-container'>
            <div className='addtofeed-left'>
                <div className='addtofood-left-top'>
                    <input type='text' placeholder='Express Your Feelings.... ' className='addtofeed-inp'/>
                </div>
                <div className='addtofeed-left-bottom'>
                    <button>Add Image <BsImageFill/></button>
                    <button>Add Item <MdFastfood/></button>
                </div>
            </div>

            <button className='addtofeed-right'><BsPlusLg/></button>
        </div>
    )
}

export default AddToFeed
