import React from 'react'
import './SideDisplay.css'

export const SideDisplay = () => {
    return (
        <>
        <div className="sideBanner">
        <h1>buzanani</h1>
            <div className="personWrap">
                <div className="proPic-and-Name">
                    <ul>
                        <li className="proPic"><a href=""></a></li>
                        <li className="handleName"><a href="">Zuko Tetyana</a></li>
                    </ul>
                </div>
                <div className="statusMessage">
                    <p>Need to spend more time on my GOALS and IDEAS, Capelanet, Buza, Techyana, Nazo, Zux and Bhele Bank - Cape Yard Clan.</p>
                    <button className="like">like</button>
                    <button className="comment">comment</button>
                </div>
            </div>

            <div className="personWrap-Two">
                <div className="proPic-and-Name-Two">
                    <ul>
                        <li className="proPic-Two"><a href=""></a></li>
                        <li className="handleName-Two"><a href="">Amanda Smith</a></li>
                    </ul>
                </div>
                <div className="statusMessage-Two">
                    <p>...just got home and I feel so tired from today's out door activities. I will post visuals here on Buzanani later on</p>
                    <button className="like-two">like</button>
                    <button className="comment-two">comment</button>
                </div>
            </div>

        </div>
        </>
    );
}
export default SideDisplay;