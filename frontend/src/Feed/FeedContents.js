import React from 'react'
import { BiLike,BiDislike } from "react-icons/bi";
import './FeedContents.css'
import './Feed'

function FeedContents(props) {
    return (
            <div className="FeedCard shadow-box-example z-depth-5">
              <h3>{props.data.user.username}</h3>
              <p>{props.data.postText}</p>
              <div className="Reactions">
                  <div className="LeftReaction">
                      <BiLike/>
                      <div className="LCounter">100</div>
                  </div>
                  <div className="Seperator"></div>
                  <div className="RightReaction">
                      <BiDislike/>
                      <div className="DCounter">9</div>
                  </div>
              </div>
            </div>
    )
}

export default FeedContents


