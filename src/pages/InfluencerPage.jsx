import React, { useState } from 'react';
import Header from '../components/Header';
import InfluencerHeader from '../components/InfluencerHeader';
import StatsCard from '../components/StatCard';
import TabNavigation from '../components/TabNavigation';
import FilterSection from '../components/FilterSection';
import ClaimsList from '../components/ClaimList';
import '../styles/InfluencerPage.css';

const InfluencerPage = () => {
  const [activeTab, setActiveTab] = useState('Claims Analysis');
  const [activeFilters, setActiveFilters] = useState({ categories: [], statuses: [] });

  const influencerData = {
    name: 'Andrew Huberman',
    tags: ['Neuroscience', 'Sleep', 'Performance'],
    description: 'Stanford Professor of Neurobiology and Ophthalmology...',
    image: 'https://yt3.googleusercontent.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s160-c-k-c0x00ffffff-no-rj'
  };

  const stats = [
    { value: '89%', label: 'Trust Score' },
    { value: '$5.0M', label: 'Yearly Revenue' },
    { value: '1', label: 'Products' },
    { value: '4.2M+', label: 'Followers' },
  ];

  const claims = [
    {
      title: 'Viewing sunlight within 30-60 minutes of waking...',
      analysis: 'Multiple studies confirm morning light exposure...',
      date: '14/01/2024',
      status: 'verified',
      source: '#',
      trustScore: '92%',
    },
  ];

  const handleFilterChange = (type, value) => {
    setActiveFilters((prevFilters) => {
      const updated = { ...prevFilters };
      if (updated[type].includes(value)) {
        updated[type] = updated[type].filter((item) => item !== value);
      } else {
        updated[type].push(value);
      }
      return updated;
    });
  };

  return (
    <>
      <Header />
      <div>
        <InfluencerHeader {...influencerData} />
        <div className="influencer-page__stats">
          {stats.map((stat, index) => (
            <StatsCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
        <TabNavigation
          tabs={['Claims Analysis', 'Recommended Products', 'Monetization']}
          activeTab={activeTab}
          onTabClick={setActiveTab} />
        <FilterSection
          categories={['All Categories', 'Sleep', 'Performance', 'Nutrition', 'Fitness']}
          statuses={['All Statuses', 'Verified', 'Questionable', 'Debunked']}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange} />
        <ClaimsList claims={claims} />
      </div>
    </>
  );
};

export default InfluencerPage;
