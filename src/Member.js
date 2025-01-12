import React from 'react';
import './Member.css';

const Member = ({ member }) => {
  return (
    <div className="member-card">
      <img src={member.photo} alt={member.name} className="member-photo" />
      <h3>{member.name}</h3>
      <p>{member.designation}</p>
      <p>{member.residence}</p>
    </div>
  );
};

export default Member;
