import React from 'react';

import Clock from '../components/Clock';
import Timer from '../components/Timer';

import "../styles/pages/Home.scss";

function Home() {
    const [key, setKey] = React.useState("clock");

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
                <div className='home__buttons'>
                    <div className='home__button'>
                        <input type="radio" name="screen" id="clock" value="clock" checked={key === "clock"} onChange={() => setKey("clock")} />
                        <label htmlFor="clock">Clock</label>
                    </div>
                    <div className='home__button'>
                        <input type="radio" name="screen" id="timer" value="timer" checked={key === "timer"} onChange={() => setKey("timer")} />
                        <label htmlFor="timer">Timer</label>
                    </div>
                </div>
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