// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PrayerDetail from './components/PrayerDetail';
import RandomPrayer from './components/RandomPrayer';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doaharian/:prayerId" element={<PrayerDetail />} />
                <Route path="/asmaulhusna" element={<PrayerDetail />} />
                <Route path="/niatshalat" element={<PrayerDetail />} />
                <Route path="/quotes" element={<PrayerDetail />} />
                <Route path="/surah" element={<PrayerDetail />} />
                <Route path="/api/:id" element={<PrayerDetail />} />
                <Route path="/api/doa/:doa" element={<PrayerDetail />} />
                <Route path="/api/doa/v1/random" element={<RandomPrayer />} />
            </Routes>
        </Router>
    );
};

export default App;