import React from 'react';

import '../styles/components/Navbar.scss';

function Navbar(props: { value: string; setKey: (arg0: string) => void; }) {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='button'>
                    <input type="radio" name="screen" id="clock" value="clock" checked={props.value === "clock"} onChange={() => props.setKey("clock")} />
                    <label htmlFor="clock">Clock</label>
                </div>
                <div className='button'>
                    <input type="radio" name="screen" id="timer" value="timer" checked={props.value === "timer"} onChange={() => props.setKey("timer")} />
                    <label htmlFor="timer">Timer</label>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
