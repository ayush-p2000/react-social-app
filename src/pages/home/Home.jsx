import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

function Home() {
    return (
        <>
            <Navbar/>
            <div className="HomeContainer">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>

        </>

    );
}

export default Home;