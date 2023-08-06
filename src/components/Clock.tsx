import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

import "../styles/components/Clock.scss";
import List from './List';

function Clock() {
    const [selectedCountry, setSelectedCountry] = useState('Europe/Paris');
    const [currentTime, setCurrentTime] = useState(moment().tz(selectedCountry).format('HH:mm:ss'));
    const [inputText, setInputText] = useState("");

    function inputHandler(e: { target: { value: string; }; }) {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    function handleCountryChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setSelectedCountry(event.target.value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().tz(selectedCountry).format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, [selectedCountry, currentTime]);

    return (
        <div className='clock'>
            <div className='container'>
                <div className='title'>
                    <h2>Time in <strong>{selectedCountry}</strong></h2>
                    <h3>{currentTime}</h3>
                </div>
                <div className='content'>
                    <input className='search__bar' type="text" placeholder="Search for a country..." value={inputText} onChange={inputHandler} />
                    <List input={inputText} country={handleCountryChange} selectedCountry={selectedCountry} />
                </div>
            </div>
        </div>
    )
}

export default Clock;