// Starting fresh for Home.js

import React from 'react';
import doaharian from '../data/doaharian/doaharian.json';
import asmaulhusna from '../data/asmaulhusna/asmaulhusna.json';

const Home = () => {
    const randomPrayer = doaharian[Math.floor(Math.random() * doaharian.length)];
    const randomAsmaulHusna = asmaulhusna[Math.floor(Math.random() * asmaulhusna.length)];

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
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
            <div className="grid grid-cols-2 gap-4">
                <div
                    style={{ padding: '24px', marginBottom: '24px' }}
                    className="border border-gray-300 rounded-lg shadow-md bg-gray-50 cursor-pointer"
                    onClick={() => window.open('../data/doaharian/doaharian.json', '_blank')}
                >
                    <h3 className="text-xl font-semibold">Doa Harian</h3>
                    <p className="text-gray-700">Doa harian dalam bentuk json</p>
                </div>
                <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md bg-gray-50 cursor-pointer">
                    <h3 className="text-xl font-semibold">Card 2</h3>
                    <p className="text-gray-700">Description for Card 2</p>
                </div>
                <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md bg-gray-50 cursor-pointer">
                    <h3 className="text-xl font-semibold">Card 3</h3>
                    <p className="text-gray-700">Description for Card 3</p>
                </div>
                <div style={{ padding: '24px', marginBottom: '24px' }} className="border border-gray-300 rounded-lg shadow-md bg-gray-50 cursor-pointer">
                    <h3 className="text-xl font-semibold">Card 4</h3>
                    <p className="text-gray-700">Description for Card 4</p>
                </div>
            </div>
        </div>
    );
};

export default Home;