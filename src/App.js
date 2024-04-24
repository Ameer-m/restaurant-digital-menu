import React from "react";
import MyRouter from "./router/Index";
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
    <div className="bg-white">
      <MyRouter children={undefined} />
      <p>some text</p>
    </div>
    </LanguageProvider>
  );
}

export default App;
