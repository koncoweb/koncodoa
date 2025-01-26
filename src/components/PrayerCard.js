import React from 'react';

const PrayerCard = ({ prayer }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md mb-4">
            <h3 className="text-xl font-semibold">{prayer.name}</h3>
            <p className="text-gray-700"><strong>Arabic:</strong> {prayer.arabic}</p>
            <p className="text-gray-700"><strong>Latin:</strong> {prayer.latin}</p>
            <p className="text-gray-700"><strong>Translation:</strong> {prayer.translation}</p>
        </div>
    );
};

export default PrayerCard;
