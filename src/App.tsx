import React from 'react';
import { Layout } from './layouts/main/Layout';
import { MainPage } from './pages/main';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/error';
import {
  ExamplesContextPage,
  ExamplesNavigationPage,
  ExamplesPropsPage,
  ExamplesStatePage,
  PhotoCardsPage,
} from './pages/examples';
import { BlogPosts } from './pages/examples/BlogPosts';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/examples'>
          <Route index element={<Navigate to='props' replace />} />
          <Route path='props' element={<ExamplesPropsPage />} />
          <Route path='state' element={<ExamplesStatePage />} />
          <Route path='context' element={<ExamplesContextPage />} />
          <Route path='navigation' element={<ExamplesNavigationPage />} />
          <Route path='use-effect' element={<BlogPosts />} />
          <Route path='fetch' element={<PhotoCardsPage />} />
        </Route>
        <Route
          path={'*'}
          element={<ErrorPage text={'NOT FOUND'} code={404} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
