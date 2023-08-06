import React, { useState } from 'react';

import Clock from '../components/Clock';
import Timer from '../components/Timer';

import "../styles/pages/Home.scss";
import Navbar from '../components/Navbar';

function Home() {
    const [key, setKey] = useState("clock");

    function switchScreenDisplay() {
        switch (key) {
            case "clock":
                return <Clock />;
            case "timer":
                return <Timer />;

            default:
                break;
        }
    }

    return (
        <div className='home'>
            <div className='home__container'>
                <Navbar value={key} setKey={setKey} />
                <div className='home__screen'>
                    {
                        switchScreenDisplay()
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;