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
                    <p>Looking forward to 2021, it's the year I make my first R1 million :) Capelanet, Buza, Techyana, Nazo, Zux - Cape Yard Clan.</p>
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
                    <p>...just got home and I'm feeling drained from the hiking trip we took, I did enjoy the scenery though - so tired ahhh :( :(</p>
                    <button className="like-two">like</button>
                    <button className="comment-two">comment</button>
                </div>
            </div>

        </div>
        </>
    );
}
export default SideDisplay;