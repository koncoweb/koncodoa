// Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [prayers, setPrayers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrayers = async () => {
            try {
                const response = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPrayers(data);
            } catch (error) {
                console.error('Failed to fetch prayers:', error);
                setError(error.message);
            }
        };

        fetchPrayers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Doa Harian Muslim</h1>
            <ul>
                {prayers.map((prayer) => (
                    <li key={prayer.id}>
                        <Link to={`/api/${prayer.id}`}>{prayer.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;