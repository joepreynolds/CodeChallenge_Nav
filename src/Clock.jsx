import React, { useState, useEffect } from 'react';
import './css/clock.css'

const cityTimeZones = {
  'Cupertino': 'America/Los_Angeles',
  'New York City': 'America/New_York',
  'London': 'Europe/London',
  'Amsterdam': 'Europe/Amsterdam',
  'Tokyo': 'Asia/Tokyo',
  'Hong Kong': 'Asia/Hong_Kong',
  'Sydney': 'Australia/Sydney',

};

const Clock = ({ cityName }) => {

  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const timeZone = cityTimeZones[cityName];
      if (!timeZone) {
        setLocalTime('Time zone not found');
        return;
      }

      const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: timeZone,
        hour12: true,
      });

      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    //vanilla.js
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId); 
  }, [cityName]);

  return (
    
      <div>
        <p className='clockText'>The local time in <strong>{cityName} </strong>is: </p>
        <div className="digital-clock">
          {localTime}
        </div>
    </div>
  );
};

export default Clock;