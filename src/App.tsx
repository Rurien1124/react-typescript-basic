import React from 'react';
import { Layout } from './layouts/main/Layout';
import { MainPage } from './pages/main';
import { Example } from './pages/example';

function App() {
  return (
    <Layout>
      <Example />
      <MainPage />
    </Layout>
  );
}

export default App;
