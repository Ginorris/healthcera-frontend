import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

const sampleData = [
  {
    rank: 1,
    influencer: 'Dr. Peter Attia',
    category: 'Medicine',
    trustScore: 94,
    trend: 'up',
    followers: '1.2M+',
    verifiedClaims: 203,
    image: 'https://via.placeholder.com/40',
  },
  {
    rank: 2,
    influencer: 'Dr. Rhonda Patrick',
    category: 'Nutrition',
    trustScore: 90,
    trend: 'up',
    followers: '950K+',
    verifiedClaims: 150,
    image: 'https://via.placeholder.com/40',
  },
];

const filters = ['All', 'Nutrition', 'Fitness', 'Medicine', 'Mental Health'];

const App = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredData =
    activeFilter === 'All'
      ? sampleData
      : sampleData.filter((row) => row.category === activeFilter);

  return (
    <>
      <Header />
      <Home
        data={filteredData}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter} 
      />
    </>
  );
};

export default App;
