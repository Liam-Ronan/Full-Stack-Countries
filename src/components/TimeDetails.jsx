import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimeDetails = ({ countryData }) => {
    const [timeData, setTimeData] = useState(null);

    useEffect(() => {
        const fetchCountryTime = () => {
            const timeApiUrl = `https://worldtimeapi.org/api/timezone/${countryData.region}/${countryData.capital[0]}`;

            axios.get(timeApiUrl)
                .then(res => {
                    console.log(res.data);
                    setTimeData(res.data);
                })
                .catch(err => {
                    console.error(err);
                });
        }

        fetchCountryTime();
    }, [countryData])

    // Format the time
    const formattedTime = timeData ? new Date(timeData.datetime).toLocaleTimeString() : '';

    return (
        <>
            {timeData ? (
                <h5 className='text-light'>Current Time: {formattedTime}</h5>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default TimeDetails;
