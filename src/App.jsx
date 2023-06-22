import React from 'react';
import { Router } from './router/Router';
import { MainLayout } from './components/layout/MainLayout';
import { Header } from './components/Header';
import './App.css';
import { RecoilRoot } from 'recoil';

import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

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