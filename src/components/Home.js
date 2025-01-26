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
            <div className="border border-gray-300 rounded-lg shadow-md bg-[#16D92B] p-6 mb-6">
                <h3 className="text-xl font-semibold text-white">Doa Hari ini</h3>
                <p className="text-gray-700">{randomPrayer.name}</p>
                <p className="text-gray-700">{randomPrayer.translation}</p>
            </div>

            {/* Existing Asmaul Husna Card */}
            <div className="border border-gray-300 rounded-lg shadow-md bg-[#16D92B] p-6 mb-6">
                <h3 className="text-xl font-semibold text-white">Asmaul Husna</h3>
                <p className="text-gray-700">{randomAsmaulHusna.latin}</p>
                <p className="text-gray-700">{randomAsmaulHusna.id_translation}</p>
            </div>

            {/* New Menu of Clickable Cards */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="border border-gray-300 rounded-lg shadow-md bg-[#4EDD7A] cursor-pointer p-6">
                    <h3 className="text-xl font-semibold text-white">API Doa Harian</h3>
                    <p className="text-gray-700">Doa harian dalam bentuk json</p>
                </div>
                <div className="border border-gray-300 rounded-lg shadow-md bg-[#B3E6A0] cursor-pointer p-6">
                    <h3 className="text-xl font-semibold text-white">API Asmaul Husna</h3>
                    <p className="text-gray-700">Asmaul Husna dalam bentuk json</p>
                </div>
                <div className="border border-gray-300 rounded-lg shadow-md bg-[#D4EDB9] cursor-pointer p-6">
                    <h3 className="text-xl font-semibold text-white">API Quran Quotes</h3>
                    <p className="text-gray-700">Quotes Al Quran dalam bentuk json</p>
                </div>
                <div className="border border-gray-300 rounded-lg shadow-md bg-[#E8F5E9] cursor-pointer p-6">
                    <h3 className="text-xl font-semibold text-white">API Niat Shalat</h3>
                    <p className="text-gray-700">Niat Shalat dalam bentuk json</p>
                </div>
            </div>
        </div>
    );
};

export default Home;