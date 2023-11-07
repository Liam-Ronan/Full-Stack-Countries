import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimeDetails = ({ countryData }) => {
    const [currentUTCTime, setCurrentUTCTime] = useState('');

    useEffect(() => {
        const fetchCountryTime = () => {
            const timeApiUrl = `https://worldtimeapi.org/api/timezone/${countryData.region}/${countryData.capital[0]}`;

            axios.get(timeApiUrl)
                .then(res => {
                    const timeData = res.data;
                    console.log(timeData);
                    
                    const currentTime = new Date(timeData.datetime);
                    const formattedTime = currentTime.toUTCString();
                    setCurrentUTCTime(formattedTime);
                })
                .catch(err => {
                    console.error(err);
                });
        }

        fetchCountryTime();

        const interval = setInterval(fetchCountryTime, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [countryData])

    return (
        <>
            {currentUTCTime ? (<h5 className='text-light fw-light'>{currentUTCTime}</h5>) 
            : 
            (null) }

        </>
    );
}

export default TimeDetails;
