import React from 'react';
import TourPackageDetails from './TourPackageDetails';

const TourDetailsPage = () => {
  const tourDetails = {
    name: 'Hill Station Retreat',
    date: '2023-09-15',
    duration: '5 days',
    locations: ['Mountain Peak', 'Valley View', 'Nature Trails'],
    // Add more details as needed
  };

  return (
    <div>
      <h2>Tour Details Page</h2>
      <TourPackageDetails tourDetails={tourDetails} />
    </div>
  );
};

export default TourDetailsPage;
