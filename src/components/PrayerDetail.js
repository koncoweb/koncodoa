// PrayerDetail.js
import React, { useState } from 'react';
import localData from '../data/doaharian/doaharian.json';
import '../styles.css';

const PrayerDetail = () => {
    const [data, setData] = useState(localData);

    return (
        <div>
            {data ? (
                <ul>
                    {data.map(prayer => (
                        <li key={prayer.number}>
                            <h3>{prayer.name} (#{prayer.number})</h3>
                            <p><strong>Arabic:</strong> {prayer.arabic}</p>
                            <p><strong>Latin:</strong> {prayer.latin}</p>
                            <p><strong>Translation:</strong> {prayer.translation}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PrayerDetail;