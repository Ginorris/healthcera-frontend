import React from 'react';
import '../styles/InfluencerHeader.css';

const InfluencerHeader = ({ name, tags, description, image }) => (
  <div className="influencer-header">
    <img
      src={image}
      alt={name}
      className="influencer-header__image"
    />
    <div className="influencer-header__content">
      <h1 className="influencer-header__name">{name}</h1>
      <div className="influencer-header__tags">
        {tags.map((tag, index) => (
          <span key={index} className="influencer-header__tag">
            {tag}
          </span>
        ))}
      </div>
      <p className="influencer-header__description">{description}</p>
    </div>
  </div>
);

export default InfluencerHeader;
