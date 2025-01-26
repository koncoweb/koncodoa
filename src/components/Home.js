// Starting fresh for Home.js

import React from 'react';
import doaharian from '../data/doaharian/doaharian.json';
import asmaulhusna from '../data/asmaulhusna/asmaulhusna.json';
import mesjid1 from '../mesjid1-removebg-preview.png'; // Importing the first background image
import mesjid2 from '../mesjid2-removebg-preview.png'; // Importing the second background image

const Home = () => {
    const randomPrayer = doaharian[Math.floor(Math.random() * doaharian.length)];
    const randomAsmaulHusna = asmaulhusna[Math.floor(Math.random() * asmaulhusna.length)];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>KoncoDoa : API Islami dari Koncoweb</h1>
            <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
                <ul>
                    <li>Belajar buat aplikasi tanpa koding dari REST API pakai AI : <a href="https://www.youtube.com/@mohmbilly" style={{ color: '#007bff', textDecoration: 'underline' }}>YouTube Link</a></li>
                    <li>KoncoDoa adalah API untuk keperluan pengembangan aplikasi muslim yang kami kembangkan follow developer Koncoweb (<a href="https://github.com/koncoweb" style={{ color: '#007bff', textDecoration: 'underline' }}>GitHub Link</a>), silahkan pakai dengan menyertakan sumber.</li>
                </ul>
            </p>
            {/* Existing Random Prayer Card */}
            <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#16D92B', padding: '24px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                <img src={mesjid1} alt="Background" style={{ position: 'absolute', bottom: '-60%', right: '0', width: '50%', height: 'auto', objectFit: 'cover', opacity: 0.2 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', position: 'relative', zIndex: 1 }}>Doa Hari ini</h3>
                <p style={{ color: '#ffffff', position: 'relative', zIndex: 1 }}>{randomPrayer.name}</p>
                <p style={{ color: '#ffffff', position: 'relative', zIndex: 1 }}>{randomPrayer.translation}</p>
            </div>

            {/* Existing Asmaul Husna Card */}
            <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#16D92B', padding: '24px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                <img src={mesjid2} alt="Background" style={{ position: 'absolute', bottom: '-30%', right: '0', width: '50%', height: 'auto', objectFit: 'cover', opacity: 0.2 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', position: 'relative', zIndex: 1 }}>Asmaul Husna</h3>
                <p style={{ color: '#ffffff', position: 'relative', zIndex: 1 }}>{randomAsmaulHusna.latin}</p>
                <p style={{ color: '#ffffff', position: 'relative', zIndex: 1 }}>{randomAsmaulHusna.id_translation}</p>
            </div>

            {/* New Menu of Clickable Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#4EDD7A', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/doaharian/doaharian.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000000' }}>API Doa Harian</h3>
                    <p style={{ color: '#000000' }}>Doa harian dalam bentuk json</p>
                </div>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#B3E6A0', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/asmaulhusna/asmaulhusna.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000000' }}>API Asmaul Husna</h3>
                    <p style={{ color: '#000000' }}>Asmaul Husna dalam bentuk json</p>
                </div>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#D4EDB9', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/quotes/quotes.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000000' }}>API Quran Quotes</h3>
                    <p style={{ color: '#000000' }}>Quotes Al Quran dalam bentuk json</p>
                </div>
                <div style={{ border: '1px solid #D1D5DB', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#E8F5E9', cursor: 'pointer', padding: '24px' }} onClick={() => window.open('../data/niatshalat/all.json', '_blank')}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000000' }}>API Niat Shalat</h3>
                    <p style={{ color: '#000000' }}>Niat Shalat dalam bentuk json</p>
                </div>
            </div>
        </div>
    );
};

export default Home;