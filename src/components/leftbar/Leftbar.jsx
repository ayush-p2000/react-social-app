import React from 'react';
import "./leftbar.css"
import {RssFeed, Chat, Videocam, Groups, Bookmarks, QuestionMark, WorkOutline, Event, School} from "@mui/icons-material"

function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarItem">
                        <RssFeed className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Feed</span>
                    </li>
                    <li className="leftbarItem">
                        <Chat className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Chats</span>
                    </li>
                    <li className="leftbarItem">
                        <Videocam className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Videos</span>
                    </li>
                    <li className="leftbarItem">
                        <Groups className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Groups</span>
                    </li>
                    <li className="leftbarItem">
                        <Bookmarks className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarItem">
                        <QuestionMark className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Questions</span>
                    </li>
                    <li className="leftbarItem">
                        <WorkOutline className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Jobs</span>
                    </li>
                    <li className="leftbarItem">
                        <Event className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Events</span>
                    </li>
                    <li className="leftbarItem">
                        <School className="LeftbarItemIcon"/>
                        <span className="leftbarItemText">Courses</span>
                    </li>
                </ul>
                <button className="leftbarButton">
                    Show More
                </button>
                <hr className="leftbarDivider" />
                <ul className="leftbarFriendList">
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/2.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/3.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/4.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/5.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/6.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/7.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/8.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/9.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriendItem">
                        <img className="leftbarFriendImg" src="/assets/people/10.jpeg" alt="RssFeed"/>
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Leftbar;