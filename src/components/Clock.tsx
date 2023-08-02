import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

import "../styles/components/Clock.scss";

function Clock() {
    const [selectedCountry, setSelectedCountry] = useState('UTC');
    const [currentTime, setCurrentTime] = useState(moment().tz('UTC').format('HH:mm:ss'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().tz(selectedCountry).format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, [selectedCountry, currentTime]);

    function handleCountryChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setSelectedCountry(event.target.value);
    };

    return (
        <div className='clock'>
            <div className='container'>
                <div className='left'>
                    <div className='localisation'>
                        <h1>World Clock</h1>
                        <label>Select Country:</label>
                        <select value={selectedCountry} onChange={handleCountryChange}>
                            <option value="UTC">UTC</option>
                            <option value="America/New_York">New York</option>
                            <option value="Europe/London">London</option>
                            <option value="Asia/Tokyo">Tokyo</option>
                        </select>
                    </div>
                </div>
                <div className='right'>
                    <div className='time'>
                        <h2>Time in {selectedCountry}:</h2>
                        <p>{currentTime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock;