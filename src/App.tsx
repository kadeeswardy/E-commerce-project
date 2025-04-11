import React from 'react';
import { TopBar } from './components/TopBar';
import { MainHeader } from './components/MainHeader';
import { SearchAndCategories } from './components/SearchAndCategories';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <MainHeader />
      <SearchAndCategories />
      <Home />
      <Footer />
    </div>
  );
};

export default App;