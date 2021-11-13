import React from 'react';
import './SideNav.css';

export const SideNav = () => {
    return (
    <>
    <div className="side-bar-nav">
        <div className="side-bar-items">
            <div className="main-heading">
            <ul>
                <li className="logoPic"><a href=""></a></li>
            </ul>
            </div>
            <div className="side-bar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Latest News</a></li>
                    <li><a href="#">Financials</a></li>
                    <li><a href="#">Listings</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
    );
}

export default SideNav;
