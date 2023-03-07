import React, { useState, useEffect } from 'react';

const SocialPostCard = (props) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);
    const [userDisliked, setUserDisliked] = useState(false);
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


    const handleDislike = () => {
        if (userDisliked) {
            setDislikes(dislikes - 1);
            setUserDisliked(false);
        } else {
            setDislikes(dislikes + 1);
            setUserDisliked(true);
        }
    };


    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const comment = e.target.elements.comment.value;
        // Send request to server with comment text and userId
        setComments([...comments, { userId, comment }]);
    };


    return (
        <div className="social-post-card">
            <p>{props.postText}</p>

            {/* AGREE/DISAGREE */}
            <div className="interactions">
                <button onClick={handleLike} disabled={userDisliked}>
                    {userLiked ? 'Unlike' : 'Like'}
                </button>
                <span>{likes}</span>

                <button onClick={handleDislike} disabled={userLiked}>
                    {userDisliked ? 'Undislike' : 'Dislike'}
                </button>
                <span>{dislikes}</span>
            </div>

            {/* COMMENTS */}
            <form onSubmit={handleCommentSubmit}>
                <textarea name="comment" />
                <button type="submit">Comment</button>
            </form>
            <div className="comments">
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.userId}: {comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SocialPostCard;