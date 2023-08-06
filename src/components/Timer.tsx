import React, { useState, useEffect } from 'react';

import "../styles/components/Timer.scss";

function Timer() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    function handleStart() {
        setIsActive(true);
        setIsPaused(false);
    };

    function handlePauseResume() {
        setIsPaused(!isPaused);
    };

    function handleReset() {
        setIsActive(false);
        setTime(0);
    };

    function formatTime() {
        return (
            <h1 className='timer__text'>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
                <span>:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                <span>:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </h1>
        )
    }

    useEffect(() => {
        let interval: string | number | NodeJS.Timer | undefined = undefined;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);



    return (
        <div className='timer'>
            <div className='container'>
                <div>{formatTime()}</div>
                <div className='timer__buttons'>
                    <button className={isActive ? (isPaused ? 'button timer__resume__button' : 'button timer__pause__button') : 'button timer__start__button'} onClick={isActive ? handlePauseResume : handleStart}>
                        {isActive ? (isPaused ? 'Resume' : 'Pause') : 'Start'}
                    </button>
                    <button className='button timer__reset__button' onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Timer;