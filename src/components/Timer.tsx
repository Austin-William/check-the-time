import React, { useState, useEffect } from 'react';

import "../styles/components/Timer.scss";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function handleStartStop() {
        setIsActive((prevState) => !prevState);
    };

    function handleReset() {
        setSeconds(0);
        setIsActive(false);
    };

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className='timer'>
            <h1>Timer: {seconds}s</h1>
            <button onClick={handleStartStop}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Timer;