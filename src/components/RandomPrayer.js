// RandomPrayer.js
import React, { useEffect, useState } from 'react';

function RandomPrayer() {
    const [prayer, setPrayer] = useState(null);

    useEffect(() => {
        const fetchRandomPrayer = async () => {
            const response = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random');
            const data = await response.json();
            setPrayer(data);
        };

        fetchRandomPrayer();
    }, []);

    if (!prayer) return <div>Loading...</div>;

    return (
        <div>
            <h1>Random Doa</h1>
            <p>{prayer.content}</p>
        </div>
    );
}

export default RandomPrayer;