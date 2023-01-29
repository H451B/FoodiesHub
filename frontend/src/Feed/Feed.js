import React, { useEffect, useState } from 'react';
import Header from '../Templates/Header'
import Footer from '../Templates/Footer'
import AddToFeed from './AddToFeed'
import FeedContents from './FeedContents'
import './Feed.css'
import MiniSearch from './MiniSearch'
import Calendar from 'react-calendar'
import { BsPlusLg } from "react-icons/bs";
import { Modal } from 'reactstrap';
import axios from 'axios';

const Event = [
    'Bye Bye December', 'Victory Day Special', 'Birthday'
]

const Tags = [
    '#burger', '#pizza', '#serialgriller', '#chickenexpress', '#icecream', '#cake'
]


function Feed() {

    //fetching all posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5002/feed')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    //floating button to make post when scrolling
    const [showFeedFloat, setShowFeedFloat] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 227) {
                setShowFeedFloat(1)
            } else {
                setShowFeedFloat(0)
            }
        }
    }, []);

    //POPUP when click floating "make post" button
    const [feedModalOpen, setFeedModalOpen] = useState(false);
    const toggle = () => setFeedModalOpen(!feedModalOpen);

    //LEFT SIDE
    const Events = [];
    for (var i = 0; i < Event.length; i++) {
        Events.push(<FeedEvent events={Event[i]} />);
    }

    const AllTags = [];
    for (var j = 0; j < Tags.length; j++) {
        AllTags.push(<FeedTags tags={Tags[j]} />);
    }
    //END LEFT SIDE

    return (
        <div className='feed-container'>
            {/* <Header/> */}
            <div style={{ height: "57px" }}><Header /></div>

            {/* LEFT SIDE BAR */}
            <div className='row main-container'>
                <div className='col feed-left'>
                    <MiniSearch />

                    <div className='feed-events-area'>
                        <h4>Events</h4>
                        {Events}
                    </div>

                    <div className='feed-tags-area'>
                        <h4 className='feed-tags-title'>Tags</h4>
                        <div className='feed-tags'>{AllTags}</div>
                    </div>
                </div>


                {/* {Middle SIDE BAR} */}
                <div className='col-6 feed-main'>
                    <AddToFeed />

                    {/* REST API FETCH DATA */}
                    {posts.map(post => (
                        <div key={post.id}>
                        <FeedContents data={post}/>
                      </div>
                    ))}
                    {/* END REST API FETCH DATA */}

                </div>


                {/* RIGTH SIDE BAR */}
                <div className='col feed-right'>
                    <div className='feed-right-calender'>
                        <Calendar />
                    </div>

                    {showFeedFloat ? (
                        <button className='add-to-feed-float' onClick={toggle}>
                            <BsPlusLg />
                        </button>
                    ) : (<div></div>)}
                    <Modal
                        isOpen={feedModalOpen}
                        toggle={() => setFeedModalOpen(!feedModalOpen)}
                        className='float-add-to-feed-modal'
                    >
                        <AddToFeed />
                    </Modal>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Feed

function FeedEvent({ events }) {
    return (
        <div className='feed-event'>{events}</div>
    )
}
function FeedTags({ tags }) {
    return (
        <div className='feed-tag'><p>{tags}</p></div>
    )
}

