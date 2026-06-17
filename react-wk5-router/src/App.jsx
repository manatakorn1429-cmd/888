import React from 'react'
import {Routes, Route, Link} from 'react-router'
import Home from './pages/Home'
import Aboot from './pages/Aboot'
import NotFound from './pages/NotFound'
export default function App() {
  return (
    <div>
      <Link to="/">หน้าเเรก</Link>
      <Link to="/about">เกี่ยวกับ</Link>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<Aboot/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  );
}