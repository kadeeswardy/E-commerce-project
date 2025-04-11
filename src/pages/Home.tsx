import React from 'react';
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {
  return (
    <div className="flex-1 p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        <Sidebar />
        <div className="w-full md:w-3/4">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;