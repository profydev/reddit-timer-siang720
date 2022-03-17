import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './search';

const Main = () => (
    <div className="Main text-center">
        <Routes>
            <Route path="/">
                Homepage Content
            </Route>
            <Route path="/search" element={<Search />} />
        </Routes>
    </div>
);

export default Main;
