import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import StatsCard from '../components/StatCard';
import FilterButton from '../components/FilterButton';
import LeaderboardTable from '../components/LeaderboardTable';

const Home = ({ data, filters, activeFilter, onFilterChange }) => (
  <div className="home">
    <Header />
    <div className="home__stats">
      <StatsCard value="1,234" label="Active Influencers" />
      <StatsCard value="25,431" label="Claims Verified" />
      <StatsCard value="85.7%" label="Average Trust Score" />
    </div>
    <div className="home__filters">
      {filters.map((filter, index) => (
        <FilterButton
          key={index}
          label={filter}
          active={activeFilter === filter}
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </div>
    <LeaderboardTable data={data} />
  </div>
);

export default Home;
