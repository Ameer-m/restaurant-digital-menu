import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <LanguageProvider>
     <BrowserRouter>
        <Routes>      
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/bahrain" element={<Bahrain />} /> */}
          <Route path="/:slug" element={<MenuPage />} />
          <Route path="/404" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
