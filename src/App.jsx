import React, { useState } from 'react';
import { Router } from './router/Router';
import { TheHeader } from './components/TheHeader';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Router />
    </div>
  );
}