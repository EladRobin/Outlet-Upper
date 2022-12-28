import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<h2>hey i am index route</h2>} />
                    <Route path="/about" element={<h2>hey i am about route</h2>} />
                    <Route path="/contact" element={<h2>hey i am contact route</h2>} />
                    <Route path='/*' element={<h2>404 page</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes