import React from 'react'
import './MainDisplay.css'

export const MainDisplay = () => {
    return (
        <>
    <div className="displayBanner">
    
    <a className="mailLink"href="#">Buza-mail</a>
        <label className="searchLabel">Search</label>
        <input className="searchBar" placeholder="buza something..."></input>
        
        <div className="search-bar-links">
                <ul>
                    <li><a href="#">articles</a></li>
                    <li><a href="#">images</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">books</a></li>
                    <li><a href="#">maps</a></li>
                </ul>
            </div>
    </div>
    </>
    );
}
export default MainDisplay;