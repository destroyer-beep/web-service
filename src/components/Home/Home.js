import React from "react";
import Slider from "./Slider/Slider";
import UsersContainer from "./Users/Users";
import Description from "./Description/Description";
import History from "./History/History";


const Home = () => {
    return (
        <div className="home">
            <Slider/>
            <UsersContainer/>
            <Description/>
            <History/>
        </div>
    )
}

export default Home;