import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  </BrowserRouter>
);

export default App;
