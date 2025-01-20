// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PrayerDetail from './components/PrayerDetail';
import RandomPrayer from './components/RandomPrayer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/api/:id" element={<PrayerDetail />} />
                <Route path="/api/doa/:doa" element={<PrayerDetail />} />
                <Route path="/api/doa/v1/random" element={<RandomPrayer />} />
            </Routes>
        </Router>
    );
}

export default App;