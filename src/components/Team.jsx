import React from 'react';
import './Team.css'; // Import the CSS file for styling

const teamMembers = [
  {
    name: 'Gökhan Özdemir',
    role: 'Project Manager',
    image: 'https://www.linkedin.com/in/gokhanozdemir/profile-image-url', // Replace with actual image URL
  },
  {
    name: 'Your Name',
    role: 'Full Stack Developer',
    image: 'https://www.linkedin.com/in/yourprofile/profile-image-url', // Replace with actual image URL
  },
  // Add more team members here
];

const Team = () => {
  return (
    <div className="team-page">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
