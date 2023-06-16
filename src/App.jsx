import React, { useState } from 'react';
import { Router } from './router/Router';
import { MainLayout } from './components/layout/MainLayout';
import { TheHeader } from './components/TheHeader';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <MainLayout>
        <TheHeader/>
        <Router />
      </MainLayout>
    </div>
  );
}