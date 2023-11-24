import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TourPackageDetails = () => {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState(null);

  useEffect(() => {
    // Fetch the details of the selected package using tourId
    // Here you need to implement the logic to fetch details based on your data structure
    const fetchTourDetails = async () => {
      // Replace this with the actual logic to fetch details based on tourId
      // For example, if you have a backend API, make a request to get details for the specific tourId
      const response = await fetch(`API_ENDPOINT/tours/${id}`);
      const data = await response.json();
      setTourDetails(data);
    };

    fetchTourDetails();
  }, [id]);

  if (!tourDetails) {
    // Loading state or error handling, depending on your needs
    return <div>Loading...</div>;
  }

  // Destructure tourDetails to access individual properties
  const { date, name, duration, locations, images } = tourDetails;

  return (
    <div className='detail_container'>
      <div className='contant'>
        <div className='detail_info'>
          <div className='img-box'>
            {images && images.length > 0 && (
              images.map((image, index) => (
                <img key={index} src={image} alt={`Tour Image ${index + 1}`} />
              ))
            )}
          </div>
          <div className='product_detail'>
            <h3>{`Date: ${date}`}</h3>
            <h3>{`Name: ${name}`}</h3>
            <h3>{`Duration: ${duration}`}</h3>
            <h3>{`Locations: ${locations.join(', ')}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageDetails;
