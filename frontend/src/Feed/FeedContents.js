import React, { useState, useEffect } from 'react'
import { BiLike, BiDislike } from "react-icons/bi";
import './FeedContents.css'
import './Feed'

function FeedContents(props) {
    const [likes, setLikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('userId');
        setUserId(id);
    }, []);


    const handleLike = () => {
        if (userLiked) {
            setLikes(likes - 1);
            setUserLiked(false);
        } else {
            setLikes(likes + 1);
            setUserLiked(true);
        }

        // axios.post(`/api/posts/${post.id}/like`).then((response) => {
        //     setLiked(true);
        //   }).catch((error) => {
        //     console.error(error);
        //   });
    };

    return (
        <div className="FeedCard shadow-box-example z-depth-5">
            <h3>{props.data.user.username}</h3>
            <p>{props.data.postText}</p>
            {/* {console.log(props.data.postText)} */}

            <div className="Reactions">
                <div className="LeftReaction" onClick={handleLike}>
                    {userLiked ? 'Unlike' : <BiLike />}
                    {/* <BiLike/> */}
                    {/* {console.log(props.data.postText)} */}
                    <div className="LCounter">{likes}</div>
                </div>

                <div className="Seperator"></div>

                {/* //Comments Button */}
                <div className="RightReaction" >Comments</div>
            </div>

            {/*All Comments Sections */}
            <div className="post-card__comments">
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            {comment.text} - {comment.user}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default FeedContents


