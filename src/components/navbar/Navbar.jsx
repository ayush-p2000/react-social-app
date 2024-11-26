import React from 'react';
import "./navbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"

function Navbar() {
    return (
        <div className="NavbarContainer">
            <div className="NavbarLeft">
                <span className="logo">
                    MySocial
                </span>
            </div>
            <div className="NavbarCenter">
                <div className="SearchBar">
                    <Search className="SearchIcon"/>
                    <input placeholder="Search Anything" className="SearchInput"/>
                </div>
            </div>
            <div className="NavbarRight">
                <div className="NavbarLinks">
                    <span className="NavbarLink">
                        Homepage
                    </span>
                    <span className="NavbarLink">
                        Timeline
                    </span>
                </div>
                <div className="NavbarIcons">
                    <div className="NavbarIconItem">
                        <Person/>
                        <span className="NavbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="NavbarIconItem">
                        <Chat/>
                        <span className="NavbarIconBadge">
                            2
                        </span>
                    </div>
                    <div className="NavbarIconItem">
                        <Notifications/>
                        <span className="NavbarIconBadge">
                            3
                        </span>
                    </div>
                </div>
                <img src="/assets/people/1.jpeg" alt="" className="NavbarImage"/>
            </div>
        </div>
    );
}

export default Navbar;