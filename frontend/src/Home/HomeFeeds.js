import React from 'react'
import { BiLike,BiDislike } from "react-icons/bi";
import "./HomeFeeds.css"

function HomeFeeds() {
    return (
        <>
          <div className="FeedCard shadow-box-example z-depth-5">
              <h3>Author</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsa consequuntur magnam iste in veritatis reprehenderit natus voluptatum sunt, ex tempora, nemo facilis vitae molestiae assumenda repellendus illum iusto aliquam?</p>
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
        </>
    )
}

export default HomeFeeds;
