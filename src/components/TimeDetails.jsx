import React, { useState, useEffect } from 'react';
import axios from 'axios';

const timeApiKey = import.meta.env.VITE_NINJA_API_KEY;

const TimeDetails = ({ countryData }) => {
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        const fetchCountryTime = () => {
            axios({
                method: 'get',
                url: `https://api.api-ninjas.com/v1/worldtime?city=${countryData.capital[0]}`,
                headers: {
                    'X-Api-Key': timeApiKey,
                },
                responseType: 'json', // Ensure the response is treated as JSON
            })
                .then(res => {
                    console.log(res.data);
                    const timeData = res.data;
                    const date = new Date(timeData.datetime);
                    const monthName = date.toLocaleString('default', { month: 'long' });
                    const formattedTime = `${timeData.day_of_week}, ${timeData.day}, ${monthName} ${timeData.hour}:${timeData.minute}`;
                    setFormattedTime(formattedTime);
                })
                .catch(err => {
                    console.error('Error: ', err);
                });
        }

        fetchCountryTime();
    }, [countryData]);

    return (
        <>
            {formattedTime ? (
                <p className='text-light fw-light pt-3 fs-4'>{formattedTime}</p>
            ) : (
                null
            )}
        </>
    );
}

export default TimeDetails;
