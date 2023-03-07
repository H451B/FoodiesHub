import React,{ useState, useEffect } from 'react'
import { BiLike,BiDislike } from "react-icons/bi";
import './FeedContents.css'
import './Feed'

function FeedContents(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);
    const [userDisliked, setUserDisliked] = useState(false);
    // const [comments, setComments] = useState([]);
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


    const handleDislike = () => {
        if (userDisliked) {
            setDislikes(dislikes - 1);
            setUserDisliked(false);
        } else {
            setDislikes(dislikes + 1);
            setUserDisliked(true);
        }
    };

    return (
            <div className="FeedCard shadow-box-example z-depth-5">
              <h3>{props.data.user.username}</h3>
              <p>{props.data.postText}</p>
              {/* {console.log(props.data.postText)} */}

              <div className="Reactions">
                  <div className="LeftReaction" onClick={handleLike} disabled={userDisliked}>
                      {userLiked ? 'Unlike' : <BiLike/>}
                      {/* <BiLike/> */}
                      {/* {console.log(props.data.postText)} */}
                      <div className="LCounter">{likes}</div>
                  </div>
                  <div className="Seperator"></div>
                  <div className="RightReaction" onClick={handleDislike} disabled={userLiked}>
                      {userDisliked ? 'Undislike' : <BiDislike/>}
                      {/* <BiDislike/> */}
                      <div className="DCounter">{dislikes}</div>
                  </div>
              </div>

            </div>
    )
}

export default FeedContents


