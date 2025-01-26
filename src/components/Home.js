// Starting fresh for Home.js

import React from 'react';
import doaharian from '../data/doaharian/doaharian.json';
import asmaulhusna from '../data/asmaulhusna/asmaulhusna.json';

const Home = () => {
    const randomPrayer = doaharian[Math.floor(Math.random() * doaharian.length)];
    const randomAsmaulHusna = asmaulhusna[Math.floor(Math.random() * asmaulhusna.length)];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
            {/* Existing Random Prayer Card */}
            <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#16D92B', padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff' }}>Doa Hari ini</h3>
                <p style={{ color: '#ffffff' }}>{randomPrayer.name}</p>
                <p style={{ color: '#ffffff' }}>{randomPrayer.translation}</p>
            </div>

            {/* Existing Asmaul Husna Card */}
            <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#16D92B', padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff' }}>Asmaul Husna</h3>
                <p style={{ color: '#ffffff' }}>{randomAsmaulHusna.latin}</p>
                <p style={{ color: '#ffffff' }}>{randomAsmaulHusna.id_translation}</p>
            </div>

            {/* New Menu of Clickable Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#4EDD7A', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/doaharian/doaharian.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff' }}>API Doa Harian</h3>
                    <p style={{ color: '#ffffff' }}>Doa harian dalam bentuk json</p>
                </div>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#B3E6A0', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/asmaulhusna/asmaulhusna.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff' }}>API Asmaul Husna</h3>
                    <p style={{ color: '#ffffff' }}>Asmaul Husna dalam bentuk json</p>
                </div>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#D4EDB9', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/quotes/quotes.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff' }}>API Quran Quotes</h3>
                    <p style={{ color: '#ffffff' }}>Quotes Al Quran dalam bentuk json</p>
                </div>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#E8F5E9', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/niatshalat/all.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff' }}>API Niat Shalat</h3>
                    <p style={{ color: '#ffffff' }}>Niat Shalat dalam bentuk json</p>
                </div>
            </div>
        </div>
    );
};

export default Home;