import React from 'react';
import './App.css';
import Feed from "./Feed";
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
    {/* Bem naming conevention */}
    <Header />
    <div className="app_body">
    <Sidebar />
    <Feed />
    {/* 
    widget */}
    </div>


    </div>
  );
}

export default App;
