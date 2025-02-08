import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomaPage';

const App = () => {
  return (
    <Router>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here */}
        </Routes>
      </PageContent>
      <Footer />
    </Router>
  );
};

export default App;