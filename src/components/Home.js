// Starting fresh for Home.js

import React from 'react';
import doaharian from '../data/doaharian/doaharian.json';
import asmaulhusna from '../data/asmaulhusna/asmaulhusna.json';

const Home = () => {
    const randomPrayer = doaharian[Math.floor(Math.random() * doaharian.length)];
    const randomAsmaulHusna = asmaulhusna[Math.floor(Math.random() * asmaulhusna.length)];

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Doa Hari ini</h3>
                <p className="text-gray-700">{randomPrayer.name}</p>
                <p className="text-gray-700">{randomPrayer.translation}</p>
            </div>
            <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Asmaul Husna</h3>
                <p className="text-gray-700">{randomAsmaulHusna.latin}</p>
                <p className="text-gray-700">{randomAsmaulHusna.id_translation}</p>
            </div>
            {/* New content goes here */}
        </div>
    );
};

export default Home;