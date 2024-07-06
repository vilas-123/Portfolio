import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';
import ArchiveProjects from './components/ArchiveProjects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path="/archiveProjects" element={<ArchiveProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
