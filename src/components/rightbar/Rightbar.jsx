import React from 'react';
import "./rightbar.css"

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="BirthdayContainer">
                    <img className="BirthdayImg" src="/assets/gift.png"  alt=""/>
                    <span className="BirthdayText"><b>Pola Foster</b> and <b>3 others</b> have their birthdays</span>
                </div>
                {/*<img className="rightbarAd" src="/assets/ad.png"  alt=""/>*/}
                {/*<h4 className="rightbarTitle"> Online Friends</h4>*/}
                {/*<ul className="rightbarFriendList">*/}
                {/*    <li className="rightbarFriend">*/}
                {/*        <div className="rightbarProfileImgContainer">*/}
                {/*            <img className="rightbarProfileImg" src="/assets/people/2.jpeg"  alt=""/>*/}
                {/*            <span className="rightbarOnline"><b>Pola Foster</b></span>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </div>
    );
}

export default Rightbar;