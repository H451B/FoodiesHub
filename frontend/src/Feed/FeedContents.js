import React, { useState, useEffect } from 'react'
import { BiLike, BiDislike } from "react-icons/bi";
import axios from 'axios';
import './FeedContents.css'
import './Feed'

function FeedContents(props) {
    const [likes, setLikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);
    const [comments, setComments] = useState([]);

    const [allLikes, setAllLikes] = useState([]);

    const [userId, setUserId] = useState(0);
    // const [userId, setUserId] = useState('');

    useEffect(() => {
        const id = sessionStorage.getItem('userId');
        setUserId(id);
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5002/feed/${props.data.id}/likes`)
            .then(res => {
                setAllLikes(res.data);
            }).catch(err => console.log(err));

    }, []);

    useEffect(() => {
        const checkUserLiked = () => {
            for (let i = 0; i < allLikes.length; i++) {
                if (Number(allLikes[i].id) === Number(userId)) {
                    setUserLiked(true);
                    break;
                }
            }
        };
        checkUserLiked();
    }, [allLikes, userId]);


    const handleLike = () => {
        if (userLiked) {
            setLikes(likes - 1);
            setUserLiked(false);
        } else {
            setLikes(likes + 1);
            setUserLiked(true);
        }
    };

    return (
        <div className="FeedCard shadow-box-example z-depth-5">
            <h3>{props.data.user.username}</h3>
            <p>{props.data.postText}</p>

            <div className="Reactions">
                <div className="LeftReaction" onClick={handleLike}>
                    {userLiked ? 'Unlike' : <BiLike />}
                    {/* {userId==allLikes[0].user.id ? 'Unlike' : 'Like'} */}
                    <div className="LCounter">{allLikes.length}</div>
                </div>

                <div className="Seperator"></div>

                {/* //Comments Button */}
                <div className="RightReaction" >Comments</div>
            </div>

            {/*All Comments Sections */}
            {/* <div className="post-card__comments">
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            {comment.text} - {comment.user}
                        </li>
                    ))}
                </ul>
            </div> */}

        </div>
    )
}

export default FeedContents


