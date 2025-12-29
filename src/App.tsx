import React from 'react';
import { Layout } from './layouts/main/Layout';
import { MainPage } from './pages/main';
import { ExamplesPage } from './pages/examples';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/error';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/examples' element={<ExamplesPage />} />
        <Route
          path={'*'}
          element={<ErrorPage text={'NOT FOUND'} code={404} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
