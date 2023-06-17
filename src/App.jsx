import React from 'react';
import { Router } from './router/Router';
import { MainLayout } from './components/layout/MainLayout';
import { Header } from './components/Header';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Header />
        <Router />
      </MainLayout>
    </div>
  );
}