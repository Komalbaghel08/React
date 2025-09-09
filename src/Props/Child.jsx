import React from 'react';

const Card = ({ name, role, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};

export default Card;
