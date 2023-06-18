import React from 'react';
import { Router } from './router/Router';
import { MainLayout } from './components/layout/MainLayout';
import { Header } from './components/Header';
import './App.css';
import { RecoilRoot } from 'recoil';

export default function App() {

  return (
    <div className='App'>
      <RecoilRoot>
        <MainLayout>
          <Header />
          <Router />
        </MainLayout>
      </RecoilRoot>
    </div>
  );
}