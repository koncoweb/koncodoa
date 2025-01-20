// PrayerDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PrayerDetail() {
    const { id, doa } = useParams();
    const [prayer, setPrayer] = useState(null);

    useEffect(() => {
        const fetchPrayer = async () => {
            const response = await fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api${id ? `/${id}` : `/doa/${doa}`}`);
            const data = await response.json();
            setPrayer(data);
        };

        fetchPrayer();
    }, [id, doa]);

    if (!prayer) return <div>Loading...</div>;

    return (
        <div>
            <h1>{prayer.title}</h1>
            <p>{prayer.content}</p>
        </div>
    );
}

export default PrayerDetail;