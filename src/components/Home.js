// Starting fresh for Home.js

import React from 'react';
import doaharian from '../data/doaharian/doaharian.json';
import asmaulhusna from '../data/asmaulhusna/asmaulhusna.json';

const Home = () => {
    const randomPrayer = doaharian[Math.floor(Math.random() * doaharian.length)];
    const randomAsmaulHusna = asmaulhusna[Math.floor(Math.random() * asmaulhusna.length)];

    return (
        <div style={{ padding: '16px', maxWidth: '1280px', margin: '0 auto' }}>
            {/* Existing Random Prayer Card */}
            <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Doa Hari ini</h3>
                <p className="text-gray-700">{randomPrayer.name}</p>
                <p className="text-gray-700">{randomPrayer.translation}</p>
            </div>

            {/* Existing Asmaul Husna Card */}
            <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Asmaul Husna</h3>
                <p className="text-gray-700">{randomAsmaulHusna.latin}</p>
                <p className="text-gray-700">{randomAsmaulHusna.id_translation}</p>
            </div>

            {/* New Menu of Clickable Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md cursor-pointer">
                    <h3 className="text-xl font-semibold">Card 1</h3>
                    <p className="text-gray-700">Description for Card 1</p>
                </div>
                <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md cursor-pointer">
                    <h3 className="text-xl font-semibold">Card 2</h3>
                    <p className="text-gray-700">Description for Card 2</p>
                </div>
                <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md cursor-pointer">
                    <h3 className="text-xl font-semibold">Card 3</h3>
                    <p className="text-gray-700">Description for Card 3</p>
                </div>
                <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md cursor-pointer">
                    <h3 className="text-xl font-semibold">Card 4</h3>
                    <p className="text-gray-700">Description for Card 4</p>
                </div>
            </div>
        </div>
    );
};

export default Home;