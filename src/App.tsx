import React from 'react';
import { Layout } from './layouts/main/Layout';
import { MainPage } from './pages/main';
import { Example } from './pages/example';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/error';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/example' element={<Example />} />
        <Route
          path={'*'}
          element={<ErrorPage text={'NOT FOUND'} code={404} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
